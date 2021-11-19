import styled, { css } from 'styled-components';

const Form = styled.form`
${props => props.pathname === "/Favorites" && css`
    display: none;

`}
${props => props.pathname === "/" && css`
    background-image: url(https://i.ibb.co/6DjLHFh/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg);
    background-repeat: no-repeat;
    height: 150px;

`}
    width: 90%;
    min-width: 320px;
    max-width: 450px;
    border-radius: 2px;
    align-content: center;
    margin: 0px 20px 20px 20px;
    text-align: center;
    justify-content: center;

`;

export default Form;