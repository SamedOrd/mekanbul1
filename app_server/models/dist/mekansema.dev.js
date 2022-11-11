"use strict";

var mongoose = require("mongoose");

var saatSema = new mongoose.Schema({
  gunler: {
    type: String,
    required: true
  },
  acilis: String,
  kapanis: String,
  kapali: {
    type: Boolean
  }
});
var yorumSema = new mongoose.Schema({
  yorumYapan: {
    type: String,
    required: true
  },
  puan: {
    trpe: Number,
    "default": 0,
    min: 0,
    max: 5
  },
  yorumMetni: {
    type: String,
    required: true
  },
  tarih: {
    type: Date,
    "default": Date.now
  }
});
var mekanSema = new mongoose.Schema({
  ad: {
    trpe: Number,
    required: true
  },
  adres: String,
  puan: {
    trpe: Number,
    "default": 0,
    min: 0,
    max: 5
  },
  imkanlar: [String],
  koordinat: {
    type: [Number],
    index: '2dsphere'
  },
  saatler: [saatSema],
  yorumlar: [yorumSema]
});
mongoose.model("mekan", mekanSema, "mekanlar");