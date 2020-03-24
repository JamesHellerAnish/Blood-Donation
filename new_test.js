let spawn = require("child_process").spawn; 
    // console.log('yes')
    const process = spawn('python',[__dirname+'/model1.py', 
                            Col1, 
                            Col2,
                            Col3,
                            Col4,] ); 
    // console.log('yes')
    // console.log('Waiting for python script...')
    process.stdout.on('data', function(data) { 
        console.log(data.toString())
        res.send(data.toString()); 
    } )