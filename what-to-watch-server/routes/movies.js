const router = require("express").Router();
const Movie = require("../models/Movie");
const {verifyTokenAndAuthorization} = require("../verifyToken");

//CREATE new movie (one or list)
router.post('/', verifyTokenAndAuthorization, async(req, res)=> {
    // const newMovie = new Movie(req.body);
    try {
        const movies = await Movie.insertMany(req.body);
        res.status(201).json(movies);
    }catch(err) {
        res.status(500).json(err);
    }
})
//DELETE delete a movie

//GET get movie by id

//GET ALL get all movies

module.exports = router;
