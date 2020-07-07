const express  = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const config = require('./config/config');
const bodyParser = require('body-parser');

const app = express();


if(config.envoirnment === 'development'){
    app.use(morgan('tiny'));
}


const profile  = require('../src/routes/profile');



app.use(cors());
app.use(bodyParser.json());

// Front-End Client 
app.use('/', express.static(path.join(__dirname, '../../client/dist')));
app.use('/api/v1/profile', profile);
app.get('/.*/', function(req, res){
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

const PORT  = process.env.PORT || 3000;

try{
    app.listen(PORT, ()=> {
        console.log(`Server listening on port ${PORT}`)
    });
} catch(err){
    console.log(`An error has occurred with the server ${err}`);
}

