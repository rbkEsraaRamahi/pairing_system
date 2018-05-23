import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import fetch from 'isomorphic-fetch';

export default class Groups extends React.Component {
  constructor(){
    super()
    this.state = {
      groups: []
    }
  }

  componentWillMount(){
    var that = this
    fetch('http://localhost:3000/api/student/groups')
        .then(function(res){
          return res.json()
        })
        .then(function(res){
          that.setState({groups: res})
        })
  }
  render(){
    return (
        <Paper zDepth={2} style={{padding:'1em'}}>
          <Row style={{padding:'5em'}}>

            <Col lg={3}>
              <RaisedButton
                  label="Create new Group"
                  primary={true}
              />
            </Col>

          </Row>
          {this.state.groups.map( group =>{
            return (
                  <Card style={{margin:'1em'}}>
                    <CardHeader
                        title={group.title}
                        subtitle="Subtitle"
                        actAsExpander={true}
                    />
                  </Card>
            )
          })}
        </Paper>
    )
  }
}