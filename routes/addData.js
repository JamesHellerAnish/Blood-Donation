const route = require('express').Router()
route.post('/',(req,res)=>{
    // res.send('Hello')
    col1 = req.body.col1
    col2 = req.body.col2
    col3 = req.body.col3
    col4 = req.body.col4
    col5 = req.body.col5
    // col6 = req.body.col6
    // console.log(col1)
    // console.log(col2)
    // console.log(col3)
    // console.log(col4)
    // console.log(col5)
    // console.log(col6)
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
    path: 'genData.csv',
    header: [
        {id: 'Col1', title: 'Months Since Last Donation'},
        {id: 'Col2', title: 'Number Of Donations'},
        {id: 'Col3', title: 'Total Volume Donated (C.C.)'},
        {id: 'Col4', title: 'Months Since First Donation'},
        {id: 'Col5', title: 'Months Since First Donation'},
    ]
    });
    
    const data = [{
        Col1:col1,
        Col2:col2,
        Col3:col3,
        Col4:col4,
        Col5:col5,
    }]

    csvWriter
        .writeRecords(data)
        .then(()=> console.log('The CSV file was written successfully'));
})

module.exports =  route