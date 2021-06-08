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
