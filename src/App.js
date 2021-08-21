import { HashRouter as Router, Route, Switch } from "react-router-dom";

import main from "./pages";
import fof from "./pages/404";

import projectEngineering from "./pages/projects/project-engineering";
import pvsnp from "./pages/projects/pvsnp";
import rocketShip from "./pages/projects/rocket-ship";

import "./App.css";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={main} />
				<Route exact path="/projects/project-engineering" component={projectEngineering} />
				<Route exact path="/projects/pvsnp" component={pvsnp} />
				<Route exact path="/projects/rocket-ship" component={rocketShip} />
				<Route component={fof} />
			</Switch>
		</Router>
	);
}

export default App;
