import React, { Component } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';
import { FiInstagram } from 'react-icons/fi';

export default class Nav extends Component {
    render() {
        return (
            <div>
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
                    <div className="nav">
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
            </div>
        )
    }
}
