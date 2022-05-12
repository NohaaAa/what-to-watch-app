const router = require("express").Router();
const TvSeries = require("../models/TvSeries");
const {verifyToken} = require("../verifyToken");

//CREATE new series (one or list)
router.post('/', async(req, res)=> {
    try {
        const series = await TvSeries.insertMany(req.body);
        res.status(201).json(series);
    }catch(err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updateSeries = await TvSeries.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true});
        res.status(200).json(updateSeries);
    }catch (err) {
        res.status(500).json(err);
    }
});

//DELETE delete a series
router.put("/:id", async (req, res) => {
    try {
        await TvSeries.findByIdAndDelete(req.params.id);
        res.status(200).json("The series is successfully deleted!");
    }catch (err) {
        res.status(500).json(err);
    }
});

//GET get series by id
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const series = await TvSeries.findById(req.params.id);
        res.status(200).json(series);
    }catch (err) {
        res.status(500).json(err);
    }
});

//GET get all series
router.get('/', verifyToken, async(req, res)=> {
    try {
        const series = await TvSeries.find();
        res.status(201).json(series);
    }catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
