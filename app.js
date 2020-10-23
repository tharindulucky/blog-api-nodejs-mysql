const express = require('express');
const bodyParser = require('body-parser');

const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const commentsRoute = require('./routes/comments');

const app = express();

app.use(bodyParser.json());

app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/comments", commentsRoute);

module.exports = app;
