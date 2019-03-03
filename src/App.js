import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
	main: '#fa8231',
	secondary: '#2d98da',
	bs: '0px 2px 3px rgba(0,0,0,0.08), 2px 4px 6px rgba(0,0,0,0.08)',
	black: '#1e272e',
	lightGrey: '#d2dae2',
	offWhite: '#f1f2f6'
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rye';
    src: url('/static/Rye-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    color: ${theme.black};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }

`;

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<>
					<GlobalStyle />
					<div>Beer fan App</div>
				</>
			</ThemeProvider>
		);
	}
}

export default App;
