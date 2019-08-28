import React, {Component} from 'react';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-3">
							<div className="logo">
								<a href="/">Unsplash React</a>
							</div>
						</div>
						<div className="col-xl-9 text-right">
							<div className="menu">
								<ul>
									<li><a href="/">Home</a></li>
									<li><a href="/about">About</a></li>
									<li><a href="/disclaimer">Disclaimer</a></li>
									<li><a href="/contact">Contact</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;