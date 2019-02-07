import styled from 'styled-components';

const Pill = styled.span`
  background-color: ${props => props.theme.accent.brandColor};
  color: ${props => props.theme.accent.fontColor};
  border-radius: 3px;
  font-size: 70%;
  padding: .4em .8em;
  font-weight: bold;
`;

export default Pill;