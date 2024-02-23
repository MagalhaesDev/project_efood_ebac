import { createGlobalStyle } from 'styled-components'

export const colors = {
  primaryColor: '#E66767',
  secondaryColor: '#FFEBD9',
  primaryTextColor: '#E66767',
  secondaryTextColor: '#FFEBD9',
  backgroundColor: '#FFF8F2'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${colors.primaryTextColor}
  }

  body {
    background-color: ${colors.backgroundColor};
  }
`