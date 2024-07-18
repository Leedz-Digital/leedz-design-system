
# ![Leedz Logo](https://agencialeedz.com/assets/lg1.png) 
# Leedz Design System

[![NPM version](https://img.shields.io/npm/v/leedz-design-system.svg)](https://www.npmjs.com/package/leedz-design-system)
[![Build Status](https://img.shields.io/github/workflow/status/Leedz-Digital/leedz-design-system/CI)](https://github.com/Leedz-Digital/leedz-design-system/actions)
[![License](https://img.shields.io/npm/l/leedz-design-system.svg)](https://github.com/Leedz-Digital/leedz-design-system/blob/main/LICENSE)

Leedz Design System é uma biblioteca de componentes reutilizáveis para React, criada para facilitar a construção de interfaces de usuário consistentes e acessíveis.

## 📦 Instalação

Você pode instalar o pacote via npm ou yarn:

```bash
npm install leedz-design-system
```

ou

```bash
yarn add leedz-design-system
```

## 🚀 Uso

Aqui está um exemplo básico de como usar o Leedz Design System em um projeto React:

```jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, Button, theme } from 'leedz-design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container padding="20px">
        <h1>Hello, Leedz!</h1>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
```

## 📚 Documentação

A documentação completa do Leedz Design System está disponível no [Storybook](https://leedz-digital.github.io/leedz-design-system). 

## 🔧 Desenvolvimento

### Pré-requisitos

- Node.js
- npm ou yarn

### Clonando o repositório

```bash
git clone https://github.com/Leedz-Digital/leedz-design-system.git
cd leedz-design-system
```

### Instalando dependências

```bash
npm install
```

ou

```bash
yarn install
```

### Executando o Storybook

```bash
npm run storybook
```

ou

```bash
yarn storybook
```

## 🛠 Estrutura do Projeto

- **src/components**: Contém todos os componentes do design system.
- **src/styles**: Contém temas e estilos globais.
- **.storybook**: Configurações do Storybook.

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga as diretrizes de contribuição descritas no [CONTRIBUTING.md](https://github.com/Leedz-Digital/leedz-design-system/blob/main/CONTRIBUTING.md).

## 📜 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](https://github.com/Leedz-Digital/leedz-design-system/blob/main/LICENSE) para mais detalhes.

## 📞 Contato

Para mais informações, visite nosso [site](https://agencialeedz.com) ou entre em contato pelo [email](mailto:contato@agencialeedz.com).

---

Feito com ❤️ pela equipe Leedz Digital.
