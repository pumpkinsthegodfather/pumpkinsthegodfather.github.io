import "./NativePDF.css";

const NativePDF = props => {
	return (
		<div className="pdf-holder">
			<iframe title="pdf" src={props.src} id="pdf"></iframe>
		</div>
	);
};

export default NativePDF;
