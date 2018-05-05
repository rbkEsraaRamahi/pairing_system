import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Student from './components/addStudent.jsx';
import Pairing from './components/pairingList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      students: []
    }

  }

  add (term) {
  
    $.ajax({
      type: "POST",
      url: "/",
      data: {},
      success: function(res){
        console.log('sucesss');
      }
    });
  }

  render () {
    return (<div>
      <h1>Pairing System</h1>
      <Student onAdd={this.add.bind(this)}/>
      <Pairing students={this.state.students}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));