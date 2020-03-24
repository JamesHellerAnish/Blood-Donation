const express = require('express')
const srv = express();
// const todoRoute = require('./routes/todos')

const csv = require('csv-parser')
const fs = require('fs')

const addDataRoute = require('./routes/addData')
// const mlModel = require('./routes/mlModel')

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.get('/hello', function (req, res) {
    res.send("Hello")
})

srv.use('/addData',addDataRoute)
// srv.use('/mlModel',mlModel)
srv.use('/', express.static(__dirname + '/public'))
srv.use('/donate',express.static(__dirname+'/public/bulu'))
// srv.use('/todos', todoRoute)

srv.listen(4567,()=>{
    console.log('server started')
});