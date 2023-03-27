let request= require('request');
const express = require('express');
const app = express();

let apikey = 'd7edf6ef25abee0be0cd1d7bd72044c6';
let pass = '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';
let endpoint = 'orders';

let getorders = {
    'method': 'GET',
    'url': `https://${apikey}:${pass}@redberry0304.myshopify.com/admin/api/2022-10/${endpoint}.json`,
    'headers': {
    'Content-type': 'application/json'
    },

     };

     app.get("/getorders", (req, resp)=>{
        request (getorders, function (error, response) {
        if (error) throw new Error(error);
        resp.send(response.body);
        console.log(response.body);
        });
        });

        app.listen(3400);