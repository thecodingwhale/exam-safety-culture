import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonGroup from './ButtonGroup';

const StyledButton = styled.button`
  background: ${props => props.active ? props.theme.primary.brandColor : 'white'};
  color: ${props => props.active ? 'white' : props.theme.primary.brandColor};
  border: 2px solid ${props => props.theme.primary.brandColor}};
  border-radius: 3px;
  padding: .7em 1em;
  @media (min-width: 768px) {
    padding: 0.4em 1em;
  }
`;

class Button extends Component {
	handleClick = (event) => {
		if (this.props.onClick) {
			this.props.onClick();
		}
	}

	render() {
		const { children, active, className } = this.props;
	  return (
	    <StyledButton
	    	type="button"
	    	onClick={ this.handleClick }
	    	active={ active }
	    	className={ className }
	    >
	      { children }
	    </StyledButton>
	  );
	}
}

Button.propTypes = {
	onClick: PropTypes.func,
};

export default Button;

export {
	ButtonGroup,
};