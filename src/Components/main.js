import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landingpage from './landingpage';
import Skillspage from './Skillspage';
import Contactpage from './Contactpage';
import Projectspage from './Projectspage';
import Experiencepage from './Experiencepage';


const Main = () => (
  <Switch>
    <Route exact path="/"> <Landingpage /> </Route>
    <Route path="/skillspage"> <Skillspage /> </Route>
    <Route path="/contactpage"> <Contactpage /> </Route>
    <Route path="/projectspage"> <Projectspage /> </Route>
    <Route path="/experiancepage"> <Experiencepage /> </Route>
  </Switch>
)

export default Main;
