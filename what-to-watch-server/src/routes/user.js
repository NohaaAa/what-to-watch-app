const router = require("express").Router();
const User = require("../models/User");
const UserLists = require("../models/User\'sLists");
const CryptoJS = require("crypto-js");
const {verifyToken} = require("../verifyToken");
const {use} = require("express/lib/router");

//UPDATE
router.put("/update", verifyToken, async (req, res) => {
    if (req.body.id && req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY
        ).toString();
        try {
            const updateUser = await User.findByIdAndUpdate(
                req.body.id,
                {$set: req.body}, {new: true});
            res.status(200).json(updateUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can update only your account");
    }
});

//TODO: get user's bookmarked items list
//ADD Bookmarked item to user's bookmark list
//body = {itemId:string, save: true}
router.post("/bookmark", verifyToken, async (req, res) => {
    const {id} = req.user;
    const {itemId} = req.body;
    const userBookmarks = await UserLists.findOne({userId: id, listType: "BOOKMARK_LIST"});
    if(userBookmarks) {
        const listOfItems =  new Set(userBookmarks.itemsIds);
        if(req.body.save) {
            listOfItems.add(itemId);
        } else {
            listOfItems.delete(itemId);
        }
       try {
           const updatedList = await userBookmarks.updateOne({
               itemsIds: Array.from(listOfItems)
           });
           res.status(200).json({result: true});
       }catch(err) {
           res.status(500).json(err);
       }
    } else {
      const newBookmarksList = new UserLists({
          userId: id,
          listType: "BOOKMARK_LIST",
          itemsIds: [itemId]
      });
      try {
          const bookmarks = await newBookmarksList.save();
          res.status(201).json(bookmarks);
      } catch(err) {
          res.status(500).json(err);
      }
    }
})

//GET USER Bookmark List
router.get("/bookmark", verifyToken, async(req, res) => {
    const {id} = req.user;
    try {
        const userBookmarks = await UserLists.find({userId: id, listType: "BOOKMARK_LIST"});
        if(userBookmarks) {
            res.status(200).json(userBookmarks);
        } else {
            res.status(403).json([]);
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

//GET
//DELETE

//GET
//GET ALL
//GET USER STATS

module.exports = router;
