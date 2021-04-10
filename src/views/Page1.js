import { FiInstagram } from 'react-icons/fi';
import React, { useState } from 'react';
import Nav from '../components/Nav';
import { ImPrinter } from 'react-icons/im';
import { FaIndustry, FaBoxOpen, FaPhone, FaShuttleVan } from 'react-icons/fa';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { GiHospitalCross } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Model from '../components/Model';
import Status from '../components/Status';
import Table from '../components/Table';
function Page1() {
	const [ open, setOpen ] = useState(false);
	return (
		<div className="App">
			<main>
				<section>
					<div className="wrap1">
						<p className="title">Bon de Commande</p>

						<div className="sectionBg">
							<div className="container">
								<div>Num: 2020</div>
								<div>
									Statut: <Status styleName="grey" text="Brouillon" />
								</div>
								<div>Date de creation: 12/12/2021</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section">
					<div className="wrap1">
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

				<section className="choice">
					<div className="wrap1">
						<p className="title">MODE DE PAIEMENT</p>
						<div className="list">
							<ul>
								<li>
									<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
									Cheque
								</li>
								<li>
									<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />Espece
								</li>
								<li>
									<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />virement
								</li>
								<li>
									<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />Traite
								</li>
							</ul>
						</div>
					</div>
				</section>
			</main>
			{open ? <Model close={() => setOpen(!open)} /> : null}
			<section className="">
				<div className="right">
					<button className="button3">Modifier</button>
					<button className="button4" onClick={() => setOpen(!open)}>
						Commander
					</button>
				</div>
			</section>
		</div>
	);
}

export default Page1;
