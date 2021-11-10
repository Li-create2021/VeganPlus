import styled, { css } from 'styled-components';

const Button = styled.button`
  margin: 0.5em;
  padding: 0.5em;
  color: white;
  background-color: rgb(38, 170, 21);
  cursor: pointer;
  :hover {
    background-color: rgb(40, 180, 21);
    cursor: pointer;

  }
  ${props => props.isFavorite && css`
    background-color: white;
    color: darkblue;
    :hover {
      background-color: #bcc8d7;
    }
  `}
  ${props => props.isDisabled && css`
    color: #a1a1a1;
    background-color: #e0e0e0;
    text-decoration: line-through;
    :hover {
      background-color: #c9c9c9;
    }
  `}
`;

export default Button;