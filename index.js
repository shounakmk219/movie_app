let express = require('express');
let apiRoutes = require('./api-routes');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let port = process.env.port || 8000;
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
    router = express.Router();
  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);
app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/moviesdb', {useNewUrlParser: true});
var db= mongoose.connection;

if(!db)
console.log("Error connecting DB!");
else console.log("DB Connection established");

app.get('/',(req,res)=>{
    res.send(JSON.stringify({message : 'Hello world from Express'}))
})

app.use('/api',apiRoutes);

app.listen(port,()=>{console.log('Server Started!')})