const router = require("express").Router();
const Movie = require("../models/Movie");
const {verifyToken} = require("../verifyToken");

//CREATE new movie (one or list)
router.post('/', async(req, res)=> {
    try {
        const movies = await Movie.insertMany(req.body);
        res.status(201).json(movies);
    }catch(err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
   try {
       const updateMovie = await Movie.findByIdAndUpdate(
           req.params.id,
           {$set: req.body},
           {new: true});
       res.status(200).json(updateMovie);
   }catch (err) {
       res.status(500).json(err);
   }
});

//DELETE delete a movie
router.put("/:id", async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json("The move is successfully deleted!");
    }catch (err) {
        res.status(500).json(err);
    }
});

//GET get movie by id
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    }catch (err) {
        res.status(500).json(err);
    }
});

//GET get all movies
router.get('/', verifyToken, async(req, res)=> {
    try {
        const movies = await Movie.find();
        res.status(201).json(movies);
    }catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
