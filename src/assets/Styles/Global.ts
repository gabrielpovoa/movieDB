import { createGlobalStyle } from "styled-components";
import banner from '../../assets/bg.png'

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        text-transform: capitalize;
        transition: all .3s linear;
        outline: none;
        border: none;
        list-style: none;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    body {
        font-family: 'Nunito Sans', sans-serif;
        background-color: #778;
        background-image: url(${banner});
        background-attachment: fixed;
        background-repeat: no-repeat;
        color: #FFF;
    }
`;