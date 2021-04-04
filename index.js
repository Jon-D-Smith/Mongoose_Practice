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


//Inserted a movie. Saved it in the Mongo Shell
// const avengers = new Movie({ title: 'The Avengers', year: 2012, score: 9.7, rating: 'PG-13' });

/////////////// Inserted multiple Movies for the DB /////////////////////////////////////////

// Movie.insertMany([
//     { title: 'Captaan America: The First Avenger', year: 2011, score: 7.9, rating: 'PG-13' },
//     { title: 'Captain Marvel', year: 2019, score: 6.0, rating: 'PG-13' },
//     { title: 'Iron Man', year: 2008, score: 8.8, rating: 'PG-13' },
//     { title: 'Iron Man 2', year: 2010, score: 6.5, rating: 'PG-13' },
//     { title: 'The Incredible Hulk', year: 2008, score: 6.0, rating: 'PG-13' },
//     { title: 'Thor', year: 2011, score: 9.2, rating: 'PG-13' },
//     { title: 'Thor the Dark World', year: 2013, score: 8.8, rating: 'PG-13' },
//     { title: 'Iron Man 3', year: 2013, score: 7.6, rating: 'PG-13' },
//     { title: 'Captain America: The Winter Soldier', year: 2014, score: 7.6, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log('It worked!!');
//         console.log(data);
//     })

//////////////////////////////////////////////////////////////////////////////////////////////