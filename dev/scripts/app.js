import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import PantryForm from './pantryForm';
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
      grocList: [],
      addItemSection: false, 
      grocListSection: false, 
      pantrySection: false,
      instructionsSection: true,
    }
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.checked = this.checked.bind(this);
    this.lowerStatus = this.lowerStatus.bind(this);
    this.toggleSection = this.toggleSection.bind(this);
  }

  componentDidMount() {
    const groceryApp = firebase.database().ref('/grocery-app/users/amie');
    groceryApp.on('value', (snapshot) => {
      const pantry = [];
      let foods = snapshot.val();
      for (let food in foods) {
        let newFood = foods[food];
        newFood.id = food;
        pantry.push(newFood);
      }
      this.setState({
        pantry
      })
    });
  }

  addItem(item) {
    const groceryApp = firebase.database().ref('/grocery-app/users/amie');
    groceryApp.push(item);
  }

  lowerStatus(item, status) {
    if (status === 'full') {
      this.updateItem(item, {currentStatus: 'low'});
    } else if (status === 'low') {
      this.updateItem(item, {currentStatus: 'empty'});
    }
  }

  updateItem(item, updates) {
    firebase.database().ref(`/grocery-app/users/amie/${item}/`).update(updates);
  }

  deleteItem(item) {
    firebase.database().ref(`/grocery-app/users/amie/${item}`).remove();
  }

  checked(item) {
    this.updateItem(item, {currentStatus: 'full'});
  }

  toggleSection(e) {
    e.preventDefault();
    const sectionState = e.target.id+'Section'
    if (!this.state[sectionState]) {
      this.setState({
        [sectionState]: true
      })
    } else {
      this.setState({
        [sectionState]: false
      })
    }
  }
  
  render() {
    return (
      <div className="mainApp">
        <section className="instructions">
            <button className="instructions" id="instructions" onClick={this.toggleSection}>Instructions</button>
            {this.state.instructionsSection ? <ol className="instructionsList"> 
                <li>Add food items to your pantry</li>
                <p> add a name, a description (optional), where you purchse the  item, and how much you have (full, low, empty)</p>
                
                <li>As you use items, click use to go from full to low to empty</li>
                <p>when items are running low, they will automatically be added to the grocery list.  When items are empty, they are no longer in your pantry </p>
                
                <li>Go shopping and click the items as you buy them</li> 
                <p>When you check an item off your grocery list, it will automatically be removed from the list and added to your pantry (set to full)</p>
            </ol> : ''}
        </section>
      

        <section className="grocList">
          <button className="grocList" id="grocList" onClick={this.toggleSection}>Grocery List</button>
          {this.state.grocListSection ? <ul className="groc"> 
              {this.state.pantry.map((food) => {
              return <GrocList item={food} key={food.id} checked={this.checked} />
            })}
          </ul> : ''}
        </section>

        {/* <section className="addItem">
          <button className="addItem" id="addItem" onClick={this.toggleSection}>Add Item</button>
          {this.state.addItemSection ? <PantryForm submitForm={this.addItem} /> : ''}
        </section> */}

        <section className="pantry">
          <button className="pantry" id="pantry" onClick={this.toggleSection}>Pantry</button>    
          {this.state.pantrySection ? <ul className="pantryUl">
            {this.state.pantry.map((food) => {
              return <PantryItem item={food} key={food.id} delete={this.deleteItem} edit={this.editItem} status={this.lowerStatus} />
            })}
          </ul> : ''}
        </section>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
