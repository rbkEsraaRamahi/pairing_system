import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SinglePreviouseGroups from './SinglePreviouseGroups';
import methods from './methods';
import fetch from 'isomorphic-fetch';

class previousGroups extends React.Component {
  constructor() {
    super()
    this.state = {
      groups:[]
    }
  }

  componentWillMount() {
    var that = this
    fetch('http://localhost:3000/api/student/createGroupName/GetAll', {
      credentials: 'include',
      headers: {
        Accept: 'application/json'
      }
    })
        .then(function(response){
          return response.json();
        })
        .then(function (response) {
         that.setState({groups: response})
        }, function (error) {
        })
    this.setState({newNames: this.state.names})
  }

  handleGroupSearch = (query) => {
    this.setState({newNames: methods.groupSearch(this.state.names, query)});
  }

  handleNameSearch = (query) => {
    this.setState({newNames: methods.nameSearch(this.state.names, query)});
  }

  render() {
    return (
        <Grid fluid>
          <SinglePreviouseGroups handleGroupSearch={(value) => {
            this.handleGroupSearch(value)
          }} handleNameSearch={(value) => {
            this.handleNameSearch(value)
          }} groups={this.state.groups}/>
        </Grid>
    )
  }
}

export default previousGroups
