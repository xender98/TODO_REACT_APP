import React, { Component } from "react";
import List from "./List";
import InputForm from "./InputForm";
import "../styles/App.css";
class App extends Component {
  
  state = {
    list: [],
    pendingItem: ""
  };

  lastItemId = 0;

  newItemId = () => {
    const id = this.lastItemId;
    this.lastItemId += 1;
    return id;
  };

  removeItemAt = id => {
    this.setState({ list: this.state.list.filter(item => id !== item.id) });
  };

  handleItemInput = e => this.setState({ pendingItem: e.target.value });

  setNameAt = (name, id) => {
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            name
          };
        }
        return item;
      })
    });
  };

  newItemSubmitHandler = e => {
    e.preventDefault();
    const id = this.newItemId();
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
          isEditing: false,
          id
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Todo List</h1>
         <InputForm className="myform"
          newItemSubmitHandler={this.newItemSubmitHandler}
          handleItemInput={this.handleItemInput}
          pendingItem={this.state.pendingItem}
        />
        <List
          list={this.state.list}
          removeItemAt={this.removeItemAt}
          setNameAt={this.setNameAt}
        />
      </div>
    );
  }
}

export default App;