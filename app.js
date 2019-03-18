const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:1@127.0.0.1:5432/postgres'); //usuario,pass,direccion,puerto,db

const Projecto = sequelize.define('movies', {
  movie_title: Sequelize.STRING
})

// sequelize.query( 'SELECT * FROM movies' ).then( (dato) => console.log(dato)); //SQL query

Projecto.findOne({ where: {movie_title: "Avatar"}, 
                  attributes: ['movie_title', 'director_name', 'title_year'] })
        .then( peli => console.log(peli) );