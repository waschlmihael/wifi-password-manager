import {createGlobalStyle} from 'styled-components';
import {ThemeType} from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  :root {
    font-size: 16px;
    color: ${({theme}) => theme.color__white};

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
    @media screen and (max-width: 320px) {
      font-size: 13px;
    }
  }

  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: ${({theme}) => theme.font__body};
    overflow-x: hidden;
  }

  img, svg {
    max-width: 100%;
    height: auto;
  }
`;