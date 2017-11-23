import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
// import axios from 'axios';
import AddToPantry from './pantry';
import PantryItem from './pantryItem';
import GrocList from './grocList';

var config = {
  apiKey: "AIzaSyB7aBVzri5bUZIA-CdT8F8z8qbX7eAkNaw",
  authDomain: "grocery-app-7742e.firebaseapp.com",
  databaseURL: "https://grocery-app-7742e.firebaseio.com",
  projectId: "grocery-app-7742e",
  storageBucket: "",
  messagingSenderId: "707941547891"
};
firebase.initializeApp(config);


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pantry: [],
      grocList: []
    }
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    const groceryApp = firebase.database().ref('/grocery-app/users/amie');
    groceryApp.on('value', (snapshot) => {
      const pantry = [];
      let foods = snapshot.val();
      for (let food in foods) {
        // console.log('food? ', foods[food]);
        let newFood = foods[food];
        newFood.id = food;
        // console.log(newFood)
        pantry.push(newFood);
      }
      this.setState({
        pantry
      })
    });
    // console.log(pantry);
  }

  addItem(item) {
    console.log('item to add', item);
    const groceryApp = firebase.database().ref('/grocery-app/users/amie');
    groceryApp.push(item);
  }

  updateItem(item) {
    console.log('item to update', item);
  }

  deleteItem(item) {
    console.log('item to delete', item);
    // console.log('item to delete', firebase.database().ref(`/grocery-app/users/amie/${item}`));
    firebase.database().ref(`/grocery-app/users/amie/${item}`).remove();
  }

  render() {
    // {Object.keys(this.state.items).forEach(function (key) {

    // })}
    return (
      <div>
        <h1>Project 5</h1>
        {/* <Pantry /> */}
        <AddToPantry submitForm={this.addItem} />
        <ul>
          {this.state.pantry.map((food) => {
            // console.log('food id',food);
            return <PantryItem item={food} key={food.id} delete={this.deleteItem} update={this.updateItem}/>
          })}
          {/* {this.state.pantry.map((food) => {
            return <ToDoItem item={food} />
          })} */}

        </ul>
        <GrocList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
