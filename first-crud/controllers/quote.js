import mongoose from 'mongoose';
import Quote from '../models/quote.js';

export function createQuote(req, res) {
  const quote = new Quote({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    quote: req.body.quote,
  });

  return quote
    .save()
    .then((newQuote) => {
      return res.status(201).json({
        success: true,
        message: 'New cause created successfully',
        quote: newQuote,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });
}

export function getAllQuotes(req, res) {
  console.log("getAllQuotes")
  Quote.find()
    // .select("name")
    .then((allQuotes) => {
      console.log(allQuotes)
      return res.status(200).json({
        success: true,
        message: "Get list success",
        Quote: allQuotes
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
}

export function updateQuote(req, res) {
  console.log("updateQuote")

  // const id = req.params._id;
  const name = req.params.name
  const updateObject = req.body;

  console.log(req.params.name);
  console.log(req.body);
  console.log(typeof req.body);

  Quote.findOneAndUpdate({ name: name }, updateObject)
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Quote is updated',
        updateQuote: updateObject,
      });
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.'
      });
    });
}
export function deleteQuote(req, res) {
  console.log("deleteQuote")
  const id = req.params._id;
  console.log(req.params._id)

  Quote.findByIdAndRemove(id)
    .exec()
    .then((result) => {
      console.log(result)//{ _id: 60bda5023e48c0127ee23b3e, name: 'Tr13', quote: 'trrrr2' }
      if (result == null) {
        // return res.status(200).json({
        //   message: 'Can not find this quote',
        // })

        res.status(200).json({
          success: false,
          message: 'Can not find this quote',
        })
      } else {
        res.status(200).json({
          success: true,
          message: 'Quote was deleted',
        })
      }

    })
    .catch((error) => res.status(500).json({
      success: false,
      message: error.message,
    }));
}