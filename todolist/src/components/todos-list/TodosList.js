import React from 'react';
import './TodosList.scss';

class Todos extends React.Component{
  // initializing the state of object in the class through constructor
    constructor(props){
        super(props);
        this.state={
          error: props.error,
          isPresent: props.isPresent,
          shown:false,
          selectedId:'',
          todos: props.todos
        }
    }
    //Used this method to update the state values with new props values
    //This method gets called whenever any change happens to props values eg. whenever new Todo item is added
 componentWillReceiveProps(newProp){
     this.setState({
       todos:newProp.todos,
       isPresent:newProp.isPresent,
       error:newProp.error
     })  
     }
  // This function will be called when mark as completed button is clicked. It will call the PUT method which will update the status of Todo in database.  
    updateID=(id)=>{
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        //updating the status to completed.
        body: JSON.stringify({          
        status: 'Completed' })
    };
    //sending a URL with ID attached so that the status of only that particular ID will get updated
    fetch(`http://localhost:3000/todos/${id}`, requestOptions)
        .then(response => response.json())
        .then(() => this.props.refresh());    
     }

     // method for viewing and hiding details of Todo item
    displayDetails = (bool,id) => {
      this.setState({
        shown:bool,
        selectedId:id
       });
    }

    render(){
        const { error, isPresent,shown, selectedId,todos } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isPresent) {
            // If no Todo data is present then we will get this message.
            return <div>No Data present</div>;
          } else {
            return(
              <div className="tododiv" id="todosdivid">
                  <ul id="Addeditems">
                    {todos.map((todo,i)=>(
                      <li key={todo.id} className={todo.status==="Active"?'activeitem':'completeditem'}>
                        {todo.title}
                        {/* This is Mark as completed button which will update the status of Todo item in database for that particular TodoID */}
                        <button  className="btnCompleted" onClick={()=>this.updateID(todo.id)} disabled={todo.status==="Completed"} type="button">Mark As Completed</button>
                        {/* This is Hide details button which hide the Todo details if they are visible */}
                        <button className="btnHideDetail" onClick={this.displayDetails.bind(this, false,todo.id)}>Hide Details</button>
                        {/* This is View details button which view the Todo details if they are not visible */}
                       <button className="btnViewDetail" onClick={this.displayDetails.bind(this, true,todo.id)}>View Details</button> 
                        {/* This is the div element which will get hide and view according to above two button clicks */}
                        {shown && selectedId===todo.id && (<div id="thedivelement" className="thedivelement" >
                          <b>Description : </b>{todo.description}<br/>
                          <b>Due Date : </b> {todo.dueDate} <br/>
                         <b>Due time : </b>  {todo.dueTime} <br/>
                         <b>Status : </b> {todo.status}
                        </div>)  }               
                      </li>
                    
                    ))}
                  </ul>
                  </div>)
    
        }
    }

}

// Expoting the Todos so that it can be imported whereever required.
export default Todos;