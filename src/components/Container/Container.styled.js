// src/components/Container/Container.styled.js
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: ${({ maxWidth }) => maxWidth || '1200px'};
  padding: ${({ padding }) => padding || '0 16px'};
  margin: ${({ margin }) => margin || '0 auto'};
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.background};
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  gap: ${({ gap }) => gap || '0'};
`;

export default StyledContainer;
