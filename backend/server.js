let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyparser = require('body-parser');
let dbconfig = require('./database/db');

mongoose.Promise =  global.Promise;
mongoose.connect(dbconfig.db, {
    useNewUrlParser:true
}).then(()=>{
        console.log("Database successfully connected!");
    },
    error=>{
        console.log("Database could not connected: "+error);
    }
);

const userRoute = require('../backend/routes/user.route');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:false
}));

app.use(cors());
app.use(express.static(path.join(__dirname,'dist/curd-app')));
app.use('/', express.static(path.join(__dirname,'dist/curd-app')));
app.use('/api',userRoute);

//Create port
const port = process.env.PORT||4000;
const server = app.listen(port,()=>{
    console.log("Connected to port"+port);
});

app.use((req, res, next)=>{
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message); // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});