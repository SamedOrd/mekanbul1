"use strict";

var mongoose = require('mongoose');

var Mekan = mongoose.model('mekan');

var cevapOlustur = function cevapOlustur(res, status, content) {
  res.status(status).json(content);
};

var mekanlariListele = function mekanlariListele(req, res) {
  cevapOlustur(res, 200, {
    "durum": "başarılı"
  });
};

var mekanGetir = function mekanGetir(req, res) {
  if (req.params && req.params.mekanid) {
    Mekan.findById(req.params.mekanid).exec(function (hata, mekan) {
      if (!mekan) {
        cevapOlustur(res, 404, {
          "hata": "Böyle bir mekan yok!"
        });
      } else if (hata) {
        cevapOlustur(res, 404, {
          "hata": hata
        });
      } else {
        cevapOlustur(res, 200, mekan);
      }
    });
  } else {
    cevapOlustur(res, 404, {
      "hata": "istekte mekanid yok!"
    });
  }
};

var mekanGuncelle = function mekanGuncelle(req, res) {
  cevapOlustur(res, 200, {
    "durum": "başarılı"
  });
};

var mekanEkle = function mekanEkle(req, res) {
  cevapOlustur(res, 200, {
    "durum": "başarılı"
  });
};

var mekanSil = function mekanSil(req, res) {
  cevapOlustur(res, 200, {
    "durum": "başarılı"
  });
};

module.exports = {
  mekanEkle: mekanEkle,
  mekanGetir: mekanGetir,
  mekanSil: mekanSil,
  mekanGuncelle: mekanGuncelle,
  mekanlariListele: mekanlariListele
};