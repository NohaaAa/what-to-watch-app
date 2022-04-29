const router = require("express").Router();
const List = require("../models/List");
const Movie = require("../models/Movie");
const Series = require("../models/TvSeries");
const {verifyToken} = require("../verifyToken");

//Create
router.post("/add", verifyToken,async (req, res) => {
    const listType = req.body.type;
    if(listType === 'trending') {
        const trendingMovies = await Movie.find({isTrending: true});
        const trendingTvSeries = await Series.find({isTrending: true});
        const newList = new List({
            listName:"trending",
            items: [...trendingMovies, ...trendingTvSeries]
        });
        try {
            const list = await newList.save();
            res.status(201).json(list);
        }catch(err) {
            res.status(500).json(err);
        }
    }
});

//GET
router.get("/byType", verifyToken, async (req, res) => {
    if(req.body.listType) {
        try {
            const list = await List.find({listName: req.body.listType});
            if(list) {
                res.status(200).json(list);
            } else {
                res.status(403).json("No list found with this name");
            }
        }catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(500).json("Bad Request");
    }
})
module.exports = router;
