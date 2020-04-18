const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers.js')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); //middlleware para darle inicio al proyecto

//EXPRESS hbs engine
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'vLadimir lOpEz',
        anio: new Date().getFullYear()
    }); //renderiza el archivo home.hbs

})

app.get('/about', (req, res) => {

    res.render('about.hbs'); //renderiza el archivo home.hbs

})



app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});