import express from "express";
import { createChat, findChat, usersChats } from "../Controllers/chatconrtoller.js";

const router =express.Router();

router.post("/", createChat);
router.get ('/:userId', usersChats);
router.get('/find/:firstId/:secondId',  findChat);

export default router;