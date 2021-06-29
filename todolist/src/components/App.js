import React from 'react';
import './App.scss';
// adding the imports for components
import AddTodo from './add-todo/AddTodo';
import TodoList from './todos-list/TodosList';

class App extends React.Component {
// initializing the state of object in the class through constructor
  constructor(props) {
    //super refers to the parent class constructor
    super(props);
    this.state={
      error: null,
      isPresent: false,
      todos: []
    }
  }

  //Getting Todo data from API
  refreshdata=()=>{
    fetch("http://localhost:3000/todos")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isPresent: true,
          todos: result
        });
      },
      (error) => {
        this.setState({
          isPresent: true,
          error
        });
      }
    )

  }

  //this method is automatically executed after the first render of component where we are making API call to get todos
  componentDidMount() {
    this.refreshdata();
  }

  render() {    
      return (
        <div>
        <div className="App">
        {/* Navbar - Todo List */}
          <nav className="brand-bar">
            <h1 className="title">TODO LIST</h1></nav>
            </div>
            {/* Adding two components i.e. AddTodo and TodoList in App.js */}

            {/* passing the refresh function to the component */}
            <AddTodo refresh={this.refreshdata}></AddTodo>
            
            {/* passing refresh function, todos,isPresent, error to the component */}
            <TodoList refresh={this.refreshdata} todos={this.state.todos} isPresent={this.state.isPresent} error={this.state.error}></TodoList>
        </div>
      );
    }
  }



export default App;
