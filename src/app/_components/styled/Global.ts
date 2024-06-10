'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    white-space: pre-line;
}

html {
    font-size: 125%;
    @media screen  and (max-width: 620px) {
        font-size: 105%
    } 
}

body {
overflow-x:hidden;
color: #000000;
 h1 {
    color: #6b6b6b;
    font-size: 3.5rem;
  }
  
 ul {
    list-style-type: none;
    &.internalList,
    &.externalList {
      display: flex;
      gap: 1.85rem;
     li {
       &.socialMediaEl {
        width: 1.7rem;
        height: 1.7rem;
      }
      svg {
        font-size: 0.9rem;
      }
    }
        }
    
   a {
        color:inherit;
        text-decoration:none;
        &:hover {
            opacity: 0.5
        }
    }
 }
}
`;

export default GlobalStyle;
