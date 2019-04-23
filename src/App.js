import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';

class App extends Component {
  
  render() {
    const headers = ["My To Do Application"];

    return (
      <div className="container">
        {
          headers.map(function(header,index){
            return <Header headerText={header} key={index} />
          })
        }   
        <AddTask />  
     </div>
    );
  }
}

export default App;
