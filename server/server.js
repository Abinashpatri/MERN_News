import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

const app = express();
dotenv.config();

app.use(cors());
app.use('/', Route)

const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

if(process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}

const URL = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@cluster0.ldafz.mongodb.net/?retryWrites=true&w=majority`

Connection(URL);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
DefaultData();