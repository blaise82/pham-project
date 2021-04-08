import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav'
import Routes from './routes'

class App extends Component {
	render() {
		return (
			<>
				<Nav />
				<Router>
					<Routes />
				</Router>
				<Footer />
			</>
		);
	}
}

export default App;