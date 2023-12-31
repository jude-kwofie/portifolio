import { createGlobalStyle } from "styled-components";
// These styles ensure that there is no margin or padding on the page, except in places where they are explicitly stated.

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
    }
    #root{
        margin:0 auto;
    }
    body{
        background-color: ${(props) => props.theme.bodyColor};
        color: ${(props) => props.theme.textColor};
        font-family: 'Roboto', sans-serif;
        font-size: .938rem;;
    }
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Lora', serif;
        color:  ${(props) => props.theme.titleColor};
        font-weight: 500;
     }
     ul{
        list-style: none;
     }
     a{
        color: ${(props) => props.theme.textColor} ;
        text-decoration: none;
     }
     img{
        max-width: 100%;
        height: auto;
     }
 `;
