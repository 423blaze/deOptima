import { createGlobalStyle } from "styled-components"
import { styledGrid } from "./grid"
import { variable } from "./variable"
import { ObjectCss } from "./object/objectCss"

export const GlobalStyle = createGlobalStyle`
    ${styledGrid};
    ${ObjectCss}
    ${variable};

    html{
        max-width: 100vw;
        width: 100%;
        scroll-behavior: smooth;
    }
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
        font-family: "DM Sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
        color: rgb(var(--foreground-rgb));
        background-color: rgba(10, 8, 18,1)
    }
    .container {
        padding: 100px;
        max-width: 100vw;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    h1 {
        font-size: clamp(40px, 8vw, 72px);
        letter-spacing: 3px;
        font-weight:350;
        line-height:1;
        cursor: default;
    }
    h2 {
        font-size: clamp(30px, 8vw, 70px);
        margin: 0 0 20px;
        cursor: default;
    }
    h3 {
        font-size: 64px;
        font-weight: 600;
        letter-spacing: -1.5px;
        cursor: default;
    }
    h4 {
        font-size: 44px;
        font-weight: 400;
        cursor: default;
    }
    h5 {
        font-size: var(--fz-xxl);
        font-weight: 500;
        color:var(--white);
        cursor: default;
    }
    h6 {
        font-size: 14px;
        color:var(--gray);
        font-weight: 100;
        cursor: default;
    }
    a {
        text-decoration: none;
        cursor: url('pointer.png'), auto;
        color:var(--white);
        padding:10px 10px 10px 0px;
    }
    p {
        z-index: 1;
        font-size: clamp(10px, 4vw, 20px);
        color:var(--white);
        font-weight:100;
        cursor: default;
    }
    li {
        cursor: pointer;
    }
    span{
        color:var(--white);
    }
    b{
        font-weight:500;
    }

//mobile
    @media (max-width: 1536px),{

    }
    @media (max-width: 1440px),{
        .container {
            padding: 100px;
        }
    }
    @media (max-width: 1280px) {
        .container {
            padding: 0px 75px;
        }

    }
    @media (max-width: 992px) {
        .container {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }
    }
    @media (max-width: 768px) {
        .container {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            padding: 0px 50px;
        }
        StyledNav{ 
            display: none !important;
        }
    }
    @media (max-width: 576px) {
        .container {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            padding: 0px 25px;
        }
    }
`;