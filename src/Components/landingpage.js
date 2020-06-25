import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from "./skills";
import Aboutme from "./aboutme";
import About from "./about";
import Projects from "./projects";
import Experience from "./experience";
import Farid from "../Img/Farid.jpg";
import Artak from "../Img/projects/artak.png";
import Delta from "../Img/projects/delta.ico";
import Royal from "../Img/projects/royal.png";
import Nokarto from "../Img/Experience/nokarto.jpg";
import Parham from "../Img/Experience/parham.jpg";
import Contact from "./contact";


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={8}>
            <div className="slider_text">
              <h3>Hi, I am Farid
                <h3 style={{ marginTop:'50px',color:'#db9a64' }} >Front-end Developer</h3>
              </h3>
            </div>
          </Cell>
          <Cell col={4}>
          {/* <div className="my_img d-none d-lg-block">
            <img src={Farid} alt="farid" />
          </div> */}
          </Cell>
        </Grid>
        <Grid className="about-skills" style={{width:'90%', margin:'auto'}}>
            <Cell col="12">
              <Aboutme></Aboutme>
            </Cell>
            <Cell col={6} style={{display:"flex",alignItems:"center"}}>
              <About></About>
            </Cell>
            <Cell col={6} className="skills">
            <h2>Skills</h2>
                <Skills
                  skill="CLIENT SIDE"
                  progress={75}
                  />
                <Skills
                  skill="SERVER SIDE"
                  progress={50}
                  />
                <Skills
                  skill="OTHERS ..."
                  progress={40}
                  />
            </Cell>
        </Grid>
        <Grid style={{background:'#3B2930',marginTop:'120px',marginBottom:'90px'}}>
          <Grid className="container">
          <Cell col={12}>
            <div className="section_title mb-50">
                <h2 style={{color:'#fff'}}>Projects</h2>
            </div>
          </Cell>
          <Cell col={4}>
          <a target="_blank" href="http://artakit.ir/panel/signinup">
            <Projects
              project_src={Artak}
              project_title="artakit"
              project_description="Artakit website design and front-end programming in 2019"
              />
              </a>
          </Cell>
          <Cell col={4}>
            <a target="_blank" href="http://panel.clinicdelta.ir/">
            <Projects
              project_src={Delta}
              project_title="clinicdelta"
              project_description="Clinicdelta website design and front-end programming in 2019"
              />
              </a>
          </Cell>
          <Cell col={4}>
          <a target="_blank" href="http://royaltopmat.com/">
            <Projects
              project_src={Royal}
              project_title="royaltop"
              project_description="Implement a royal website using cmd wprdpress in 2020"
              />
              </a>
          </Cell>
          </Grid>
        </Grid>
        <div className="container">
        <Cell col={12}>
            <div className="section_title mb-50">
                <h2 style={{color:'#fff'}}>Work Experience</h2>
            </div>
          </Cell>
          <Grid className="center">
            <Cell col={6}>
              <Experience
                company_src={Nokarto}
                company_name={"nokarto"}
                company_address={"https://nokarto.com/"}
              />
            </Cell>
            <Cell col={6}>
              <Experience
                company_src={Parham}
                company_name={"Parham"}
                company_address={"http://www.parham-co.ir/"}
              />
            </Cell>
          </Grid>
        </div>
        <div className="landing-grid">
          <Grid>
            <Cell col={12}>
              <div className="lets_talk mb-50 container section_title">
                  <h2 style={{color:'#fff'}}>Do you have any Project? <a>Let’s Talk</a> </h2>
                  <p>I am always eager to gain new experiences and challenges in the form of challenging teams and projects.</p>
              </div>
            </Cell>
            </Grid>
            <Grid className="container center">
            <Cell col={3}>
              <Contact
                link_name={"09360010251"}
                link_address={"#"}
                link_class={"fa fa-phone"}
              />
            </Cell>
            <Cell col={3}>
              <Contact
                link_name={"fsiadatzade@gmail.com"}
                link_address={"#"}
                link_class={"fa fa-envelope"}
              />
            </Cell>
            <Cell col={3}>
              <Contact
                link_name={"Github"}
                link_address={"https://github.com/faridsiadatzade"}
                link_class={"fa fa-github"}
              />
            </Cell>
            <Cell col={3}>
              <Contact
                link_name={"Linkedin"}
                link_address={"https://www.linkedin.com/in/farid-siadatzadeh/"}
                link_class={"fa fa-linkedin"}
              />
            </Cell>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Landing;
