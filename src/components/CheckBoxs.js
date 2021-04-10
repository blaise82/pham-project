import React, { Component } from 'react';

export default class CheckBoxs extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div>
						<input
							type="checkbox"
							id="vehicle1"
							name="vehicle1"
							value="0"
							className="checkbox-round"
						/>Produits commandes
					</div>
					<div>
						<input
							type="checkbox"
							id="vehicle1"
							className="checkbox-round"
							name="vehicle1"
							value="1"
						/>Produits livres
					</div>
					<div>
						<input
							type="checkbox"
							id="vehicle1"
							className="checkbox-round"
							name="vehicle1"
							value="2"
						/>Produits non livres
					</div>
				</div>
			</div>
		);
	}
}
