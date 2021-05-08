const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const { validaJWT } = require('./middlewares/validar-jwt');
const { redireccionaHome } = require('./controladores/home');
const { redireccionaProd } = require('./controladores/productos');
const { redireccionaCatego } = require('./controladores/categorias');

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');

//para reutilizar codigo html
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use( express.static('public') );

app.get('/',(req,res) =>{
  res.render('login');
})

app.get('/home', [
  validaJWT
],redireccionaHome);

app.get('/productos', [
  validaJWT
],redireccionaProd);


app.get('/categorias', [
  validaJWT
],redireccionaCatego);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})