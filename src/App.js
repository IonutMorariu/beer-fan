import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Navigation from './Components/Navigation';
import Page from './Components/styles/Page';

import Rye from './static/Rye-Regular.ttf';

const theme = {
	main: '#fa8231',
	secondary: '#2d98da',
	bs: '0px 2px 3px rgba(0,0,0,0.08), 2px 4px 6px rgba(0,0,0,0.08)',
	black: '#3a2f2f',
	lightGrey: '#d2dae2',
	offWhite: '#f1f2f6',
	maxWidth: '1200px'
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rye';
    src: url(${Rye});
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
    min-height: 100vh;
    background:#f7f1e3;
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
					<Page>
						<Navigation />
						<div>Beer fan App</div>
					</Page>
				</>
			</ThemeProvider>
		);
	}
}

export default App;
