import React from 'react';
import ReactDOM from 'react-dom';
import Student from './components/addStudent.jsx';
import Pairing from './components/pairingList.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import AppBar from 'material-ui/AppBar';
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
  var that=this
  $.ajax({
    type: 'GET',
    url: ' http://localhost:3000/api/student/',
    data: {},
    success: function (data) {

      console.log(data)
      var arr = data;
    var length = arr.length;
    for (var i =0; i < arr.length; i++) {
      var rand = Math.floor(Math.random()*(length-i)+i);
      var previos = arr[i];
      arr[i] = arr[rand];
      arr[rand] = previos; 
    }
    that.state.pairing=arr;
    that.setState({
      pairing: that.state.pairing
    })
    console.log(that.state.pairing);
    var pairs = [];
    arr=that.state.pairing;
    for (var i=0 ; i<arr.length ; i+=2) {
      if (arr[i+1] !== undefined) {
        pairs.push ([arr[i].StudentName, arr[i+1].StudentName]);
      } else {
        pairs.push ([arr[i].StudentName]);
      }
    }
    console.log(pairs)
    //this.state.pairing=pairs;
    that.setState({
      pairing: pairs
    })

    console.log(that.state.pairing)
    },
    error: function (request, status, error) {
      console.log(error);
    }
  });
    

  }
  
  render () {
    return (<div >
      <AppBar
      title="Pairing System"
      titleStyle={{fontWeight:"bold"}}
      style={{ background:"#FF1493"}}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <Student/>
      <br />
      <br />
      <h4> Pairing List </h4>
      <RaisedButton label="Create"  buttonStyle={{ background:"#FF1493"}}  onClick={this.pairingList}  onClick={this.pairingList} />
      <Table>
      <TableHeader>
      <TableRow>
      <TableHeaderColumn>Student1</TableHeaderColumn>
      <TableHeaderColumn>Student2</TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody>
      {this.state.pairing.map((student,index) =>
        <TableRow>
        <TableRowColumn>{student[0]}</TableRowColumn>
        <TableRowColumn>{student[1]}</TableRowColumn>
        </TableRow>
        )}
      </TableBody>
      </Table>
      </div>)
  }
}

export default App;
