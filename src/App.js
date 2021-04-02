import logo from './logo.svg';
import './App.css';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="wrap">
					<div className="media">
						<FiInstagram size="25" color="#9e9e9e" className="icon" />
						<AiOutlineTwitter size="25" color="#9e9e9e" className="icon" />
						<RiFacebookFill size="25" color="#9e9e9e" className="icon" />
						<BiWorld size="25" color="#9e9e9e" className="icon" />
					</div>
					<div className="buttons">
						<button className="button1">Espace Pharmacien</button>
						<button className="button2">Inscription</button>
					</div>
				</div>
			</header>
			<nav>
				<div className="wrap1">
					<div className="logo">Logo</div>
					<ul>
						<li>Accueil</li>
						<li>Pharmacovigillance</li>
						<li>FAQ</li>
						<li>A Propos</li>
						<li>Contactez-nous</li>
						<li>Search</li>
					</ul>
				</div>
			</nav>
			<section>
				<div className="wrap1">
					<p className="title">Bon de Commande</p>

					<div className="sectionBg">
						<div className="container">
							<div>Num: 2020</div>
							<div>Statut: Brouillon</div>
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

			<section className="footer">
				<div className="right">
					<button className="button1">Modifier</button>
					<button className="button2">Commander</button>
				</div>
			</section>
		</div>
	);
}

export default App;
