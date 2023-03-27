let request= require('request');
const express = require('express');
const app = express();

let apikey = 'd7edf6ef25abee0be0cd1d7bd72044c6';
let pass = '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';
let endpoint = 'orders';
let orderid = '5268534296849';

let cancelorder = {
    'method': 'POSt',
    'url': `https://${apikey}:${pass}@redberry0304.myshopify.com/admin/api/2022-10/${endpoint}/${orderid}/cancel.json`,
    'headers': {
    'Content-type': 'application/json'
    }

   };

     app.get("/cancelorder", (req, resp)=>{
        request (cancelorder, function (error, response) {
        if (error) throw new Error(error);
        resp.send(response.body);
        console.log(response.body);
        });
        });

        app.listen(3400); 