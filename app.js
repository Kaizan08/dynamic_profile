const express = require('express');
const app = express();
const port = 3000;
const data = require('./data.js')
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('views', './public');
app.set('view engine', 'mustache');

//pulling 1 user and the information
// for (var i = 0; i < data["users"].length; i++){
//         console.log(data["users"][i]);
//     }
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index', {data:data["users"]});
});

// app.get('/users', function(req, res){
//     res.render('users', {data:data["users"]})
// });
app.get('/users/:id', function(req, res){
    var returnid = parseInt(req.params.id, 10);
    for (var i=0; i < data["users"].length; i++){
        if (data["users"][i]["id"] == returnid){
            var result= data["users"][i];
        }
    }
    res.render('users', {data:result})
});

app.listen(port, function(){
    console.log("Server is running on PORT", port);
});


