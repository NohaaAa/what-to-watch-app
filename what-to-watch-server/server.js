const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require('morgan');
const mongoose = require("mongoose");
// const uploadImage = require("./routes/image");
const users = require("./src/routes/user");
const auth = require("./src/routes/auth");
const movie = require("./src/routes/movies");
const series = require("./src/routes/series");
const lists = require("./src/routes/lists");

const bodyParser = require("body-parser");

dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.debug("DBConnection success!"))
    .catch((err) => {
        console.log(err);
    });
app.use(
    morgan(function (tokens, req, res) {
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms'
        ].join(' ')
    })
);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.json());

app.use(cors());

app.use("/api/auth/", auth);
app.use("/api/movies/", movie);
app.use("/api/series/", series);
app.use("/api/lists/", lists);
// app.use('/uploads',express.static(__dirname + '/uploads'));
// app.use("/api/images/", uploadImage);
app.use("/api/users/", users);

app.listen(process.env.PORT || 5000, () => {
    console.debug('App listening on :5000');
});
