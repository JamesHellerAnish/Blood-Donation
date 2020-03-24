const route = require('express').Router()
route.post('/',(req,res)=>{

    Col1 = req.body.col1    // variables numbered according to order of input in req.body
    Col2 = req.body.col2
    Col3 = req.body.col3
    Col4 = req.body.col4

    let spawn = require("child_process").spawn; 
    
    const process = spawn('python3',[__dirname+'/model1.py',Col1,Col2,Col3,Col4]); 

    // data contains the standard output of the python script

    process.stdout.on('data', function(data) { 
        res.send(data.toString()); // the data is send in the form of string
    } ) 
})

module.exports =  route