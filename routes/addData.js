const route = require('express').Router()
route.post('/',(req,res)=>{
    // res.send('Hello')
    Col1 = req.body.col1
    Col2 = req.body.col2
    Col3 = req.body.col3
    Col4 = req.body.col4
    // console.log('Inside addRoute')
    // col5 = req.body.col5
    var dataToSend;
    var spawn = require("child_process").spawn; 
    // console.log('yes')
    var process = spawn('python',['../model1.py', 
                            Col1, 
                            Col2,
                            Col3,
                            Col4,] ); 
    // console.log('yes')
    console.log('Waiting for python script...')
    process.stdout.on('data', function(data) { 
        console.log(data.toString())
        res.send(data.toString()); 
    } ) 
})

module.exports =  route