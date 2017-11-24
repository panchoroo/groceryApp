import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
// import axios from 'axios';
import PantryForm from './pantryForm';
import PantryItem from './pantryItem';
import GrocList from './grocList';
import UpdatePantry from './updatePantry';

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
    this.checked = this.checked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editItem = this.editItem.bind(this);
    this.lowerStatus = this.lowerStatus.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit', this);

  }
  lowerStatus(item, status) {
    // console.log(item, status);
    if (status === 'full') {
      this.updateItem(item, { currentStatus: 'low'});
    } else if (status === 'low') {
      this.updateItem(item, { currentStatus: 'empty' });
    }
  }

  editItem(item) {
    console.log(item);
  }

  updateItem(item, updates) {
    // console.log('item to update', item);
    // const updates = { currentStatus: 'full' };
    firebase.database().ref(`/grocery-app/users/amie/${item}/`).update(updates);
  }

  deleteItem(item) {
    // console.log('item to delete', item);
    // console.log('item to delete', firebase.database().ref(`/grocery-app/users/amie/${item}`));
    firebase.database().ref(`/grocery-app/users/amie/${item}`).remove();
  }

  checked(item) {
    console.log('item to check', item);
    this.updateItem(item, { currentStatus: 'full' });
    // const updates = {currentStatus: 'full'};
    // firebase.database().ref(`/grocery-app/users/amie/${item}/`).update(updates);
  }

  render() {
    // {Object.keys(this.state.items).forEach(function (key) {

    // })}
    return (
      <div>
        <h1>Pantry</h1>
        {/* <Pantry /> */}
        <PantryForm submitForm={this.addItem} />
        <ul>
          {this.state.pantry.map((food) => {
            // console.log('food id',food);
            return <PantryItem item={food} key={food.id} delete={this.deleteItem} edit={this.editItem} status={this.lowerStatus}/>
          })}
          {/* {this.state.pantry.map((food) => {
            return <ToDoItem item={food} />
          })} */}

        </ul>

        <h2>Grocery List</h2>
        <ul>
          {/* <form action="" onSubmit={() => this.handleSubmit(this.props.donutKey)}> */}
          <form action="" onSubmit={this.handleSubmit}>
            {/* onClick={() => this.props.handleClick(this.props.donutKey)} */}
          {this.state.pantry.map((food) => {
            // console.log('food id',food);
            return <GrocList item={food} key={food.id} checked={this.checked}/>
          })}
          <button type="submit">Update pantry</button>
          {/* <UpdatePantry submitForm={this.updateItem }/>  */}
          </form>
        </ul>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
