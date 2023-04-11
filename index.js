import express from "express";
import { MongoClient } from "mongodb";
import mentor from "./routes/mentor.route.js";
import student from "./routes/student.route.js";
import cors from 'cors';
import * as dotenv from 'dotenv' 
dotenv.config()

const app = express();

const PORT = process.env.PORT;
       


const MONGO_URL = process.env.MONGO_URL
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("MongDB connected");

// Inbuilt middleware

app.use(express.json())
app.use(cors())
app.use("/allStudents", student)
app.use("/mentors", mentor)


app.listen(PORT, () => console.log(`The server Connected in: ${PORT}`));

export {client}

