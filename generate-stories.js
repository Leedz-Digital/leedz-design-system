const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const prettier = require('prettier');

const componentsDir = path.join(__dirname, 'src', 'components');
const stylesDir = path.join(__dirname, 'src', 'styles');
const themeFile = path.join(stylesDir, 'theme.js');
const typesFile = path.join(__dirname, 'index.d.ts');

let typesContent = `declare module 'leedz-design-system' {
  import { ComponentType, ReactNode, MouseEvent } from 'react';
  import { DefaultTheme } from 'styled-components';

  export const theme: DefaultTheme;
`;

function getDefaultPropValue(prop) {
  switch (prop.type) {
    case 'string':
      return `'${prop.defaultValue || ''}'`;
    case 'number':
      return prop.defaultValue || 0;
    case 'bool':
      return prop.defaultValue || false;
    case 'object':
    case 'element':
      return prop.defaultValue || null;
    default:
      return `'${prop.defaultValue || ''}'`;
  }
}

function extractThemeVariants(themeCode) {
  const ast = parser.parse(themeCode, { sourceType: 'module', plugins: ['jsx'] });
  const variants = [];
  traverse(ast, {
    ObjectProperty(path) {
      if (path.node.key.name === 'colors') {
        path.node.value.properties.forEach((color) => {
          variants.push(color.key.name);
        });
      }
    },
  });
  return variants;
}

function extractComponentProps(componentCode) {
  const ast = parser.parse(componentCode, { sourceType: 'module', plugins: ['jsx'] });
  let propTypes = {};
  let defaultProps = {};

  traverse(ast, {
    AssignmentExpression(path) {
      if (
        t.isMemberExpression(path.node.left) &&
        path.node.left.property.name === 'propTypes'
      ) {
        path.node.right.properties.forEach((prop) => {
          const propName = prop.key.name;
          const propValue = prop.value.property ? prop.value.property.name : null;
          propTypes[propName] = propValue;
        });
      }
      if (
        t.isMemberExpression(path.node.left) &&
        path.node.left.property.name === 'defaultProps'
      ) {
        path.node.right.properties.forEach((prop) => {
          const propName = prop.key.name;
          const propValue = prop.value.value;
          defaultProps[propName] = propValue;
        });
      }
    },
  });

  return { propTypes, defaultProps };
}

async function generateStory(componentPath, themeVariants) {
  const componentName = path.basename(componentPath, path.extname(componentPath));
  const componentDir = path.dirname(componentPath);
  const storyFile = path.join(componentDir, `${componentName}.stories.js`);

  const componentCode = fs.readFileSync(componentPath, 'utf8');
  const { propTypes, defaultProps } = extractComponentProps(componentCode);

  const args = Object.keys(defaultProps)
    .map((key) => `${key}: ${getDefaultPropValue({ type: propTypes[key], defaultValue: defaultProps[key] })}`)
    .join(', ');

  const argTypes = {
    variant: {
      control: { type: 'select', options: themeVariants },
      description: 'Variante do botão para definir o estilo.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Tamanho do botão.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    iconPosition: {
      control: { type: 'select', options: ['left', 'right'] },
      description: 'Posição do ícone no botão.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    icon: {
      control: 'object',
      description: 'Ícone a ser exibido no botão.',
      table: {
        type: { summary: 'element' },
        defaultValue: { summary: null },
      },
    },
    children: {
      control: 'text',
      description: 'Conteúdo do botão.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '' },
      },
    },
    onClick: { action: 'clicked', description: 'Função chamada ao clicar no botão.' },
  };

  const variantStories = themeVariants.map(variant => `
export const ${componentName}${variant.charAt(0).toUpperCase() + variant.slice(1)} = Template.bind({});
${componentName}${variant.charAt(0).toUpperCase() + variant.slice(1)}.args = {
  variant: '${variant}',
  children: '${variant.charAt(0).toUpperCase() + variant.slice(1)} ${componentName}',
};
`).join('');

  const sizeStories = ['small', 'medium', 'large'].map(size => `
export const ${componentName}Primary${size.charAt(0).toUpperCase() + size.slice(1)} = Template.bind({});
${componentName}Primary${size.charAt(0).toUpperCase() + size.slice(1)}.args = {
  variant: 'primary',
  size: '${size}',
  children: 'Primary ${size.charAt(0).toUpperCase() + size.slice(1)} ${componentName}',
};
`).join('');

  const storyTemplate = `
import React from 'react';
import { FaBeer } from 'react-icons/fa';
import ${componentName} from './${componentName}';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyle from '../../styles/global';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: ${JSON.stringify(argTypes, null, 2)},
  decorators: [(Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )],
};

const Template = (args) => <${componentName} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary ${componentName}',
  icon: <FaBeer />,
};

${variantStories}

${sizeStories}
`;

  const formattedStory = await prettier.format(storyTemplate, { parser: 'babel' });

  fs.writeFileSync(storyFile, formattedStory, 'utf8');
  console.log(`História do componente ${componentName} gerada com sucesso.`);

  // Atualizar o arquivo index.d.ts
  let propTypesString = '';
  for (const prop in propTypes) {
    propTypesString += `  ${prop}?: string;\n`;
  }

  typesContent += `
  export interface ${componentName}Props {
${propTypesString}
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  }

  export const ${componentName}: ComponentType<${componentName}Props>;
`;
}

// Iterar sobre os diretórios de componentes
async function generateStories() {
  const themeCode = fs.readFileSync(themeFile, 'utf8');
  const themeVariants = extractThemeVariants(themeCode);

  const promises = fs.readdirSync(componentsDir).map(async (componentDir) => {
    const componentPath = path.join(componentsDir, componentDir, `${componentDir}.jsx`);
    if (fs.existsSync(componentPath)) {
      await generateStory(componentPath, themeVariants);
    }
  });

  await Promise.all(promises);

  typesContent += `
}
`;

  const formattedTypes = await prettier.format(typesContent, { parser: 'typescript' });

  fs.writeFileSync(typesFile, formattedTypes, 'utf8');
  console.log('Arquivo de tipos index.d.ts atualizado com sucesso.');
}

generateStories().catch((err) => {
  console.error(err);
  process.exit(1);
});
