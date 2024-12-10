const express = require('express');
const userRouter = require('./routes/userRouter');

const app = express();
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.status(200).render('home');
});

app.use('/users', userRouter);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

module.exports = app;