import React, {Component} from 'react';
import Header from './Components/Header';
import ListDisplay from './Components/ListDisplay';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: 'Matt',
      todoList: ['Code the things', 'Eat', 'Sleep']
    }
    //BIND THIS BOI
    this.changeUsername = this.changeUsername.bind(this);
  }
// functions will need to be bound to them selves to be used
  changeUsername(){
    this.setState({username: 'Eric'})
  };
  // public Classfield Syntax
  // arrow functions can get around needing to bind the function to itself in the constructor 
  //function
  properContext = () =>{
    this.setState({username: 'Aaron'})
  }
  render(){
    // const mappedTodos = this.state.todoList.map((todo, i)=>{
    //   return (
    //     <h2 key={i}>{todo}</h2>
    //   )
    // })

    const mappedTodos = this.state.todoList.map ((todo, i ) =>{
      return(
      <ListDisplay key = {i} todo={todo}/>
    )
    })
    return (
      <div className="App">
        <Header username = {this.state.username} 
        greeting = 'Hello World' 
        usernameFn= {this.changeUsername}
        secondUsernameFn= {this.properContext}/>
        <h1>My Todo List</h1>
        {mappedTodos}
        {/* <ListDisplay todo= {this.state.todoList[0]}/>
        <ListDisplay todo= {this.state.todoList[1]}/>
        <ListDisplay todo= {this.state.todoList[2]}/> */}
        
        {/* alternative to mapped todos variable */}
        {this.state.todoList.map((todo, i )=>{
          return (
            <ListDisplay key ={i} todo ={todo}/>
          )
        })}

      </div>
    )
  }
}

export default App;
