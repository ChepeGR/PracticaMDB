import mongoose from 'mongoose';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import personaRouter from "./endpoints/person.router";
import clientRouter from "./endpoints/client.router";
import bookRouter from "./endpoints/book.router";
import employeeRouter from "./endpoints/employee.router"
import authorRouter from "./endpoints/author.router";
import magazineRouter from "./endpoints/magazine.router";
import promotionRouter from "./endpoints/promotion.router";
import libraryRouter from "./endpoints/library.router"
import * as dotenv from "dotenv";


dotenv.config()
const app: Application = express();
const PORT: number = 3000;
let CONNSTRING = '';
if (process.env.CONN_STRING) {
    CONNSTRING = process.env.CONN_STRING
} else {
  throw new Error("Missing CONN_STRING: environment variable is not set")
}

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express server running');
});

app.use('/api/person', personaRouter);
app.use('/api/book', bookRouter);
app.use('/api/client', clientRouter);  
app.use('/api/author', authorRouter);
app.use('/api/employee', employeeRouter);
app.use('/api/magazine', magazineRouter);
app.use('/api/promotion', promotionRouter);
app.use('/api/library', libraryRouter);




const start = async () => {
    try {
        await mongoose.connect(CONNSTRING);
        console.log('Connected to MongoDB');

        app.listen(PORT, () => console.log(`Server started on ${PORT}`));
    } catch (error: any) {
        console.error('Error starting the server:', error);

        if (error.name === 'MongoError') {
            console.error('MongoDB Connection Error:', error.message);
        }

        process.exit(1);
    }
};


start();