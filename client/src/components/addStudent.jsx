import React from 'react';

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
      Enter a student name: <input value={this.state.term} onChange={this.onChange}/>       
      <button onClick={this.add}> Add Student </button>
    </div>) 
  }
}

export default Student;