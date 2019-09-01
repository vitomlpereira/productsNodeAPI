
const express = require('express');
const bodyParser = require('body-parser');
const server = express();

const productsRoute = require('./routes/productsRoute');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/products', productsRoute);

server.get('/', (req , res) => {
    return res.send('hi my frinds');    
});

server.listen('3000', ()=>{
    console.log('Server is working and listening on port 3000');    
})

