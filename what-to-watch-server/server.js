const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require('morgan');
// const uploadImage = require("./routes/image");
const users = require("./routes/user");
const auth = require("./routes/auth");
const movie = require("./routes/movies");
const bodyParser = require("body-parser");

dotenv.config();
morgan(':method :url :status :res[content-length] - :response-time ms');

app.use(morgan('tiny'));

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.debug("DBConnection success!"))
    .catch((err) => {
        console.log(err);
    });
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.json());

app.use("/api/auth/", auth);
app.use("/api/movies/", movie);
// app.use('/uploads',express.static(__dirname + '/uploads'));
// app.use("/api/images/", uploadImage);
app.use("/api/users/", users);

app.listen(process.env.PORT || 5000, () => {
    console.debug('App listening on :5000');
});
