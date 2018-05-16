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
      pairing:[]
    }
    this.pairingList = this.pairingList.bind(this);
     this.add = this.add.bind(this);


  }

  add () {
  var that=this
  console.log(this.state.pairing)
    $.ajax({
      type: "PUT",
      url: "http://localhost:3000/api/student/update",
      data:{"student":that.state.pairing},
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
    success: function (dataB) {
      function randomaize(data) {
      var arr = []
      for (var i = 0; i < data.length; i++) {
        arr.push(data[i])
      }
       var length = arr.length;
        for (var i =0; i < arr.length; i++) {
          var rand = Math.floor(Math.random()*(length-i)+i);
          var previos = arr[i];
          arr[i] = arr[rand];
          arr[rand] = previos; 
        }
        return arr;
}
 var arr = randomaize(dataB);
 // debugger;
  var result=[];
  var counter=-1;
  var filter = [];
  if(arr.length % 2 !== 0 ){
    counter = 0;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].Level >=3.5 && !arr[i].WhoPairedWith.includes("DUCK")){
        // arr[i]['DUCK'] = true;
        console.log(arr[i])
        result.push([arr[i] , {StudentName:"DUCK"}])
        arr.splice(i,1)
        break;
      }
    }
  }
  while(arr.length>0){
      counter++;
      result.push([arr[0]]);      
       var correntStudent = arr.shift()
 for (var i = 0; i < arr.length; i++) {
   if(arr[i].Level -1 === correntStudent.Level || arr[i].Level +1 === correntStudent.Level){
       if(correntStudent.WhoPairedWith.indexOf(arr[i].StudentName) === -1){
       result[counter].push(arr[i])
       var index = arr.indexOf(arr[i])
       arr.splice(index, 1)
       break;
       }
     }
 }

 for (var i = 0; i < result.length; i++) {
  if (result[i].length === 1) {
    for (var j = i; j < result.length; j++) {
      if (result[j] !== result[i] && result[j].length === 1 ){
        if(result[i][0].WhoPairedWith.indexOf(result[j][0].StudentName) === -1){
          result[i].push(result[j][0])
          result.splice(j,1)
        }
      }
    }
  }
 }
 }

// return result 

    that.state.pairing=result;
    that.setState({
      pairing: that.state.pairing
    })
    // that.setState({
    //   pairing: pairs
    // })
    
    },
    error: function (request, status, error) {
      console.log(error);
    }
  });
  //console.log(this.state.pairing)
    

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
      <RaisedButton label="Create"  buttonStyle={{ background:"#FF1493"}}  onClick={this.pairingList}  />
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
        <TableRowColumn>{student[0].StudentName}</TableRowColumn>
        <TableRowColumn>{student[1].StudentName}</TableRowColumn>
        </TableRow>
        )}
      </TableBody>
      </Table>
    <RaisedButton label="Submit"  buttonStyle={{ background:"#FF1493"}}  onClick={this.add} />

      </div>)
  }
}

export default App;
