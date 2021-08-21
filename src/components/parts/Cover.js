import { useEffect, useRef } from "react";

import Scroller from "./Scroller";

import backgroundImage from "../../media/images/background.jpg";

import "./Cover.css";

const Cover = props => {
	const toggleRef = useRef();
	const styleSheet = useRef();

	function resizeCover() {
		document.querySelector(".cover").style.height =
			window.innerHeight + "px";
	}

	useEffect(() => {
		resizeCover();
		window.addEventListener("resize", resizeCover);

		styleSheet.current = document.createElement("style");
		document.head.appendChild(styleSheet.current);
		styleSheet.current.sheet.insertRule("html, body { overflow: hidden }");
		styleSheet.current.sheet.insertRule(
			".title, .subtitle { filter: blur(2px) opacity(0.5); }"
		);
		styleSheet.current.sheet.insertRule(".topnav * { z-index: 99; }");
		styleSheet.current.sheet.insertRule(
			".downarrow { filter: blur(2px) opacity(0.5); }"
		);
		styleSheet.current.sheet.insertRule(
			".topnav { top: 0; display: flex !important; font-family: 'Roboto Slab'; position: absolute; width: 100%; height: 100%; padding: 0; opacity: 1; margin: 0; background-color: #202020cc !important; display: flex; flex-direction: column; align-content: center !important; justify-content: center !important; text-align: center; }"
		);
		styleSheet.current.sheet.insertRule(
			".bar1, .bar2, .bar3 { background-color: white; }"
		);
		styleSheet.current.sheet.insertRule(
			".topnav .active { color: #bbb !important; }"
		);
		styleSheet.current.sheet.insertRule(
			".topnav a { font-size: 4rem !important; color: white; }"
		);
		styleSheet.current.sheet.insertRule(
			".topnav a:hover { background-color: #ffffff33 !important; }"
		);

		// disable rule
		disableStyle();

		return () => {
			window.removeEventListener("resize", resizeCover);
		}
	}, []);

	const enableStyle = () => {
		styleSheet.current.disabled = false;
		window.scrollTo(0, 0);
	};

	const closeMenu = () => {
		disableStyle();
		toggleRef.current.checked = false;
	};

	const disableStyle = () => {
		styleSheet.current.disabled = true;
	};

	const toggleStyle = () => {
		if (toggleRef.current.checked) {
			disableStyle();
		} else {
			enableStyle();
		}
	};

	return (
		<div className="cover">
			<div
				className="coverimage"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			/>
			<div className="menutoggle">
				<input id="toggle" type="checkbox" ref={toggleRef} />
				<label
					className="toggle"
					htmlFor="toggle"
					onClick={() => toggleStyle()}
				/>
				<div className="bar1" />
				<div className="bar2" />
				<div className="bar3" />
			</div>
			<ul className="topnav" ref={props.topNavRef}>
				<Scroller closeMenu={() => closeMenu()} name="" toId="root">
					Home
				</Scroller>
				<Scroller
					closeMenu={() => closeMenu()}
					name="slideshow"
					toId="slideshowtext">
					Slideshow
				</Scroller>
				<Scroller
					closeMenu={() => closeMenu()}
					name="projects"
					toId="projecttext">
					Projects
				</Scroller>
				<Scroller
					closeMenu={() => closeMenu()}
					name="about-me"
					toId="aboutme">
					About Me
				</Scroller>
			</ul>
			<div className="titleposition">
				<h3 className="title">Wyatt Spree</h3>
				<h5 className="subtitle">
					Engineering | Programming | Mathematics
				</h5>
			</div>
			<Scroller
				closeMenu={() => closeMenu()}
				name="slideshow"
				toId="slideshowtext">
				<div className="downarrow" />
			</Scroller>
		</div>
	);
};

export default Cover;
