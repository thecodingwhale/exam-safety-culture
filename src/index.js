import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './reset.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyles from './theme/globalStyles';
import { defaultTheme } from './theme/theme';

ReactDOM.render(
	<ThemeProvider theme={ defaultTheme }>
		<React.Fragment>
			<GlobalStyles />
			<App />
		</React.Fragment>
	</ThemeProvider>,

	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
