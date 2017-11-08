const express = require('express');
const { client } = require('../');

const router = express.Router();

router.get('/', (req, res, next) => {
  client
    .request(
      `{
    allCategories {
      id
      name
      slug
      description
    }
  }`
    )
    .then(({ allCategories }) => res.json(allCategories))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  client
    .request(
      `query Category($id: ID!) {
        Category(id: $id) {
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
    .then(({ Category }) => res.json(Category))
    .catch(next);
});

module.exports = router;
