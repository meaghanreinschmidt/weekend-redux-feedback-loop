const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Router } = require('express');
const PORT = process.env.PORT || 5000;
const feedback = require('./routes/feedback.router.js');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/feedback', feedback);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});