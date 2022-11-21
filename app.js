import express from 'express';
import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users/users-controller.js';
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'

const app = express()

// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

// Middleware
app.use(express.json());
app.use(cors())


// Controllers
HelloController(app)
UserController(app)
TuitsController(app)

app.listen(process.env.PORT || 4000)
