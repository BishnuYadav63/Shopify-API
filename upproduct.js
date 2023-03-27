let request= require('request');
const express = require('express');
const app = express();

let apikey = 'd7edf6ef25abee0be0cd1d7bd72044c6';
let pass = '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';
let endpoint = 'products';
let productid ='8226226569489';

let upproduct = {
    'method': 'PUT',
    'url': `https://${apikey}:${pass}@redberry0304.myshopify.com/admin/api/2022-10/${endpoint}/${productid}.json`,
    'headers': {
    'Content-type': 'application/json'
    },

    
    body: JSON.stringify({
        "product":{
            "id ":'8226226569489', 
        "title": "Test New Product update product",
        "tags" : "tags1, tags2",
        }
        })
    };

    app.get("/upproduct", (req, resp)=>{
        request (upproduct, function (error, response) {
        if (error) throw new Error(error);
        resp.send(response.body);
        console.log(response.body);
        });
        });
        app.listen(3400);