import express, { Router } from 'express';
import dotenv from 'dotenv';
import router from './routes/index';
import sequelize from './config/database';

sequelize.sync().then(()=>{console.log('db is ready ')})
const app  = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
 
app.listen(port, console.log(`Server started at:.... ${port}`));
app.use(router);

export default app;