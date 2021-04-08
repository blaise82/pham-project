import React, { Component } from 'react'
import SideMenu from '../components/SideMenu'
export default class Page9 extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="wrap1">
                        <p className="title">Commande N 1</p>

                        <div className="sectionBg">
                            <div className="container">
                                <div>Envoyee le 12/12/2002</div>
                                <div>Statut:  <strong className="status skyblue">En cours de preparation</strong></div>

                                <div>MT TTC: 2000 MAD</div>
                            </div>
                        </div>
                    </div>
                    <div className="stats">


                        <div className="wrap1">
                            <p className="title">Livraison en cours</p>
                            <div className="per">
                                <div className="coursLeft">
                                    <div className="image"></div>
                                    <div className="text">
                                        <p>MT a payer: 1000,00 DH</p>
                                        <p>Mode de paiment: cheque</p>
                                    </div>
                                </div>
                                <div className="coursRight">
                                    <p>Suivez votre livrauson (O2 colis) - N Expedition</p>

                                    <div className="steps">
                                        <div className="progress-container">
                                            <div className="progress" id="progress"></div>
                                            <div className="circle ">
                                                1
      </div>
                                            <div className="circle active">
                                                2
      </div>
                                            <div className="circle">
                                                3
      </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="coursLeft">
                                <div className="image"></div>
                                <div className="text">
                                    <p>MT a payer: 7000,00 DH</p>
                                    <p>Mode de paiment: espece</p>
                                </div>
                            </div>
                            <div className="coursRight">
                                <p>Suivez votre livrauson (O2 colis) - N Expedition</p>

                                <div className="steps">
                                    <div className="progress-container">
                                        <div className="progress" id="progress"></div>
                                        <div className="circle active ">
                                            1
      </div>
                                        <div className="circle">
                                            2
      </div>
                                        <div className="circle">
                                            3
      </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <main className="main">
                    <div className="wrap1">
                        <SideMenu />
                        <div className="mainRight">
                            <br />
                            <br />
                            <section >
                                <div >
                                    <table>
                                        <thead>
                                            <tr class="table-headers">
                                                <th>N FAC</th>
                                                <th>MT a payer</th>
                                                <th>Mode de paiement</th>
                                                <th>Date Facture</th>
                                                <th>N Expedition</th>
                                                <th>NB Colis</th>
                                                <th>Statut Expedition</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>PHA2021FCOO25</td>
                                                <th class="mobile-header">Number</th>
                                                <td>GOLD</td>
                                                <th class="mobile-header">1 0000.00</th>
                                                <td>1 0000.00</td>
                                                <th class="mobile-header">cheque</th>
                                                <td>cheque</td>
                                                <th class="mobile-header">Weight</th>
                                                <td>01/02/2020</td>
                                                <th class="mobile-header">Value</th>
                                                <td>52012000000012</td>
                                                <th class="mobile-header">Value</th>
                                                <td><div className="route"> En route</div></td>
                                            </tr>
                                            <tr>
                                                <td>PHA2021FCOO25</td>
                                                <th class="mobile-header">Number</th>
                                                <td>GOLD</td>
                                                <th class="mobile-header">1 0000.00</th>
                                                <td>1 0000.00</td>
                                                <th class="mobile-header">cheque</th>
                                                <td>cheque</td>
                                                <th class="mobile-header">Weight</th>
                                                <td>01/02/2020</td>
                                                <th class="mobile-header">Value</th>
                                                <td>52012000000012</td>
                                                <th class="mobile-header">Value</th>
                                                <td><div className="livree">Livree</div></td>
                                            </tr>
                                            <tr>
                                                <td>PHA2021FCOO25</td>
                                                <th class="mobile-header">Number</th>
                                                <td>GOLD</td>
                                                <th class="mobile-header">1 0000.00</th>
                                                <td>1 0000.00</td>
                                                <th class="mobile-header">cheque</th>
                                                <td>cheque</td>
                                                <th class="mobile-header">Weight</th>
                                                <td>01/02/2020</td>
                                                <th class="mobile-header">Value</th>
                                                <td>52012000000012</td>
                                                <th class="mobile-header">Value</th>
                                                <td><div className="livree">Livree</div></td>
                                            </tr>
                                            <tr>
                                                <td>Alfatil 125mg</td>
                                                <th class="mobile-header">Number</th>
                                                <td>GOLD</td>
                                                <th class="mobile-header">Market rate</th>
                                                <td>50</td>
                                                <th class="mobile-header">Market rate</th>
                                                <td>0</td>
                                                <th class="mobile-header">Weight</th>
                                                <td>21%</td>
                                                <th class="mobile-header">Value</th>
                                                <td>50</td>
                                                <th class="mobile-header">Value</th>
                                                <td><div className="livree">Livree</div></td>
                                            </tr>
                                            <tr>
                                                <td>Alfatil 125mg</td>
                                                <th class="mobile-header">Number</th>
                                                <td>GOLD</td>
                                                <th class="mobile-header">Market rate</th>
                                                <td>50</td>
                                                <th class="mobile-header">Market rate</th>
                                                <td>0</td>
                                                <th class="mobile-header">Weight</th>
                                                <td>21%</td>
                                                <th class="mobile-header">Value</th>
                                                <td>50</td>
                                                <th class="mobile-header">Value</th>
                                                <td><div className="livree">Livree</div></td>
                                            </tr>

                                            <tr>
                                                <td>PHA2021FCOO25</td>
                                                <th class="mobile-header">Number</th>
                                                <td>GOLD</td>
                                                <th class="mobile-header">1 0000.00</th>
                                                <td>1 0000.00</td>
                                                <th class="mobile-header">cheque</th>
                                                <td>cheque</td>
                                                <th class="mobile-header">Weight</th>
                                                <td>01/02/2020</td>
                                                <th class="mobile-header">Value</th>
                                                <td>52012000000012</td>
                                                <th class="mobile-header">Value</th>
                                                <td><div className="route"> En route</div></td>
                                            </tr>
                                            <tr>
                                                <td>Alfatil 125mg</td>
                                                <th class="mobile-header">Number</th>
                                                <td>GOLD</td>
                                                <th class="mobile-header">Market rate</th>
                                                <td>50</td>
                                                <th class="mobile-header">Market rate</th>
                                                <td>0</td>
                                                <th class="mobile-header">Weight</th>
                                                <td>21%</td>
                                                <th class="mobile-header">Value</th>
                                                <td>50</td>
                                                <th class="mobile-header">Value</th>
                                                <td><div className="route"> En route</div></td>
                                            </tr>
                                            <tr>
                                                <td>PHA2021FCOO25</td>
                                                <th class="mobile-header">Number</th>
                                                <td>GOLD</td>
                                                <th class="mobile-header">1 0000.00</th>
                                                <td>1 0000.00</td>
                                                <th class="mobile-header">cheque</th>
                                                <td>cheque</td>
                                                <th class="mobile-header">Weight</th>
                                                <td>01/02/2020</td>
                                                <th class="mobile-header">Value</th>
                                                <td>52012000000012</td>
                                                <th class="mobile-header">Value</th>
                                                <td><div className="route"> En route</div></td>
                                            </tr>
                                            <tr>
                                                <td>PHA2021FCOO25</td>
                                                <th class="mobile-header">Number</th>
                                                <td>GOLD</td>
                                                <th class="mobile-header">1 0000.00</th>
                                                <td>1 0000.00</td>
                                                <th class="mobile-header">cheque</th>
                                                <td>Espece</td>
                                                <th class="mobile-header">Weight</th>
                                                <td>01/02/2020</td>
                                                <th class="mobile-header">Value</th>
                                                <td>52012000000012</td>
                                                <th class="mobile-header">Value</th>
                                                <td><div className="route"> En route</div></td>
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

                        </div>
                    </div>
                </main>

            </div>
        )
    }
}
