const mongoose = require("mongoose");
const Movie = mongoose.Schema.Types

const CategorySchema = new mongoose.Schema(
    {
       id: {type: Number, required: true},
        categoryName: {type: String, required: true},
        listOfItems: [{
            title: {type: String, required: true},
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
        }]
    }, {timestamps: true}
)

module.exports = mongoose.model("category", CategorySchema);
