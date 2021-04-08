import React, { Component } from 'react'
import SideMenu from '../components/SideMenu'
export default class Page4 extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="wrap1">
                        <p className="title">Commande N 1</p>

                        <div className="sectionBg">
                            <div className="container">
                                <div>Envoyee le 12/12/2002</div>
                                <div>Statut:  <strong className="status blue">En cours de confirmation</strong></div>
                                <div>MT TTC: 2000 MAD</div>
                            </div>
                        </div>
                    </div>
                </section>
                <main className="main">
                    <div className="wrap1">
                        <SideMenu />
                        <div className="mainRight">
                            <p className="message">Aucune facture disponible pour cette commande</p>
                        </div>
                    </div>
                </main>

            </div>
        )
    }
}
