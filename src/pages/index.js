import Cover from "../components/parts/Cover";
import Slideshow from "../components/parts/Slideshow";
import Projects from "./projects/Projects";
import AboutMe from "../components/parts/AboutMe";

import "./index.css";

const index = () => {
	return (
		<div>
			<Cover />
			<div id="content">
				<div id="slideshow">
					<Slideshow autoplay={true} interval={3000} />
					<svg
						className="waves"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320">
						<path
							fill="#b59114"
							fillOpacity="1"
							d="M0,160L30,160C60,160,120,160,180,154.7C240,149,300,139,360,117.3C420,96,480,64,540,48C600,32,660,32,720,37.3C780,43,840,53,900,69.3C960,85,1020,107,1080,122.7C1140,139,1200,149,1260,138.7C1320,128,1380,96,1410,80L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
					</svg>
				</div>
				<div className="gradient">
					<Projects />
					<AboutMe />
				</div>
			</div>
		</div>
	);
};

export default index;
