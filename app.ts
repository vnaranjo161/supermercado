import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import UserRoutes from './routes/UserRoutes'

dotenv.config();
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json())

app.use('/user', UserRoutes)

const PORT = process.env.PORT || 10101;

app.listen(PORT, ()=>{
    console.log('Servidor ejecutandose en el puesrto: ', PORT);
}).on('error', (error)=>{
    throw new Error(error.message);
})

