import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-6">
							<div className="copyright">&copy; 2019 Authemes. Get the themes</div>
						</div>
						<div className="col-xl-6 text-right">
							<div className="social-icon">
								<a href="https://www.facebook.com/rejbioli"><i className="fab fa-facebook-f"></i></a>
								<a href="https://twitter.com/ashraful_oli"><i className="fab fa-twitter"></i></a>
								<a href="https://linkedin.com/in/ashrafuloli"><i className="fab fa-linkedin-in"></i></a>
								<a href="http://github.com/ashrafuloli"><i className="fab fa-github"></i></a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;