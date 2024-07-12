import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';
import { IconContext } from 'react-icons';

const Button = ({ children, variant, size, rounded, icon, iconPosition, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <StyledButton variant={variant} size={size} rounded={rounded} iconPosition={iconPosition} {...props}>
      {icon && iconPosition === 'left' && (
        <IconContext.Provider value={{ size: '1.5em' }}>
          {icon}
        </IconContext.Provider>
      )}
      {childrenArray}
      {icon && iconPosition === 'right' && (
        <IconContext.Provider value={{ size: '1.5em' }}>
          {icon}
        </IconContext.Provider>
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
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
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  rounded: PropTypes.bool,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  rounded: false,
  icon: null,
  iconPosition: 'left',
};

export default Button;