import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from './footer';
import Project from './project';
import ArtakDemo1 from '../Img/projects/artak-example-1.png';
import ArtakDemo2 from '../Img/projects/artak-example-2.png';
import ArtakDemo3 from '../Img/projects/artak-example-3.png';
import DeltaDemo1 from '../Img/projects/delta-example-1.png';
import RoyalDemo1 from '../Img/projects/royal-demo-2.png';
import FaridDemo1 from '../Img/projects/farid-demo-1.png'

class Projectpage extends Component {
  render() {
    return(
      <div>
      <Grid className="landing-grid" style={{padding:'204px 0 193px 0'}}>
          <Cell col={12}>
            <div className="lastpage-title">
                <h3>Projects</h3>
            </div>
          </Cell>
      </Grid>
      <Grid className="container center">
        <Cell col={6}>
          <Project
          title="Artak"
          cover={ArtakDemo1}
          text="This project was carried out in the spring of 2019 as a freelance at the request of the CEO of Artak Fars Company."
          />
        </Cell>
        <Cell col={6}>
          <Project
          title="Delta Clinic"
          cover={DeltaDemo1}
          text="This project was carried out in 2019 in Nokarto with html, css, jquery, bootstrap and php."
          />
        </Cell>
        <Cell col={6}>
          <Project
          title="Royal"
          cover={RoyalDemo1}
          text="This project is being developed for the production of Royal Sleep by WordPress."
          />
        </Cell>
        <Cell col={6}>
          <Project
          title="FaridSi"
          cover={FaridDemo1}
          text="This website is being developed using React Framework, which is my first personal experience in using this framework."
          />
        </Cell>
      </Grid>
      <Grid className="center">
        <Cell col={12}>
          <Footer />
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Projectpage;
