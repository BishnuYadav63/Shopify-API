let request= require('request');
const express = require('express');
const app = express();

let apikey = 'd7edf6ef25abee0be0cd1d7bd72044c6';
let pass = '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';
let endpoint = 'orders';

let crorders = {
    'method': 'POST',
    'url': `https://${apikey}:${pass}@redberry0304.myshopify.com/admin/api/2022-10/${endpoint}.json`,
    'headers': {
    'Content-type': 'application/json'
    },

    body: JSON.stringify({
        "order": {
        "line_items":[
        {
        "title": "test product order",
        "price": 200,
        "quantity": 5,
        "tax_lines": [
        {
        "price": 10,
        "rate": 1,
        "title": "tax demo",
        }]
        }
    ],
    "email": "testproduct@gmail.com",
    "tags": "good, best",
}
    })

     };

     app.get("/crorders", (req, resp)=>{
        request (crorders, function (error, response) {
        if (error) throw new Error(error);
        resp.send(response.body);
        console.log(response.body);
        });
        });

        app.listen(3400);