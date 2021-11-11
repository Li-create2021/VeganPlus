import styled, { css } from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  align-content: center;
  margin: 20px;

${props => props.RecipeCardInfo && css`
display: flex;
flex-wrap: wrap;
width: 80%;
margin-top: 5%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
align-content: center;

`}
${props => props.RecipeTile && css`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  align-content: center;
  margin: 30px;
  
  `}
`;
export default Section;