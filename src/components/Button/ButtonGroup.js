import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: ${props => props.block ? 'flex' : 'inline-flex'};
  button {
    flex-grow: 1;
    &:not(:last-child) {
      border-right: none;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    &:not(:first-child) {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
`;

export default ButtonGroup;