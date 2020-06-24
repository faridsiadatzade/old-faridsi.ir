import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Work from './work';
import Footer from './footer';
import Nokarto from "../Img/Experience/nokarto.jpg";
import Parham from "../Img/Experience/parham.jpg";

class Experiancepage extends Component {
  render() {
    return(
      <div>
      <Grid className="landing-grid center" style={{padding:'204px 0 193px 0'}}>
          <Cell col={12}>
            <div className="lastpage-title">
                <h3>Work Experiance</h3>
            </div>
          </Cell>
      </Grid>
      <Grid className="container center" style={{marginTop:'50px'}}>
        <Cell col={6}>
          <Work
            img={Nokarto} 
            name="NOKARTO"
            desceription="Experience programming in php language and plugin writing and Experience doing project and front-end programming"
          />
        </Cell>
        <Cell col={6}>
          <Work
            img={Parham} 
            name="PARHAM"
            desceription="Experience programming front-end and do Landing page and internal projects of the company"
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

export default Experiancepage;
