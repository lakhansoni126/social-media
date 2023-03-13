import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { connect } from 'mongoose';

const app = express();
app.use(bodyParser.json({limit: '30mb', entended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', entended: true}));

mongoose.connect("mongodb+srv://lakhan:567894321ls@cluster0.hcx2kqb.mongodb.net/SocialMediaApp?retryWrites=true&w=majority").
then(()=>app.listen(7000,()=>console.log("listening")));