import { Link } from "react-scroll";

const Scroller = props => {
	return (
		<Link to={props.toId} smooth={true} onClick={() => props.closeMenu()}>
			{props.children}
		</Link>
	);
};

export default Scroller;
