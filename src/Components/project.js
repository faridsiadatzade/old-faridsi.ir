import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
            <Card className="card" shadow={0} style={{width: '485px', height:'320px' , margin: 'auto',border: '3px solid rgb(219, 154, 100)', borderRadius:'3%'}}>
                <CardTitle style={{color: 'rgb(219, 154, 100)', height: '176px', background: `url(${this.props.cover}) no-repeat`, backgroundSize:'100% 100%' }}>{this.props.title}</CardTitle>
                <CardText>
                    {this.props.text}
                </CardText>
                <CardActions border>
                    <Button colored>Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    {/* <IconButton name="share" /> */}
                </CardMenu>
            </Card>
        </Cell>
      </Grid>
    )
  }
}

export default Project;
