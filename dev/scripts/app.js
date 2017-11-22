import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
// import axios from 'axios';
import Donut from './donut';
import Pantry from './pantry';
import GrocList from './grocList';

const donuts = ['sourcream glazed', 'honey dip', 'boston cream'];

class Firebase extends React.Component {
  // initialize() {
  //   var config = {
  //     apiKey: "AIzaSyB7aBVzri5bUZIA-CdT8F8z8qbX7eAkNaw",
  //     authDomain: "grocery-app-7742e.firebaseapp.com",
  //     databaseURL: "https://grocery-app-7742e.firebaseio.com",
  //     projectId: "grocery-app-7742e",
  //     storageBucket: "",
  //     messagingSenderId: "707941547891"
  //   };
  //   firebase.initializeApp(config);
 // const groceryApp = firebase.database().ref('/grocery-app');
    // {groceryApp.on('value', (snapshot) => {
    //     console.log(snapshot.val());
    // }}    
  // }
 
  render() {
    return (
      <div>
        <p>firebase!</p>
      </div>
    )
  }
}

class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Project 5</h1>
          <Firebase />
          <Pantry />
          <GrocList />
          {donuts.map(donut => {
            return (
              <Donut donutName={donut}/>
            )
          })}
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
