import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import axios from 'axios';
//import { render } from '@testing-library/react';

class App extends Component {

 constructor(props){
   super(props);
   this.state={
     data:false
  }
 }

 componentDidMount(){
   let url = "https://jsonplaceholder.typicode.com/users";
  fetch(url,{
    method:'GET',
    headers:{
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    }
  }).then((result)=>{
    result.json().then((resp)=>{
      //console.warn(resp);
      this.setState({data:resp})
    })
  })
}

render() {
  const data=this.state.data;
  //console.warn(data);
  return (

    <div className="App">
     
     {
       data ? 
       data.map(user => (
         <div className="divwrap">
            <div className="flt-left"><h3>{user.name}</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            </div>           
         </div>        
       )) 
       :<p>Pleas wait for a while...</p>
     }

    </div>
  );
}

}

export default App;
