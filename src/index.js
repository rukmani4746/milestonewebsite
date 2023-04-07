import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/userRoutes.js'

const app = express();
app.use(express.json());

const CONNECTION_URL = "mongodb+srv://rukmanisdb:vjycEqeXgt3fpaS7@cluster0.fw901z3.mongodb.net/merchifyassignment"
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("mongodb is connected")
    })
    .catch((err) => console.log(err.message));
    
app.use('/', routes);
app.listen(PORT, () => console.log(`server is running on port no : ${PORT}`))


