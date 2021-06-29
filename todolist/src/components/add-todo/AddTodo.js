import React from 'react';
import './AddTodo.scss';

class AddTodo extends React.Component{
// initializing the state of object in the class through constructor
    constructor(props){
        super(props);
       this.state={
         addTodo:false,
         todos:[],
         isPresent:false
       }
    }

//onClick function to post the todo data in API 
 clickHandler(event){
 let title=document.getElementById('title').value;
 let description=document.getElementById('descr').value;
 let dueDate=document.getElementById('duedate').value;
 let dueTime=document.getElementById('duetime').value;

 //defining the context of todo item as payload in JSON format 
const payload={
    title,
    description,
    dueDate,
    dueTime
}
    const requestOptions = {
      method: "POST",
      // sending the above defined payload as body in Post request
      body: JSON.stringify(payload),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    };
    fetch("http://localhost:3000/todos", requestOptions)
      .then((response) => response.json())
      //using refresh function from app.js component through props which will refresh the Todo list after Post
     .then(() => this.props.refresh())
      .catch((err) => console.log(err));

 }
  
 //defined a function to hide or unhide the details for adding todoItem
 show(){
   const s=!this.state.addTodo;
   this.setState({addTodo:s})
 }


render(){
    
    return(
        <div className="container">
        <button className="addtop" id="add" onClick={()=>this.show()}>ADD TODO ITEM</button>
        {/* Checking if the addTodo button is true, if true then only only show the details */}
        { this.state.addTodo  && (<div id="Tododetails" className="Adddiv">
        <form id="formid">
        <input id="title" type="text" placeholder="Enter Title" required/><br/>
        <input id="descr" type="text" placeholder="Enter Description" required/><br/>
        <input id="duedate" type="date" placeholder="Enter Due Date" required/><br/>
        <input id="duetime" type="time" placeholder="Enter Due Date" required/><br/>
        {/* Defined an onClick function which will save the data in database through post request */}
        <button className="savetodo" id="save" type="submit" form="formid" onClick={this.clickHandler.bind(this)}>Save</button>
        </form>
        </div>)}
        </div>
    );
}
}

// Exporting the component so that we can import it when required.
export default AddTodo;