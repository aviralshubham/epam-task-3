const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const bodyparser = require('body-parser');


const connectDB = require('./server/database/connection');
const Userdb1 = require('./server/model/mod');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser

app.use(bodyparser.urlencoded({ extended : false}));
app.use(bodyparser.json());

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))



// load routers
app.use('/', require('./server/routes/router'))

//login gwt



app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});