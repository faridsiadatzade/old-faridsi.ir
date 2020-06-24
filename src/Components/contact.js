import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div className="single_links d-flex justify-content-between align-items-center">
              <span>{this.props.link_name}</span>
              <a href={this.props.link_address}> <i class={this.props.link_class}></i> </a>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Contact;
