import React, { Component } from 'react';
import { ImPrinter } from 'react-icons/im';
import { FaIndustry, FaBoxOpen, FaPhone, FaShuttleVan } from 'react-icons/fa';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { GiHospitalCross } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export default class Model extends Component {
	close = () => {
		this.props.close();
	};
	render() {
		return (
			<div>
				<section className="model">
					<div className="inner">
						<div className="top">
							<div className="close" onClick={this.close}>
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
			</div>
		);
	}
}
