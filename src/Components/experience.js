import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return(
      <div>
        <img className="primary-img" src={this.props.company_src} />
        <div className="gallery_heading">
          <a href={this.props.company_address}><h4>{this.props.company_name}</h4></a>
        </div>
      </div>
    )
  }
}

export default Experience;
