import copy from "copy-to-clipboard";

import mail from "../../media/images/icons/mail.png";
// import linkedin from "../../media/images/icons/linkedin.png";
import github from "../../media/images/icons/github.png";

import "./AboutMe.css";

const AboutMe = () => {
	return (
		<div className="aboutMe">
			<div className="aboutMeInner">
				<h1 id="aboutme" className="aboutMeTitle">
					ABOUT ME
				</h1>
				<p className="aboutMeDescription">
					Being a programmer I develop, maintain and support
					applications for administrative, web and mobile systems
					using PHP MVC frameworks; Such as Symfony 3.4 and 4, Laravel
					6 & Zend Slim (micro framework for REST Apis) along with
					front-end javascript MVC framework Vue.js, Nuxt.js (SSR) &
					AngularJs1 and related tools. Analysing code for system
					testing and debugging.
				</p>
				<ul className="aboutMeLinks">
					<a
						href="mailto:wyattspree@gmail.com"
						onClick={e => {
							e.preventDefault();
							copy("wyattspree@gmail.com");
						}}>
						<li id="mail">
							<div className="tooltip tooltip-top">
								<img src={mail} alt="" />
								wyattspree@gmail.com
								<span className="tooltiptext">
									Copy to Clipboard
								</span>
							</div>
						</li>
					</a>
					<a
						href="https://github.com/WSpree"
						target="_blank"
						rel="noreferrer">
						<li id="github">
							<img src={github} alt="" />
							Wyatt Spree
						</li>
					</a>
				</ul>
			</div>
				<div className="creator">
					Created by <a href="https://gastongonnerman.com" target="_blank" rel="noreferrer">Gaston Gonnerman</a>
				</div>
		</div>
	);
};

export default AboutMe;
