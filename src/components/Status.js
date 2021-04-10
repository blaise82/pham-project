import React, { Component } from 'react';

export default class Status extends Component {
	render() {
		return <strong className={`status ${this.props.styleName}`}>{this.props.text}</strong>;
	}
}
