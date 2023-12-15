import mongoose from 'mongoose';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import personaRouter from "./endpoints/persona.router";
import clienteRouter from "./endpoints/cliente.router";
import libroRouter from "./endpoints/libro.router";
import autorRouter from "./endpoints/autor.router";
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

app.use('/api/persona', personaRouter);
app.use('/api/libro', libroRouter);
app.use('/api/cliente', clienteRouter);
app.use('/api/autor', autorRouter);



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