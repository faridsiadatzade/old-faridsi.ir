import React, { Component } from 'react';


class Projects extends Component {
  render() {
    return(
      
      <div className="single_service text-center">
          <div className="icon">
              <img className="icon-resume-1" src={this.props.project_src} alt="logo-project" />
          </div>
          <h3>
              {this.props.project_title}
          </h3>
          <p>{this.props.project_description}</p>
      </div>
    )
  }
}

export default Projects;

