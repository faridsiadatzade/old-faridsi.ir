import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions } from 'react-mdl';


class Work extends Component {
  render() {
    return(
      <Grid className="center">
        <Cell col={12}>
            <Card shadow={0} style={{width: '450px', height: '320px', margin: 'auto',backgroundColor:'rgb(232, 232, 232)',color:'#fff'}}>
                <CardTitle expand style={{color: '#311e25', background: `url(${this.props.img})`,backgroundSize:'100% 100%'}}>{this.props.name}</CardTitle>
                <CardText style={{backgroundColor:'rgb(232, 232, 232)',color:'#311e25'}}>
                    {this.props.desceription}
                </CardText>
            </Card>
        </Cell>
      </Grid>
    )
  }
}

export default Work;
