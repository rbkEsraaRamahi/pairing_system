import React from 'react';
import $ from 'jquery';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Student extends React.Component {
	constructor(props) {
		super(props);
		this.state = {states:{
			StudentName:"",
			Level:"",
			CohortNumber:""
		}
	}
	this.onChange = this.onChange.bind(this);
	this.handleSubmit  = this.handleSubmit.bind(this);
}

onChange(e) {
	var states = this.state.states;
	var name = e.target.id;
	var value = e.target.value;
	if(name==="Level"||name==="CohortNumber"){
		value=Number(value)
		console.log(value)

	}
	states[name] = value;
	this.setState({states:states});
}

handleSubmit() {
	console.log(this.state.states)
	var that=this
	$.ajax({
		type: 'POST',
		url: ' http://localhost:3000/api/student/',
		data: that.state.states,
		success: function (data) {
			console.log(data)
		},
		error: function (request, status, error) {
			console.log(error);
		}
	});
}

render() {
	return (<div>	
		
		<TextField
		style={{fontSize: '20px'}}
		floatingLabelText="Enter a student name:"
		floatingLabelFixed={true}
		floatingLabelStyle={{ fontSize: '20px',fontWeight:"bold",color:"black" }}
		onChange={this.onChange}
		id="StudentName"
		/><br />

		<TextField
		style={{fontSize: '20px'}}
		floatingLabelText=" Enter a student Level:"
		floatingLabelFixed={true}
		floatingLabelStyle={{ fontSize: '20px',fontWeight:"bold" , color:"black" }}
		onChange={this.onChange}
		id="Level"
		/><br />

		<TextField
		style={{fontSize: '20px'}}
		floatingLabelText=" Enter a student cohort:"
		floatingLabelFixed={true}
		floatingLabelStyle={{ fontSize: '20px',fontWeight:"bold",color:"black" }}
		onChange={this.onChange}
		id="CohortNumber"
		/><br />
		<br />
		<RaisedButton label="Add Student" buttonStyle={{ background:"#FF1493"}}  onClick={this.handleSubmit} />
		
		</div>)  
}
}

export default Student;