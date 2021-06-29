import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import routes from './routes';
import model from './models';
import cors from 'cors';
// import indexRouter from './routes/index';
// import usersRouter from './routes/users';



const app = express();



//establishing connection with mongoDB Atlas
mongoose.connect('mongodb+srv://Amisha30:Ami%4012345@todoappcluster.4xvlv.mongodb.net/databaseTodo?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()) // Use this after the variable declaration

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

routes(app)

export default app;
