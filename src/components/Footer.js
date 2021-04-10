import React, { Component } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaIndustry, FaBoxOpen, FaPhone, FaShuttleVan } from 'react-icons/fa';

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="footer">
					<div className="container">
						<div>
							<p className="white">Votre RP M.Lotfi Elamrani</p>
						</div>
						<div>
							<p className="white">
								<FaPhone size="30" color="#fff" className="Modelicon" />
								05 38728 9283
							</p>
						</div>
						<div>
							<p className="white">
								<MdEmail size="30" color="#fff" className="Modelicon" />
								myemail@gmail.com
							</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
