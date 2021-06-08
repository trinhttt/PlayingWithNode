import express from "express";
import { createUser, getAllUser, getSingleUser, updateUser, deleteUser } from '../controllers/user.js';
const router = express.Router();

router.post("/user", createUser);
router.get("/users", getAllUser);
router.get("/users/:username", getSingleUser);
router.put("/users/:username", updateUser);
router.delete("/users/:_id", deleteUser);

export default router;