// index.d.ts
declare module 'leedz-design-system' {
  import { ComponentType, ReactNode, MouseEvent } from 'react';
  import { DefaultTheme } from 'styled-components';

  export interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'primaryDark' | 'secondaryDark' | 'soft' | 'vividPink' | 'vividPinkLight' | 'vividPinkDark' | 'blueKing' | 'blueKingLight' | 'blueKingDark' | 'spaceBlack' | 'spaceBlackLight' | 'spaceBlackDark' | 'offWhite' | 'offWhiteLight' | 'offWhiteDark';
    size?: 'small' | 'medium' | 'large';
    rounded?: boolean;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  }

  export interface ContainerProps {
    children: ReactNode;
    maxWidth?: string;
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    display?: 'block' | 'flex' | 'inline-flex' | 'grid' | 'inline-block' | 'none';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
    gap?: string;
  }

  export const Button: ComponentType<ButtonProps>;
  export const Container: ComponentType<ContainerProps>;
  export const theme: DefaultTheme;
}
