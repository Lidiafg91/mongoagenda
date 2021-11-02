var express = require('express');
var app = express();  
//para gestionar las peticiones con fetch 
var bodyParser = require('body-parser')

var MongoClient = require('mongodb').MongoClient; 
const { response } = require('express');
var url = "mongodb://localhost:27017/"; 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
}) 

app.use(bodyParser.json()); 
 

app.use(express.static('public')); 

 
 

app.post('/procesarPost', function (req, res) { 
    // Prepare output in JSON format 
    console.log("procesarPost")     
    console.log(req.body) 
     data = { 
       nombre:req.body.nombre, 
       apellidos:req.body.apellidos , 
       telefono:req.body.telefono, 
       email:req.body.email, 
       direccion:req.body.direccion, 
       
    }; 
    console.log(data); 
    MongoClient.connect(url, function(err, db) { 
      if (err) throw err; 
      var dbo = db.db("mydb"); 
      dbo.collection("contactos").insertOne(data, function(err, res) { 
        if (err) throw err; 
        console.log("1 document inserted"); 
        db.close(); 
      }); 
      res.end(JSON.stringify(data)); 
    }); 

 }) 

 app.get('/ListaContactos', function(req, res) {
   MongoClient.connect(url, function(err, db) { 
      if (err) throw err; 
      var dbo = db.db("mydb"); 
      dbo.collection("contactos").find({}).toArray(function(err, data) { 
        if (err) throw err; 
        console.log(data);
        // para enviar cadenas de texto simple usamos res.end
        // para enviar archivos o json usamos res.send
        res.end(JSON.stringify(data));
        // res.send(data) 
        db.close(); 
      }); 
    }); 
    console.log("procesar contacto")  
   console.log("este es el console log del data") 
});


var server = app.listen(8081, function () { 
   var host = server.address().address 
   var port = server.address().port     
   console.log("Example app listening at http://%s:%s", host, port) 

}) 