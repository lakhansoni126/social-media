import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'

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

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(req.result);
});



app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        } else {
            resp.send({ result: "no user found" })
        }
    } else { resp.send({ result: "no user found" }) }

});