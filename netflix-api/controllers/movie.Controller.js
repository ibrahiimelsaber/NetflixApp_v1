const express = require("express");
let router = express.Router();
let ObjectID = require("mongoose").Types.ObjectId;

let { Movie } = require("../models/movie.model");
router.get("/", (req, res) => {
  res.send('Welcome to Netflix app from Ibrahim Elsaber')
});

router.get("/api/movies/getAllMovies", (req, res) => {
  Movie.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log(` Error while retrieving all records `, JSON.stringify(err, undefined, 2));
  });
});
router.get("/api/movies/getMovieById/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.status(400).send("no movie with given id : ", req.params.id);
  Movie.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log(` Error while retrieving all records `, JSON.stringify(err, undefined, 2));
  });
});

router.post("/api/movies/addNewMovie", (req, res) => {
  let newMovie = new Movie({
    name: req.body.name,
    rating: req.body.rating,
    category: req.body.category,
    star: req.body.star,
    duration: req.body.duration,
    image: req.body.image,
  });
  newMovie.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log(` Error while creating new movie`, JSON.stringify(err, undefined, 2));
  });
});

router.put("/api/movies/updateMovieById/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.status(400).send("no movie with given id : ", req.params.id);
  let updatedMovie = {
    name: req.body.name,
    rating: req.body.rating,
    category: req.body.category,
    star: req.body.star,
    duration: req.body.duration,
    image: req.body.image,
  };
  Movie.findByIdAndUpdate(req.params.id, { $set: updatedMovie }, { new: true }, (err, docs) => {
    if (!err) res.send(docs);
    else console.log(` Error while updating a movie`, JSON.stringify(err, undefined, 2));
  });
});
router.delete("/api/movies/deleteAllMovies", (req, res) => {
  Movie.deleteMany({}, (err, docs) => {
    if (!err) res.send(docs);
    else console.log(` Error while delete a movie`, JSON.stringify(err, undefined, 2));
  });
});

router.delete("/api/movies/deleteMovieById/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.status(400).send("no movie with given id : ", req.params.id);
  Movie.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log(` Error while delete a movie`, JSON.stringify(err, undefined, 2));
  });
});

module.exports = router;
