const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE");
    next();
});

app.post('/add', function (req, res) {
    const operandA = req.body.operandA
    const operandB = req.body.operandB
    let result = operandA + operandB
    console.log(req.body)
    res.send({
        "operandA": operandA,
        "operandB": operandB,
        "result": result
    })
});

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});