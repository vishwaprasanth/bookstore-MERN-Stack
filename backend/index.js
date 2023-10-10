import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('welcome to circus')
});



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