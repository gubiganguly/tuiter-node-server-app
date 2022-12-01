import express from 'express';
import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users/users-controller.js';
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
import cors from 'cors'

const app = express()

// Connect to database
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

// Middleware
app.use(express.json());
app.use(cors())


// Controllers
HelloController(app)
UserController(app)
TuitsController(app)

app.listen(process.env.PORT || 4000)
