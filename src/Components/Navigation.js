import React, { Component } from 'react';

import { ReactComponent as Logo } from '../static/hop.svg';
import NavStyles from './styles/NavStyles';

export default class Navigation extends Component {
	render() {
		return (
			<NavStyles>
				<div className="main-logo">
					<h1 className="first-word">BEER</h1>
					<Logo className="logo-image" />
					<h1 className="second-word">PUNKS</h1>
				</div>
			</NavStyles>
		);
	}
}
