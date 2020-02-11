import React from 'react';//stateless??
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import Projects from './projects';
const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main; // so that you can bring the main page