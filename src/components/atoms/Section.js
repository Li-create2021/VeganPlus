import styled, { css } from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  align-content: center;

  ${props => props.RecipeCardInfo && css`
  max-width: 200px;
  `}

`;
export default Section;