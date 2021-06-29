import Todo from './../models/todo'


//Business logic for getting all todo items from database
const search=(params)=>{
    const promise=Todo.find(params).exec();
    return promise;
}

//Business logic for saving todo item in database
const save=(newTodo)=>{
   const todo=new Todo(newTodo);
   const promise=todo.save();
   return promise;
}

//Business logic for getting specific todo item from database
const get=(id)=>{
const promise=Todo.findById(id).exec();
return promise;
}

//Business logic for updating specific todo item in database
const update=(id,updatedTodo={})=>{
    const promise=Todo.findByIdAndUpdate({_id:id},
        updatedTodo,
        {new:true}).exec();
        return promise;
}

//Business logic for removing todo item from database
const remove=(id)=>{
    const promise=Todo.findByIdAndRemove({_id:id}).exec();
    return promise;
}

export default {
    search:search,
    save:save,
    get:get,
    update:update,
    remove:remove
}