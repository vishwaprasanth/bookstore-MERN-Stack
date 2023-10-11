import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

// Middleware for parsing request body
// Option 1: Allow All Origin with Default of cors(*)

app.use(cors())

app.use(express)

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('welcome to circus')
});

app.get('/books', booksRoute);


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connect to database');
        app.listen(PORT, () => {
            console.log(`App is listerning to port : ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })