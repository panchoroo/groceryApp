import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
// import axios from 'axios';
// import Donut from './donut';
import Pantry from './pantry';
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
    // this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    const groceryApp = firebase.database().ref('/grocery-app/users/amie');
    // groceryApp.push({ item: 'eggs', description: '', status: 'full', location: 'Shoppers', autoBuy: true, category: 'refridgerated'});
    // const populatePantry = (groceryApp) => {
    const pantry = [];
    groceryApp.on('value', (snapshot) => {
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

  // addItem(item) {
  //   console.log(item);
  //   const newPantry = Array.from(this.state.pantry);
  //   newPantry.push(item);
  //   // console.log('0',newPantry[0]);
  //   this.setState({
  //     pantry: newPantry
  //   })
  // }

  render() {
    // {Object.keys(this.state.items).forEach(function (key) {

    // })}
    return (
      <div>
        <h1>Project 5</h1>
        <Pantry />
        {/* <AddToPantry submitForm={this.addItem} /> */}
        <ul>
          {this.state.pantry.map((food) => {
            // console.log('food id',food);
            return <PantryItem item={food} key={food.id}/>
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

const PantryItem = (props) => {
  // console.log('props', props.item.item);
  return (
    <li>
      🌽 
      <p>{props.item.item}</p>
      <p>{props.item.description}</p>
      <p>{props.item.status}</p>
      <p>{props.item.location}</p>
      <p>{props.item.category}</p>
      {/* <p>{props.item.autoBuy}</p> */}
    </li>
    // <li>🐷</li>
  )
}

// class AddToPantry extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       currentItem: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     // console.log(e.target.value);
//     this.setState({
//       currentItem: e.target.value
//     })
//   }

//   handleSubmit(e) {
//     // console.log('submit')
//     e.preventDefault();
//     this.props.submitForm(this.state.currentItem);
//     this.setState({
//       currentItem: ''
//     })
//   }

//   render() {
//     return (
//       <form action="" onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.currentItem}
//           onChange={this.handleChange}
//         />
//         <button type="submit">Add food item</button>
//       </form>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('app'));


// class Firebase extends React.Component {
  // initialize() {
    // var config = {
    //   apiKey: "AIzaSyB7aBVzri5bUZIA-CdT8F8z8qbX7eAkNaw",
    //   authDomain: "grocery-app-7742e.firebaseapp.com",
    //   databaseURL: "https://grocery-app-7742e.firebaseio.com",
    //   projectId: "grocery-app-7742e",
    //   storageBucket: "",
    //   messagingSenderId: "707941547891"
    // };
    // firebase.initializeApp(config);
    // const groceryApp = firebase.database().ref('/grocery-app');
    // console.log(groceryApp);
    // groceryApp.push({ item: 'eggs', checked: false });
    // {groceryApp.on('value', (snapshot) => {
    //     console.log(snapshot.val());
    // })}    
  // }

//   render() {
//     return (
//       <div>
//         <p>firebase!</p>
//       </div>
//     )
//   }
// }