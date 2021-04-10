import React, { Component } from 'react';

export default class SideMenu extends Component {
	render() {
		return (
			<div className="sideMenu">
				<div className="item active">Ma Commande</div>
				<div className="item">
					<div className="item-text">Mes Factures</div>
				</div>
			</div>
		);
	}
}
