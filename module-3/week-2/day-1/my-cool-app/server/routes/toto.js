const express = require("express");

const router = new express.Router();
const Toto = require("../models/Toto");

router.get("/api/totos", (req, res, next) => {
  //   console.log("I am here");
  //   res.send("Welcome my friend");

  Toto.find()
    .then((documents) => {
      res.status(200).json(documents);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/api/totos/:id", (req, res, next) => {
  //   console.log("I am here");
  //   res.send("Welcome my friend");
  const id = req.params.id;

  Toto.findById(id)
    .then((document) => {
      res.status(200).json(document);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.post("/api/totos", (req, res, next) => {
  //   console.log(req.body);
  Toto.create(req.body)
    .then((createdDocument) => {
      res.status(201).json(createdDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.patch("/api/totos/:id", (req, res, next) => {
  console.log(req.params);
  console.log(req.body);

  if (req.body.name === "" || req.body.brand === "") {
    res.status(400).json({ message: "Name or Brand should not be empty" });
  } else {
    Toto.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((updatedDocument) => {
        res.status(200).json(updatedDocument);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
});

module.exports = router;
