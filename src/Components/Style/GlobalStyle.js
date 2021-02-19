import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Total = styled.div`
    display: flex;
    margin-bottom: 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

export const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

export const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

export const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    fonr-size: black;
}

img {
    max-width: 100%;
    height: auto;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

h1, h2, h3 {
    font-family: Pacifico;
    padding: 0;
    margin: 0;
}

p {
    padding: 0;
    margin: 0;
}

button {
    cursor: pointer;
}

input, button {
    font: inherit;
}

input[type='number'] {
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`;