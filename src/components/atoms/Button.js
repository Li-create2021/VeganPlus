import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0.5em;
  color: white;
  background-color: rgb(38, 170, 21);
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;

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
`;

export default Button;
