var express = require("express");
var router = express.Router();

// import models
var Color = require("../models/color_model.js");
var Card = require("../models/cards_data.js");

router.get("/card/colors", function (req, res) {
  Color.find(function (err, colors) {
    if (err) res.send(err);
    res.json(colors);
  });
});

router.post("/card/colors", function (req, res) {
  var color = new Color({
    name: req.body.name,
    code: req.body.code,
    qualities: req.body.qualities,
  });
  color.save(function (err, color) {
    if (err) {
      res.send(err);
    }
    res.json(color);
  });
});

router.get("/card/fetch", function (req, res) {
  Card.find(function (err, cards) {
    if (err) res.send(err);
    res.json(cards);
  });
});

router.post("/card/save", function (req, res) {
  var card = new Card({
    color_code: req.body.color_code,
    title: req.body.title,
    description: req.body.description,
  });
  card.save(function (err, card) {
    if (err) {
      res.send(err);
    }
    res.json(card);
  });
});

// validate title
router.post("/validatetitle", function (req, res) {
  var title = req.body.title;
  Card.findOne({ title: title }, function (err, card) {
    if (err) res.send(err);
    if (card) {
      res.send("true");
    } else {
      res.send("false");
    }
  });
});

router.post("/filter", function (req, res) {
  Card.find(
    {
      $or: [
        { title: { $regex: req.body.search, $options: "i" } },
        { description: { $regex: req.body.search, $options: "i" } },
      ],
    },
    function (err, cards) {
      if (err) res.send(err);
      if (cards) {
        res.json(cards);
      }
    }
  );
});

module.exports = router;
