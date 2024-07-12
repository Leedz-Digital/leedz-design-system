import React from 'react';
import { FaBeer, FaArrowRight } from 'react-icons/fa';
import Button from './Button';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyle from '../../styles/global';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select', options: [
        'primary',
        'secondary',
        'primaryDark',
        'secondaryDark',
        'soft',
        'vividPink',
        'vividPinkLight',
        'vividPinkDark',
        'blueKing',
        'blueKingLight',
        'blueKingDark',
        'spaceBlack',
        'spaceBlackLight',
        'spaceBlackDark',
        'offWhite',
        'offWhiteLight',
        'offWhiteDark'
      ]},
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
    rounded: {
      control: 'boolean',
      description: 'Define se o botão tem bordas arredondadas.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
    iconPosition: {
      control: { type: 'select', options: ['left', 'right'] },
      description: 'Posição do ícone no botão.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
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
  },
  decorators: [(Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  variant: 'primaryDark',
  children: 'Primary Dark Button',
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  variant: 'secondaryDark',
  children: 'Secondary Dark Button',
};

export const Soft = Template.bind({});
Soft.args = {
  variant: 'soft',
  children: 'Soft Button',
};

export const VividPink = Template.bind({});
VividPink.args = {
  variant: 'vividPink',
  children: 'Vivid Pink Button',
};

export const VividPinkLight = Template.bind({});
VividPinkLight.args = {
  variant: 'vividPinkLight',
  children: 'Vivid Pink Light Button',
};

export const VividPinkDark = Template.bind({});
VividPinkDark.args = {
  variant: 'vividPinkDark',
  children: 'Vivid Pink Dark Button',
};

export const BlueKing = Template.bind({});
BlueKing.args = {
  variant: 'blueKing',
  children: 'Blue King Button',
};

export const BlueKingLight = Template.bind({});
BlueKingLight.args = {
  variant: 'blueKingLight',
  children: 'Blue King Light Button',
};

export const BlueKingDark = Template.bind({});
BlueKingDark.args = {
  variant: 'blueKingDark',
  children: 'Blue King Dark Button',
};

export const SpaceBlack = Template.bind({});
SpaceBlack.args = {
  variant: 'spaceBlack',
  children: 'Space Black Button',
};

export const SpaceBlackLight = Template.bind({});
SpaceBlackLight.args = {
  variant: 'spaceBlackLight',
  children: 'Space Black Light Button',
};

export const SpaceBlackDark = Template.bind({});
SpaceBlackDark.args = {
  variant: 'spaceBlackDark',
  children: 'Space Black Dark Button',
};

export const OffWhite = Template.bind({});
OffWhite.args = {
  variant: 'offWhite',
  children: 'Off White Button',
};

export const OffWhiteLight = Template.bind({});
OffWhiteLight.args = {
  variant: 'offWhiteLight',
  children: 'Off White Light Button',
};

export const OffWhiteDark = Template.bind({});
OffWhiteDark.args = {
  variant: 'offWhiteDark',
  children: 'Off White Dark Button',
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  variant: 'primary',
  children: [<FaBeer key="icon" />, ' Leading Icon'],
  iconPosition: 'left',
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  variant: 'primary',
  children: ['Trailing Icon ', <FaArrowRight key="icon" />],
  iconPosition: 'right',
};

export const RoundedPrimary = Template.bind({});
RoundedPrimary.args = {
  variant: 'primary',
  children: 'Rounded Primary',
  rounded: true,
};

export const RoundedSecondary = Template.bind({});
RoundedSecondary.args = {
  variant: 'secondary',
  children: 'Rounded Secondary',
  rounded: true,
};

export const CircularButton = Template.bind({});
CircularButton.args = {
  variant: 'primary',
  children: <FaBeer />,
  rounded: true,
  size: 'large',
};
