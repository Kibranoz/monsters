import React, { Component } from "react";
import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search/search.component.jsx";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    //se met à jopur à chaque onchange
    const { monsters,searchField } = this.state;
    //const searchField = this.state.searchField;
    //const monsters = this.state.monsters;
    const filteredMonsters = monsters.filter((monster) =>  
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(monsters)
  {console.log(filteredMonsters)}
    return (
      <div className="App">
        <SearchBox placeholder = "Rechercher les chats" handleFunction = {(e) => {
            this.setState({ searchField: e.target.value });
          }} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
