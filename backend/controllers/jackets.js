const express = require("express");
const jacketsRouter = express.Router();
const axios = require("axios");
jacketsRouter.use(express.json());

let jackets = [];

axios
  .get("http://bad-api-assignment.reaktor.com/products/jackets")
  .then((res) => {
    jackets = res.data;
  });

jacketsRouter.get("/", (req, res) => {
  res.json(jackets);
});

jacketsRouter.get("/:id", (req, res) => {
  const id = req.params.id;

  jacket = jackets.find((jacket) => jacket.id === id);

  if (jacket) {
    res.json(jacket);
  } else {
    res.status(404).end();
  }
});

function getJackets(manufacturer) {
  let jackets = [];

  axios
    .get(`http://bad-api-assignment.reaktor.com/availability/${manufacturer}`)
    .then((response) => {
      jacket = response.data;
    });
  return jackets;
}

jacketsRouter.get("/availability/:id", (req, res) => {
  const id = req.params.id;
  jacket = jackets.find((jacket) => jacket.id === id);

  let manufacturer = jacket.manufacturer;

  axios
    .get(`http://bad-api-assignment.reaktor.com/availability/${manufacturer}`)
    .then((response) => {
      let availabilityInfo = response.data.response;

      jacket = availabilityInfo.find(
        (jacket) => jacket.id === id.toUpperCase()
      );

      let availability = false;
      let re = new RegExp("<INSTOCKVALUE>(.*)</INSTOCKVALUE>");
      let result = jacket.DATAPAYLOAD.match(re);

      if (result[1] === "INSTOCK") {
        availability = true;
      }

      if (availability) {
        return res.send(200, { result: true });
      } else if (!availability) {
        return res.send(200, { result: false });
      } else {
        res.status(404).end();
      }
    });
});

module.exports = jacketsRouter;
