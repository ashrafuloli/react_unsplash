import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import common
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';
// import pages
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Disclaimer from "./components/Disclaimer";
import About from "./components/About";
import Photo from "./components/Photo";

class App extends Component {
	render() {
		return (
			<Router>
				<Header/>
				<Route exact path="/" render={props => (<Gallery/>)}/>
				<Route path="/about" component={About}/>
				<Route path="/disclaimer" component={Disclaimer}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/photo" component={Photo}/>
				<Footer />
			</Router>
		);
	}
}

export default App;