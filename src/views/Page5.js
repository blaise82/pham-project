import React, { Component } from 'react';
import CheckBoxs from '../components/CheckBoxs';
import SideMenu from '../components/SideMenu';
import Table from '../components/Table';
export default class Page5 extends Component {
	render() {
		return (
			<div>
				<section>
					<div className="wrap1">
						<p className="title">Commande N 1</p>

						<div className="sectionBg">
							<div className="container">
								<div>Envoyee le 12/12/2002</div>
								<div>
									Statut: <strong className="status skyblue">En cours de preparation</strong>
								</div>
								<div>MT TTC: 2000 MAD</div>
							</div>
						</div>
					</div>
				</section>
				<main className="main">
					<div className="wrap1">
						<SideMenu />
						<div className="mainRight">
							<div className="sectionBg">
								<CheckBoxs />
							</div>
							<br />
							<br />
							<section>
								<div>
									<Table />
									<div>
										<div className="total">
											<table>
												<tr>
													<td>MT HT</td>
													<td>100 DH</td>
												</tr>
												<tr>
													<td>TVA</td>
													<td>200 DH</td>
												</tr>
												<tr>
													<td>Vous economisez</td>
													<td>500 DH</td>
												</tr>
												<tr className="final">
													<td>MT TTC</td>
													<td>1500 DH</td>
												</tr>
											</table>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</main>
			</div>
		);
	}
}
