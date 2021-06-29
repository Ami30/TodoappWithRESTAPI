import todoRouter from './todo.route'


/* GET home page. */

export default (app)=>{
  app.use('/',todoRouter)
}
