import { createGlobalStyle } from "styled-components";
// These styles ensure that there is no margin or padding on the page, except in places where they are explicitly stated.

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
 `;
