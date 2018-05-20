import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SinglePreviouseGroups from './SinglePreviouseGroups';
import methods from './methods';
import fetch from 'isomorphic-fetch';

class previousGroups extends React.Component {
  constructor() {
    super()
    this.state = {
      live:[],
      names: [{
        "groupData": {
          "id": 107,
          "title": "angular",
          "group_id": 34,
          "group_size": 2,
          "created_at": "2017-02-01T06:52:35.316Z"
        },
        "pairs": [
          {
            "user1_uid": "90796afadf27",
            "user2_uid": "c1a4febd9f3a",
            "gen_table_id": 107
          }

          ]
        }
      ]
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
         that.setState({live: response})
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
          }} names={this.state.live}/>
        </Grid>
    )
  }
}

export default previousGroups
