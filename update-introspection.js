require('dotenv').config();
const fetch = require('isomorphic-unfetch');
const fs = require('fs');

fetch(`${process.env.GRAPHQL_ENDPOINT}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then(result => result.json())
  .then((result) => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types // eslint-disable-line
      .filter(type => type.possibleTypes !== null);
    result.data.__schema.types = filteredData; // eslint-disable-line
    fs.writeFile('./introspection.json', JSON.stringify(result.data), (err) => {
      if (err) console.error('Error writing fragmentTypes file', err); // eslint-disable-line
      console.log('Fragment types successfully extracted!'); // eslint-disable-line
    });
  });
