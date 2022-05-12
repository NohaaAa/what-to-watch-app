const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
    {
        listName: {type: String, required: true, unique: true},
        items: [{
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

module.exports = mongoose.model("lists", ListSchema);
