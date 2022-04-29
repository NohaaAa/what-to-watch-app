const mongoose = require("mongoose");

const UserListSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true, unique: true},
        listType: {type: String, required: true},
        itemsIds: [{type: String, required: true}]
    }, {timestamps: true}
)

module.exports = mongoose.model("userLists", UserListSchema);
