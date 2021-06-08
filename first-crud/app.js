import express from 'express';
import mongoose from 'mongoose';
import quoteRoutes from "./routes/quote.js";
import userRoutes from "./routes/user.js";
import dotenv from 'dotenv';

// play with .env 
dotenv.config();
const app = express();
const port = process.env.PORT;
const url = process.env.DB_URL

app.use(express.urlencoded({
    extended: true
}));
app.use('/api/', [quoteRoutes, userRoutes]);
app.listen(port, function () {
    console.log('listening on 3000')
})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.log("Error connecting to database: " + error.message);
    });


//express simplifies the server creation process that is already available in Node
// const express = require('express');
// import bodyParser from 'body-parser';
// import route from './src/routes';
// require('dotenv').config();

// const app = express();

// import connectToDb from "./src/config/db";

// connectToDb().then(() => console.log('Connected db')).catch(e => {
//     console.error(e);
//     process.exit();
// });
// const PORT = process.env.PORT || 3000;
// // Make sure: place .use(...) before your CRUD handlers!
// //The urlencoded method within body-parser tells body-parser to extract [trích xuất] data from the <form> element 
// //and add them to the body property in the request object.
// // parser data from request body
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// app.use(route);

// // catch err
// app.use((e, req, res, next) => {
//     return res.status(400).json({
//         isSuccess: false,
//         message: e.message || 'Have error', // Get message from new Error()
//         error: e.stack || e
//     });
// });

// // create a server that browsers can connect to
// app.listen(PORT, function () {
//     console.log(`Server is listening on port ${PORT}`)
// })
