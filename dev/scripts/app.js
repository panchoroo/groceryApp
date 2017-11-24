import React from 'react';
import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
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
      grocList: [],
      addItemSection: false, 
      grocListSection: false, 
      pantrySection: false 
    }
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.checked = this.checked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editItem = this.editItem.bind(this);
    this.lowerStatus = this.lowerStatus.bind(this);
    this.toggleSection = this.toggleSection.bind(this);
    // this.displaySection = this.displaySection.bind(this);
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

  toggleSection(e) {
    e.preventDefault();
    // console.log('clicked', e.target.id);
    // console.log('this.addItemSection', this.state.addItemSection);
    // console.log('this', this);
    // toggle section
    const sectionState = e.target.id+'Section'
    console.log(sectionState);
    // console.log(this.state.sectionState);
    if (!this.state[sectionState]) {
      this.setState({
        [sectionState]: true
      })
    } else {
      this.setState({
        [sectionState]: false
      })
    }
    // this.displaySection(this.state.sectionState)
  }

  // displaySection(section) {
  //   if (section) {
  //     console.log('diplay section addItem');
  //     return <PantryForm submitForm={this.addItem} />
  //   }
  // }
  
  render() {
    console.log('state', this.state);
    return (
      
      <div className="mainApp">
        <section className="addItem">
          <button className="addItem" id="addItem" onClick={this.toggleSection}>Add Item</button>
          {this.state.addItemSection ? <PantryForm submitForm={this.addItem} /> : ''}
        </section>

        <section className="grocList">
          {/* <h2>Grocery List</h2> */}
          <button className="grocList" id="grocList" onClick={this.toggleSection}>Grocery List</button>
          {this.state.grocListSection ? <ul className="groc"> 
            {this.state.pantry.map((food) => {
              return <GrocList item={food} key={food.id} checked={this.checked} />
            })}
          </ul> : ''}
          {/* <ul> */}
            {/* <form action="" onSubmit={() => this.handleSubmit(this.props.donutKey)}> */}
            {/* <form action="" onSubmit={this.handleSubmit}> */}
              {/* onClick={() => this.props.handleClick(this.props.donutKey)} */}
              {/* {this.state.pantry.map((food) => {
                // console.log('food id',food);
                return <GrocList item={food} key={food.id} checked={this.checked} />
              })} */}
              {/* <button type="submit">Update pantry</button> */}
              {/* <UpdatePantry submitForm={this.updateItem }/>  */}
            {/* </form> */}
          {/* </ul> */}
        </section>

        <section className="pantry">
          <button className="pantry" id="pantry" onClick={this.toggleSection}>Pantry</button>    
          {/* <h2>Pantry</h2> */}
          {/* <Pantry /> */}
          {this.state.pantrySection ? <ul className="pantryUl">
            {this.state.pantry.map((food) => {
              // console.log('food id',food);
              return <PantryItem item={food} key={food.id} delete={this.deleteItem} edit={this.editItem} status={this.lowerStatus} />
            })}
          </ul> : ''}
          {/* <ul> */}
            {/* {this.state.pantry.map((food) => {
              // console.log('food id',food);
              return <PantryItem item={food} key={food.id} delete={this.deleteItem} edit={this.editItem} status={this.lowerStatus}/>
            })} */}
            {/* {this.state.pantry.map((food) => {
              return <ToDoItem item={food} />
            })} */}
          {/* </ul> */}
        </section>

      </div>
      // </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
