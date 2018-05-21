import React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Pairs from './singlePairs';

export default class SinglePreviouseGroups extends React.Component {
  constructor(props) {
    super(props)
  }

  handleGroupSearch = (evt, value) => {
    this.setState({groupName: value})
    this.props.handleGroupSearch(value)

  }

  handleNameSearch = (evt, value) => {
    this.setState({name: value})
    this.props.handleNameSearch(value)
  }

  render() {
    const style = {
      height: 1200,
      width: 700,
      textAlign: 'center',
      display: 'inline-block',
      padding: '2em'
    }
    return (
        <div>
          <Row>
            <Col lg={2}>
              <TextField
                  hintText='Search by name'
                  fullWidth={true}
                  onChange={this.handleNameSearch}
              />
            </Col>


            <Col lg={2}>
              <TextField
                  hintText='Search By Group '
                  fullWidth={true}
                  onChange={this.handleGroupSearch}
              />
            </Col>
             <Col lg={4}/>
          </Row>
          {this.props.groups.map(item => {
            return (
                <Paper style={style} zDepth={1}>
                  <Pairs pairs={item['Pairs']}/>
                </Paper>
            )
          })}
        </div>
    )
  }
}