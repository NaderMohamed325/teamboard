const app = require("./app")
const dotenv = require('dotenv');
const mongoose = require('mongoose')
dotenv.config({path: './config.env'});

const uri = process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASSWORD);

mongoose.connect(uri).then(() =>
{
    console.log('Connected to the database');
}).catch((err) =>
{
    console.error('Database connection error:', err);
});
const port = 3000;
app.listen(port, () =>
{
    console.log(`Example app listening at http://localhost:${port}`);
});


module.exports = app;
