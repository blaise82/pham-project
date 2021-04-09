import { FiInstagram } from 'react-icons/fi';
import React, { useState } from 'react';
import Nav from '../components/Nav';
import { ImPrinter } from 'react-icons/im';
import { FaIndustry, FaBoxOpen, FaPhone, FaShuttleVan } from 'react-icons/fa';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { GiHospitalCross } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
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
									Statut: <strong className="status grey">Brouillon</strong>
								</div>
								<div>Date de creation: 12/12/2021</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section">
					<div className="wrap1">
						<table>
							<thead>
								<tr class="table-headers">
									<th>Produits</th>
									<th>Pack</th>
									<th>Quantite</th>
									<th>Remise</th>
									<th>MT HT (MAD)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Alfatil 125mg</td>
									<th class="mobile-header">Number</th>
									<td>GOLD</td>
									<th class="mobile-header">Market rate</th>
									<td>50</td>
									<th class="mobile-header">Weight</th>
									<td>21%</td>
									<th class="mobile-header">Value</th>
									<td>50</td>
								</tr>
								<tr>
									<td>Alfatil 125mg</td>
									<th class="mobile-header">Number</th>
									<td>GOLD</td>
									<th class="mobile-header">Market rate</th>
									<td>50</td>
									<th class="mobile-header">Weight</th>
									<td>21%</td>
									<th class="mobile-header">Value</th>
									<td>50</td>
								</tr>
								<tr>
									<td>Alfatil 125mg</td>
									<th class="mobile-header">Number</th>
									<td>GOLD</td>
									<th class="mobile-header">Market rate</th>
									<td>50</td>
									<th class="mobile-header">Weight</th>
									<td>21%</td>
									<th class="mobile-header">Value</th>
									<td>50</td>
								</tr>
								<tr>
									<td>Alfatil 125mg</td>
									<th class="mobile-header">Number</th>
									<td>GOLD</td>
									<th class="mobile-header">Market rate</th>
									<td>50</td>
									<th class="mobile-header">Weight</th>
									<td>21%</td>
									<th class="mobile-header">Value</th>
									<td>50</td>
								</tr>
								<tr>
									<td>Alfatil 125mg</td>
									<th class="mobile-header">Number</th>
									<td>GOLD</td>
									<th class="mobile-header">Market rate</th>
									<td>50</td>
									<th class="mobile-header">Weight</th>
									<td>21%</td>
									<th class="mobile-header">Value</th>
									<td>50</td>
								</tr>

								<tr>
									<td>Alfatil 125mg</td>
									<th class="mobile-header">Number</th>
									<td>GOLD</td>
									<th class="mobile-header">Market rate</th>
									<td>50</td>
									<th class="mobile-header">Weight</th>
									<td>21%</td>
									<th class="mobile-header">Value</th>
									<td>50</td>
								</tr>
								<tr>
									<td>Alfatil 125mg</td>
									<th class="mobile-header">Number</th>
									<td>GOLD</td>
									<th class="mobile-header">Market rate</th>
									<td>50</td>
									<th class="mobile-header">Weight</th>
									<td>21%</td>
									<th class="mobile-header">Value</th>
									<td>50</td>
								</tr>
								<tr>
									<td>Alfatil 125mg</td>
									<th class="mobile-header">Number</th>
									<td>GOLD</td>
									<th class="mobile-header">Market rate</th>
									<td>50</td>
									<th class="mobile-header">Weight</th>
									<td>21%</td>
									<th class="mobile-header">Value</th>
									<td>50</td>
								</tr>
								<tr>
									<td>Alfatil 125mg</td>
									<th class="mobile-header">Number</th>
									<td>GOLD</td>
									<th class="mobile-header">Market rate</th>
									<td>50</td>
									<th class="mobile-header">Weight</th>
									<td>21%</td>
									<th class="mobile-header">Value</th>
									<td>50</td>
								</tr>
							</tbody>
						</table>
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
			{open ? (
				<section className="model">
					<div className="inner">
						<div className="top">
							<div className="close" onClick={() => setOpen(!open)}>
								<AiOutlineClose size="25" />
							</div>
							<div className="check">
								<div className="circle2 active">
									<AiOutlineCheck size="30" color="white" />
								</div>
							</div>
							<div className="text">
								<p>
									Votre <n className="green">commande #0000</n> a ete bien envoyee
								</p>
								<p className="download">
									<ImPrinter size="24" color="#6e6c6c" className="left" /> {'  '}
									imprimer le bon de commande
								</p>
							</div>
						</div>
						<div className="wrap1">
							<div className="main">
								<p className="title">prochaines etapes</p>

								<div className="progress-container2">
									<div className="progress" id="progress" />
									<div>
										<div className="circle3 ">
											<FaIndustry size="30" />
										</div>
										<p className="pro-text">Reception commande</p>
									</div>
									<div>
										<div className="circle3 active">
											<FaBoxOpen size="30" />
										</div>
										<p>Preparation</p>
									</div>
									<div>
										<div className="circle3">
											<FaShuttleVan size="30" />
										</div>
										<p>Expedition</p>
									</div>

									<div>
										<div className="circle3">
											<GiHospitalCross size="30" />
										</div>
										<p className="pro-text">Livrasion entre 48h/71h</p>
									</div>
								</div>
							</div>
							<p className="aqua">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							<div className="comminication">
								<div>
									<p>
										<BsFillPersonFill size="30" color="#9ac550" className="Modelicon" />
										My Name
									</p>
								</div>
								<div>
									<p>
										<FaPhone size="30" color="#9ac550" className="Modelicon" />
										05 38728 9283
									</p>
								</div>
								<div>
									<p>
										<MdEmail size="30" color="#9ac550" className="Modelicon" />
										myemail@gmail.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : null}
			<section className="footer">
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
