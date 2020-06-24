import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skill from './skill';
import Footer from './footer';

class Projectpage extends Component {
  render() {
    return(
      <div>
      <Grid className="landing-grid" style={{padding:'204px 0 193px 0'}}>
          <Cell col={12}>
            <div className="lastpage-title">
                <h3>Skills</h3>
            </div>
          </Cell>
      </Grid>
      <Grid className="container">
        <Cell col={12}>
            <div className="container">
                <h4 style={{color:'#DB9A64'}}>CLIENT SIDE</h4>
                <hr style={{border:'dashed #fff',margin:'0px auto 20px',width:'94%'}}></hr>
            </div>
        </Cell>
        <Cell col={6}>
            <Skill
            skill="HTML/CSS"
            progress={90}
            />
        </Cell>
        <Cell col={6}>
            <Skill
            skill="BOOTSTRAP"
            progress={40}
            />
        </Cell>
        <Cell col={6}>
            <Skill
            skill="JQUERY"
            progress={70}
            />
        </Cell>
        <Cell col={6}>
            <Skill
            skill="REACT JS"
            progress={60}
            />
        </Cell>
        <Cell col={6}>
            <Skill
            skill="VUE JS"
            progress={40}
            />
        </Cell>
        <Cell col={12}>
            <div className="container">
                <h4 style={{color:'#DB9A64'}}>SERVER SIDE</h4>
                <hr style={{border:'dashed #fff',margin:'0px auto 20px',width:'94%'}}></hr>
            </div>
        </Cell>
        <Cell col={6}>
            <Skill
            skill="PHP"
            progress={60}
            />
        </Cell>
        <Cell col={6}>
            <Skill
            skill="SQL"
            progress={60}
            />
        </Cell>
        <Cell col={12}>
            <div className="container">
                <h4 style={{color:'#DB9A64'}}>OTHERS ...</h4>
                <hr style={{border:'dashed #fff',margin:'0px auto 20px',width:'94%'}}></hr>
            </div>
        </Cell>
        <Cell col={6}>
            <Skill
            skill="SCRUM"
            progress={60}
            />
        </Cell>
        <Cell col={6}>
            <Skill
            skill="TFS"
            progress={80}
            />
        </Cell>
      </Grid>
      <Grid>
        <Cell col={12}>
          <Footer />
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Projectpage;
