import "./ProjectPreview.css";

const ProjectPreview = props => {
	return (
		<div>
			<a
				className="projectLink projectCard"
				href={"#"+props.to}
				target="_blank"
				rel="noreferrer">
				<img src={props.img} className="projectImage" alt="" />
				<div>
					<div className="projectHeader">
						<h2 className="projectTitle">{props.title}</h2>
						<h5 className="projectYear">{props.year}</h5>
					</div>
					<p className="projectDescription">{props.children}</p>
				</div>
			</a>
		</div>
	);
};

export default ProjectPreview;
