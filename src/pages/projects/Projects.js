import ProjectPreview from "../../components/parts/ProjectPreview";

import rocketShip from "./rocket-ship/rocket-ship.jpg";
import projectEngineering from "./project-engineering/project-engineering.jpg";
import pvsnp from "./pvsnp/pvsnp.png";

const Projects = props => {
	return (
		<>
			<div id="projecttext" />
			<br />
			<br />
			<br />
			<ProjectPreview
				title="Rocket Ship"
				img={rocketShip}
				year="2032"
				to="/projects/rocket-ship">
				A rocket is a projectile that spacecraft, aircraft or other
				vehicles use to obtain thrust from a rocket engine. Rocket
				engine exhaust is formed entirely from propellant carried within
				the rocket. Rocket engines work by action and reaction and push
				rockets forward simply by expelling their exhaust in the
				opposite direction at high speed, and can therefore work in the
				vacuum of space.
			</ProjectPreview>
			<ProjectPreview
				title="Project Engineering"
				img={projectEngineering}
				year="2302"
				to="/projects/project-engineering">
				Project engineering includes all parts of the design of
				manufacturing or processing facilities, either new or
				modifications to and expansions of existing facilities. A
				"project" consists of a coordinated series of activities or
				tasks performed by engineers, designers, drafters and others
				from one or more engineering disciplines or departments. Project
				tasks consist of such things as performing calculations, writing
				specifications, preparing bids, reviewing equipment proposals
				and evaluating or selecting equipment and preparing various
				lists, such as equipment and materials lists, and creating
				drawings such as electrical, piping and instrumentation
				diagrams, physical layouts and other drawings used in design and
				construction.
			</ProjectPreview>
			<ProjectPreview
				title="Solving P vs NP"
				img={pvsnp}
				year="2091"
				to="/projects/pvsnp">
				The P versus NP problem is a major unsolved problem in computer
				science. It asks whether every problem whose solution can be
				quickly verified can also be solved quickly. The informal term
				quickly, used above, means the existence of an algorithm solving
				the task that runs in polynomial time, such that the time to
				complete the task varies as a polynomial function on the size of
				the input to the algorithm (as opposed to, say, exponential
				time). The general class of questions for which some algorithm
				can provide an answer in polynomial time is "P" or "class P".
				For some questions, there is no known way to find an answer
				quickly, but if one is provided with information showing what
				the answer is, it is possible to verify the answer quickly. The
				class of questions for which an answer can be verified in
				polynomial time is NP, which stands for "nondeterministic
				polynomial time".
			</ProjectPreview>
		</>
	);
};

export default Projects;
