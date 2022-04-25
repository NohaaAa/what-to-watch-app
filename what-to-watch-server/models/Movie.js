const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        year: {type: Number, required: true},
        category: {type: String, required: true},
        rating: {type: String, required: true},
        isBookmarked: {type: Boolean, required: true},
        isTrending: {type: Boolean},
        thumbnail: {
            trending: {
                small: {type: String},
                large: {type: String}
            },
            regular: {
                small: {type: String},
                medium: {type: String},
                large: {type: String},
            }
        }
    }, {timestamps: true}
)

module.exports = mongoose.model("movie", MovieSchema);
