import React, { Component } from 'react';

export default class MidStatus extends Component {
	render() {
		return <strong className={`mid-status ${this.props.styleName}`}>{this.props.text}</strong>;
	}
}
