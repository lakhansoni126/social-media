import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import postRoute from './Routes/postRouted.js'
import chatRoute from './Routes/chatRoute.js'
import messageRoute from './Routes/messageRoute.js'
//

const app = express();

app.use(bodyParser.json({ limit: '30mb', entended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', entended: true }));


dotenv.config()
mongoose
    .connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => app.listen(process.env.port, () => console.log("listening")))

    .catch((error)=>console.log(error))
 

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', postRoute)
app.use('/chat', chatRoute)
app.use('/message', messageRoute)