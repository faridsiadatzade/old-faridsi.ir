import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Contact from './contact';

class Footer extends Component {
  render() {
    return(
      <div className="landing-grid" style={{marginTop:'50px'}}>
      <Grid className="container center" style={{padding:'204px 0 193px 0'}}>
        <Cell col={12}>
          <div className="lets_talk mb-50 container section_title">
              <h2 style={{color:'#fff'}}>Do you have any Project? <a>Let’s Talk</a> </h2>
              <p>I am always eager to gain new experiences and challenges in the form of challenging teams and projects.</p>
          </div>
        </Cell>  
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
    )
  }
}

export default Footer;
