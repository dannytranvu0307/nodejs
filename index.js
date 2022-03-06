const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express()
const port = 3000
const {create} = require("express-handlebars")

    //--------------------------------------------// app.use(morgan('combined'));
  app.use(express.static(path.join(__dirname,'src/public')));


   const hbs = create({ extname: '.hbs'})
   app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
    app.set("views", path.join(__dirname, 'src/resources/views'));
    
    app.get('/', (req, res) => {
        res.render('home');
    });
    app.get('/new', (req, res) => {
        res.render('new');
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})