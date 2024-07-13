// src/components/Container/Container.jsx
import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './Container.styled';

const Container = ({
  children,
  maxWidth,
  padding,
  margin,
  backgroundColor,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
}) => {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      padding={padding}
      margin={margin}
      backgroundColor={backgroundColor}
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
    >
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  backgroundColor: PropTypes.string,
  display: PropTypes.oneOf(['block', 'flex', 'inline-flex', 'grid', 'inline-block', 'none']),
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline']),
  gap: PropTypes.string,
};

Container.defaultProps = {
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

export default Container;
