
import { FiInstagram } from 'react-icons/fi';
import React, { useState } from 'react';
import Nav from '../components/Nav'
function Page1() {
    const [open, setOpen] = useState(false);
    return (
        <div className="App">
            {open ? (
                <section className="model">
                    <div className="inner">
                        <div className="wrap1">
                            <div className="top">
                                <div className="check">Yes</div>
                                <div className="text">
                                    <p>Votre commande #0000 a ete bien envoyee</p>
                                    <p>imprimer le bon de commande</p>
                                </div>
                            </div>
                            <div className="main">
                                <p>prochaines etapes</p>
                                <div className="process">
                                    <div className="image" />
									Reception command
								</div>
                                <div className="process">
                                    <div className="image" />
									Preparation
								</div>
                                <div className="process">
                                    <div className="image" />
									Expredition
								</div>
                                <div className="process">
                                    <div className="image" />
									Livrasion entre 48h/72h
								</div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="comminication">
                                <div>
                                    <FiInstagram size="20" color="#51a783" className="icon" />
                                    <p>My Name</p>
                                </div>
                                <div>
                                    <FiInstagram size="20" color="#51a783" className="icon" />
                                    <p>05 38728 9283</p>
                                </div>
                                <div>
                                    <FiInstagram size="20" color="#51a783" className="icon" />
                                    <p>myemail@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
            <main>


                <section>
                    <div className="wrap1">
                        <p className="title">Bon de Commande</p>

                        <div className="sectionBg">
                            <div className="container">
                                <div>Num: 2020</div>
                                <div>Statut:  <strong className="status grey">Brouillon</strong></div>
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
