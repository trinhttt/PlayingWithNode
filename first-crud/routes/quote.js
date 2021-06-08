import express from "express";
import { createQuote, getAllQuotes, updateQuote, deleteQuote } from '../controllers/quote.js';
const router = express.Router();

router.post("/quote", createQuote);
router.get("/quotes", getAllQuotes);
router.put("/quotes/:name", updateQuote);
router.delete("/quotes/:_id", deleteQuote);

export default router;