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
  
    export const Button: ComponentType<ButtonProps>;
    export const theme: DefaultTheme;
  }
  