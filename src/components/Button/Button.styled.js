import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${({ theme, size }) => {
    switch (size) {
      case 'small':
        return theme.spacing.sm;
      case 'large':
        return theme.spacing.lg;
      default:
        return theme.spacing.md;
    }
  }};
  border: none;
  border-radius: ${({ theme, rounded }) => (rounded ? theme.borderRadius.full : theme.borderRadius.md)};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '12px';
      case 'large':
        return '20px';
      default:
        return '16px';
    }
  }};
  cursor: pointer;
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'primaryDark':
        return theme.colors.blueKing.dark;
      case 'secondaryDark':
        return theme.colors.gray[700];
      case 'soft':
        return theme.colors.gray[200];
      case 'vividPink':
        return theme.colors.vividPink.DEFAULT;
      case 'vividPinkLight':
        return theme.colors.vividPink.light;
      case 'vividPinkDark':
        return theme.colors.vividPink.dark;
      case 'blueKing':
        return theme.colors.blueKing.DEFAULT;
      case 'blueKingLight':
        return theme.colors.blueKing.light;
      case 'blueKingDark':
        return theme.colors.blueKing.dark;
      case 'spaceBlack':
        return theme.colors.spaceBlack.DEFAULT;
      case 'spaceBlackLight':
        return theme.colors.spaceBlack.light;
      case 'spaceBlackDark':
        return theme.colors.spaceBlack.dark;
      case 'offWhite':
        return theme.colors.offWhite.DEFAULT;
      case 'offWhiteLight':
        return theme.colors.offWhite.light;
      case 'offWhiteDark':
        return theme.colors.offWhite.dark;
      default:
        return theme.colors.primary;
    }
  }};
  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'primaryDark':
      case 'secondaryDark':
      case 'vividPink':
      case 'vividPinkDark':
      case 'blueKing':
      case 'blueKingDark':
      case 'spaceBlack':
      case 'spaceBlackDark':
        return theme.colors.white;
      case 'offWhite':
      case 'offWhiteLight':
        return theme.colors.text;
      default:
        return theme.colors.white;
    }
  }};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transition.default};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  svg {
    margin: ${({ iconPosition }) => (iconPosition === 'left' ? '0 8px 0 0' : '0 0 0 8px')};
  }
`;