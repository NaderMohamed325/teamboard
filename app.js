const express = require('express');
const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'pug');
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.status(200).render('home');
});

app.use('/users', userRouter);



module.exports = app;