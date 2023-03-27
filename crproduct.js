let request= require('request');
const express = require('express');
const app = express();

let apikey = 'd7edf6ef25abee0be0cd1d7bd72044c6';
let pass = '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';
let endpoint = 'products';

let crproduct = {
    'method': 'POST',
    'url': `https://${apikey}:${pass}@redberry0304.myshopify.com/admin/api/2022-10/${endpoint}.json`,
    'headers': {
    'Content-type': 'application/json'
    },

    body: JSON.stringify({
        "product":{
        "title": "Test New Product",
        "body_html": "<p>Hello Test Products</p>",
        "vendor": "Test",
        "product_type": "Test Home Decor",

        "variants":[
            {
            "price": "6395.00",
            "sku": "HY00008881",
            "inventory_quantity": 5,
            }
        ]
         }
        })
    };

    app.get("/newproduct", (req, resp)=>{
        request (crproduct, function (error, response) {
        if (error) throw new Error(error);
        resp.send(response.body);
        console.log(response.body);
        });
        });
        app.listen(3400);