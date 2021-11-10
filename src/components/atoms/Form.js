import styled, { css } from 'styled-components';

const Form = styled.form`
${props => props.pathname === "/" && css`
    background-image: url(https://i.ibb.co/6DjLHFh/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg);
    background-repeat: no-repeat;
`}
width: 80%;
min-width: 320px;
max-width: 510px;
height: 150px;
border-radius: 2px;
align-content: center;
margin: 0px 20px 20px 20px;
text-align: center;
`;

export default Form;