import React from 'react'
import $ from 'jquery'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { browserHistory as history } from 'react-router'

class Student extends React.Component {
  constructor (props) {
    super(props)
    this.state = {states: {
      StudentName: '',
      Level: '',
      CohortNumber: '',
      DUCK: false
    }
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange (e) {
    var states = this.state.states
    var name = e.target.id
    var value = e.target.value
    if (name === 'Level' || name === 'CohortNumber') {
      value = Number(value)
      console.log(value)
    }
    states[name] = value
    this.setState({states: states})
  }

  handleSubmit () {
  	this.setState({	StudentName:"",
			Level:"",
			CohortNumber:"",})
    var that = this
    $.ajax({
      type: 'POST',
      url: ' http://localhost:3000/api/student/',
      data: that.state.states,
      success: function (data) {
        console.log(data)
      },
      error: function (request, status, error) {
        console.log(error)
      }
    })
  }
  render () {
    return (<div>

      <TextField
		value={this.state.StudentName}
        style={{fontSize: '20px'}}
        floatingLabelText='Enter a student name:'
        floatingLabelFixed
        floatingLabelStyle={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}
        onChange={this.onChange}
        id='StudentName'
      /><br />

      <TextField
		value= {this.state.Level}
        style={{fontSize: '20px'}}
        floatingLabelText=' Enter a student Level:'
        floatingLabelFixed
        floatingLabelStyle={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}
        onChange={this.onChange}
        id='Level'
      /><br />

      <TextField
		value={this.state.CohortNumber}
        style={{fontSize: '20px'}}
        floatingLabelText=' Enter a student cohort:'
        floatingLabelFixed
        floatingLabelStyle={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}
        onChange={this.onChange}
        id='CohortNumber'
      /><br />
      <br />
      <RaisedButton label='Add Student' buttonStyle={{ background: '#FF1493'}} onClick={this.handleSubmit} />

      <RaisedButton label='Back' buttonStyle={{ background: '#FF1493'}} onClick={() => history.push('/')} />

    </div>)
  }
}

export default Student
