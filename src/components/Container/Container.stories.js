// src/components/Container/Container.stories.js
import React from 'react';
import Container from './Container';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyle from '../../styles/global';

export default {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Este é um componente de container que pode ser usado para layout flexível.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'text',
      description: 'Max width of the container.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1200px' },
      },
    },
    padding: {
      control: 'text',
      description: 'Padding inside the container.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0 16px' },
      },
    },
    margin: {
      control: 'text',
      description: 'Margin outside the container.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0 auto' },
      },
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the container.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    display: {
      control: { type: 'select', options: ['block', 'flex', 'inline-flex', 'grid', 'inline-block', 'none'] },
      description: 'Display type of the container.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'block' },
      },
    },
    flexDirection: {
      control: { type: 'select', options: ['row', 'row-reverse', 'column', 'column-reverse'] },
      description: 'Flex direction for flex containers.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'row' },
      },
    },
    justifyContent: {
      control: { type: 'select', options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'] },
      description: 'Justify content for flex containers.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'flex-start' },
      },
    },
    alignItems: {
      control: { type: 'select', options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'] },
      description: 'Align items for flex containers.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'stretch' },
      },
    },
    gap: {
      control: 'text',
      description: 'Gap between items in flex or grid containers.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0' },
      },
    },
    children: {
      control: 'text',
      description: 'Content inside the container.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '' },
      },
    },
  },
  decorators: [(Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )],
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Container',
  maxWidth: '1200px',
  padding: '0 16px',
  margin: '0 auto',
  backgroundColor: '',
  display: 'block',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: '0',
};

export const FlexContainer = Template.bind({});
FlexContainer.args = {
  children: 'Flex Container',
  maxWidth: '100%',
  padding: '20px',
  margin: '10px',
  backgroundColor: '#f0f0f0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  children: 'Custom Background Container',
  maxWidth: '800px',
  padding: '30px',
  margin: '20px auto',
  backgroundColor: '#d3d3d3',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '15px',
};

export const GridContainer = Template.bind({});
GridContainer.args = {
  children: 'Grid Container',
  maxWidth: '100%',
  padding: '20px',
  margin: '10px',
  backgroundColor: '#e0e0e0',
  display: 'grid',
  gap: '10px',
};

export const InlineFlexContainer = Template.bind({});
InlineFlexContainer.args = {
  children: 'Inline Flex Container',
  maxWidth: '100%',
  padding: '20px',
  margin: '10px',
  backgroundColor: '#cccccc',
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
};
