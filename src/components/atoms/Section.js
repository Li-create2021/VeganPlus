import styled, { css } from 'styled-components';

const Section = styled.section`
  width: 100%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

${props => props.RecipeCardInfo && css`
    display: flex;
    align-self: flex-end;
    margin: 5px;
    text-align: left;
}
`}
`;

export default Section;