const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open")
    })
    .catch(err => {
        console.log(`Oh no, error: ${err}`)
    })


//Representational of the type of data I want to send 
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

//Mongoose will create a collection by default. Add in the desired model name and the schema
const Movie = mongoose.model('Movie', movieSchema);

const avengers = new Movie({ title: 'The Avengers', year: 2012, score: 9.7, rating: 'PG-13' });