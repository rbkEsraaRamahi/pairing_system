import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.add = this.add.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  add() {
    this.props.onAdd(this.state.term);
  }

  render() {
  	return (<div>	

  		<TextField
  		style={{fontSize: '20px'}}
  		floatingLabelText="Enter a student name:"
  		floatingLabelFixed={true}
  		floatingLabelStyle={{ fontSize: '20px',fontWeight:"bold",color:"black" }}
  		onChange={this.onChange}
  		/><br />

  		<TextField
  		style={{fontSize: '20px'}}
  		floatingLabelText=" Enter a student Level:"
  		floatingLabelFixed={true}
  		floatingLabelStyle={{ fontSize: '20px',fontWeight:"bold" , color:"black" }}
  		onChange={this.onChange}
  		/><br />

  		<TextField
  		style={{fontSize: '20px'}}
  		floatingLabelText=" Enter a student cohort:"
  		floatingLabelFixed={true}
  		floatingLabelStyle={{ fontSize: '20px',fontWeight:"bold",color:"black" }}
  		onChange={this.onChange}
  		/><br />
  		<br />
  		<RaisedButton label="Add Student" buttonStyle={{ background:"#FF1493"}}  onClick={this.add} />
  		</div>)  
  }
}

export default Student;