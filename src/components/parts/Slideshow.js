import { Carousel } from "3d-react-carousal";

import a from "../../media/images/slideshow/1.jpg";
import b from "../../media/images/slideshow/2.jpg";
import c from "../../media/images/slideshow/3.jpg";

import "./Slideshow.css";

const Slideshow = props => {
	let image_list = [
		[a, "A picture of a marker"],
		[b, "A picture of abe lincoln"],
		[c, "A picture of a usb"],
		[a, "A picture of a marker"],
		[b, "A picture of abe lincoln"],
		[c, "A picture of a usb"],
		[a, "A picture of a marker"],
		[b, "A picture of abe lincoln"],
		[c, "A picture of a usb"],
	];

	let slides = image_list.map(x => {
		return <img className="slide-image" src={x[0]} alt={x[1]} />;
	});

	return (
		<>
			<h1 id="slideshowtext">Project Slideshow</h1>
			<Carousel
				slides={slides}
				autoplay={props.autoplay}
				interval={props.interval}
			/>
		</>
	);
};

export default Slideshow;
