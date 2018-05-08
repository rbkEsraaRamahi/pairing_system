import React from 'react';
import ReactDOM from 'react-dom';
import Student from './components/addStudent.jsx';
import Pairing from './components/pairingList.jsx';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      students: ["Esraa", "Hanan", "Sahar", "Mohannad", "Mai", "Heba"],
      pairing:[]
    }
    this.pairingList = this.pairingList.bind(this);


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
  pairingList(){
    var arr = this.state.students;
    var length = arr.length;
    for (var i =0; i < arr.length; i++) {
      var rand = Math.floor(Math.random()*(length-i)+i);
      var previos = arr[i];
      arr[i] = arr[rand];
      arr[rand] = previos; 
    }
    this.state.pairing=arr;
    this.setState({
      pairing: this.state.pairing
    })
    console.log(this.state.pairing);
  }

  render () {
    return (<div>
      <h1>Pairing System</h1>
      <Student/>
      <h4> Pairing List </h4>
      <button onClick={this.pairingList}> create </button>

      <Table>
      <TableHeader>
      <TableRow>
      <TableHeaderColumn>Student1</TableHeaderColumn>
      <TableHeaderColumn>Student2</TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody style={{width: 100%}}>
      {this.state.pairing.map(student =>
        <TableRow>
        <TableRowColumn>{student}</TableRowColumn>
        <TableRowColumn>{student}</TableRowColumn>
        </TableRow>
        )}
      </TableBody>
      </Table>
      </div>)
  }
}

export default App;
