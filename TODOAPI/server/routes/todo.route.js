import express from 'express';
import todoController from './../controllers/todo.controller'
const router = express.Router();

/* GET users listing. */
// Below route is written to get and post the todo in and from database. From here the request will get redirected to controller.
router.route('/todos')
.get(todoController.index)
.post(todoController.save);


//Below route is written to get and put and remove the todo in and from database for a specific todo ID.From here the request will get redirected to controller.
router.route('/todos/:todoId')
.get(todoController.get)
.put(todoController.update)
.delete(todoController.remove)


//export router so that we can import it in other files.
export default router;
