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

  render() {
    const style = {
      height: 1200,
      width: 700,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      padding: '2em'
    }
    return (
        <div>
          <Row>
            <Col lg={1}>
              <TextField
                  hintText='Full width'
                  fullWidth
              />
            </Col>
            <Col lg={4}/>


            <Col lg={1}>
              <TextField
                  hintText='Full width'
                  fullWidth
              />
            </Col>
          </Row>
          {this.props.names.map(item => {
            return (
                <Paper style={style} zDepth={1}>
                  <Pairs Pairs={item['pairs']}/>
                </Paper>
            )
          })}
        </div>
    )
  }
}