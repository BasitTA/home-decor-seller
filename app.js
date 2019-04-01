const express = require('express'),
    app=express(),
    port=8080;

app.set("view engine", "ejs");



//ROUTING
app.get('/', function(req, res){
    res.render('index');
});

//sementara doang
app.get('/byRoom',function(req,res){
    res.render('byRoom');
});

app.listen(port, function(){
    console.log('Working now!!');
});