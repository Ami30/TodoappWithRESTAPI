import todoService from './../services/todo.service'


//defined a method to get all todo data from database. This will call service where business logic is written.
const index=(request,response)=>{
const promise=todoService.search();
promise.then((todos)=>
{
    response.status(200);
    response.json(todos);
}).catch(e=>{
    response.status(400);
    response.json(e.message);
})
}

//defined a method to create todo data in database. This will call service where business logic is written.
const save=(request,response)=>{
    //syntax in ES6 to clone an object
    const todo={...request.body};
    console.log(todo);
    const promise=todoService.save(todo);
    promise.then((newTodo)=>
    {
        response.status(200);
        response.json(newTodo);
    }).catch(e=>{
        response.status(400);
        response.json(e.message);
    })
    }

//defined a method to get a specific todo data from database. This will call service where business logic is written.
const get=(request,response)=>{
    const id=request.params.todoId;
    const promise=todoService.get(id);
    promise.then((Todo)=>
    {
        response.status(200);
        response.json(Todo);
    }).catch(e=>{
        response.status(400);
        response.json(e.message);
    })

}

//defined a method to update todo data in database. This will call service where business logic is written.
const update=(request,response)=>{
    const id=request.params.todoId;
    const body={...request.body};
    //const body={...request.body.status="Completed"};
    const promise=todoService.update(id,body);
    promise.then((Todo)=>
    {
        response.status(200);
        response.json(Todo);
    }).catch(e=>{
        response.status(400);
        response.json(e.message);
    })
    
}

//defined a method to remove data from database. This will call service where business logic is written.
const remove=(request,response)=>{
    const id=request.params.todoId;
    const promise=todoService.remove(id);
    promise.then((Todo)=>
    {
        response.status(200);
        response.json({
            "message": "Todo Deleted successfully."
        });
    }).catch(e=>{
        response.status(400);
        response.json(e.message);
    })
    
}

//exporting all the methods
export default {
    index:index,
    save:save,
    get:get,
    update:update,
    remove:remove
}