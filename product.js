let request= require('request');
let apikey = 'd7edf6ef25abee0be0cd1d7bd72044c6';
let pass = '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';
let endpoint = 'products';

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

let options = {
'method': 'GET',
'url': `https://${apikey}:${pass}@redberry0304.myshopify.com/admin/api/2022-10/${endpoint}.json`,
'headers': {
'Content-type': 'appication/json'
}
};

app.get("/getdata", (req, resp)=>{
    request (options, function (error, response) {
    if (error) throw new Error(error);
    resp.send(response.body);
    console.log(response.body);
    });
    });

    app.listen(3400);
