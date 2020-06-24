import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="demo-big-content" style={{display:'block'}}>
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">FARID</Link>} scroll>
            <Navigation>
                <Link to="/skillspage" >Skills</Link>
                <Link to="/projectspage">Projects</Link>
                <Link to="/experiancepage">Work Experience</Link>
                <Link to="/contactpage">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="FARID">
            <Navigation>
              <Link to="/skillspage" >Skills</Link>
              <Link to="/projectspage">Projects</Link>
              <Link to="/experiancepage">Work Experience</Link>
              <Link to="/contactpage">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
  