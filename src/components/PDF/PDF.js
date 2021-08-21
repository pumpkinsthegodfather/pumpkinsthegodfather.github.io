import NativePDF from "./NativePDF";
import NonnativePDF from "./NonnativePDF";

const PDF = props => {
	// If there is a native pdf viewer
	if (navigator.mimeTypes["application/pdf"] !== undefined) {
		return <NativePDF src={props.src} />;
	} else {
		return <NonnativePDF src={props.src} />;
	}
};

export default PDF;
