const express = require('express');
const { client } = require('../');

const router = express.Router();

router.get('/', (req, res, next) => {
  client
    .request(
      `{
    allBrands {
      id
      name
      slug
      description
    }
  }`
    )
    .then(({ allBrands }) => res.json(allBrands))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  client
    .request(
      `query Brand($id: ID!) {
        Brand(id: $id) {
          id
          name
          slug
          description
        }
      }`,
      {
        id
      }
    )
    .then(({ Brand }) => res.json(Brand))
    .catch(next);
});

module.exports = router;
