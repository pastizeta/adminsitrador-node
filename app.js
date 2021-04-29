const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');

//para reutilizar codigo html
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home',{
                    nombre: 'Alejandro Muñoz',
                    titulo: 'Curso Node'
                  });
});

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Alejandro Muñoz',
    titulo: 'Curso Node'
  });
});


app.get('/elements', (req, res) => {
    
    res.render('elements',{
      nombre: 'Alejandro Muñoz',
      titulo: 'Curso Node'
    });

});




/*
app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html');
  });


  app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
    });*/

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
  });
 
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })