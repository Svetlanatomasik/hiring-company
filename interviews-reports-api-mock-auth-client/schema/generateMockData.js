/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

const fs = require('fs');
const jsf = require('json-schema-faker');
const mockDataSchema = require('./mockDataSchema');

const fakeApiData = jsf(mockDataSchema);

fs.writeFile("db/db.json", JSON.stringify(fakeApiData), function (err) {
  if (err) {
    return console.log(err)
  }

  console.log("Mock data generated.")
});
