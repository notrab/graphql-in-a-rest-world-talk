const express = require('express');
const { GraphQLClient } = require('graphql-request');
const { json } = require('body-parser');

const app = express();

const endpoint = 'https://api.graph.cool/simple/v1/graphql-in-a-rest-world';
module.exports.client = new GraphQLClient(endpoint, { headers: {} });

const { PORT = 5000 } = process.env;

app.use(json());

app.use('/products', require('./api/products'));
app.use('/brands', require('./api/brands'));
app.use('/categories', require('./api/categories'));

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Listening on PORT: ${PORT}`);
});
