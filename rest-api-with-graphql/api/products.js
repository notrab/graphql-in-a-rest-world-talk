const express = require('express');
const { client } = require('../');

const router = express.Router();

router.get('/', (req, res, next) => {
  client
    .request(
      `{
    allProducts {
      id
      name
      slug
      description
      sku
    }
  }`
    )
    .then(({ allProducts }) => res.json(allProducts))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  client
    .request(
      `query Product($id: ID!) {
        Product(id: $id) {
          id
          name
          slug
          description
          sku
        }
      }`,
      {
        id
      }
    )
    .then(({ Product }) => res.json(Product))
    .catch(next);
});

module.exports = router;
