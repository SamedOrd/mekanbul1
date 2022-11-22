"use strict";

var mongoose = require('mongoose');

var Mekan = mongoose.model('mekan');

var cevapOlustur = function cevapOlustur(res, status, content) {
  res.status(status).json(content);
};

var yorumEkle = function yorumEkle(req, res) {
  cevapOlustur(res, 200, {
    "durum": "başarılı"
  });
};

var yorumGetir = function yorumGetir(req, res) {
  if (req.params && req.params.mekanid && req.params.yorum.id) {
    Mekan.findById(req.params.mekanid).select("ad yorumlar").exec(function (hata, mekan) {
      var cevap, yorum;

      if (!mekan) {
        cevapOlustur(res, 404, {
          "hata": "böyle bir mekan yok!"
        });
        return;
      } else if (hata) {
        cevapOlustur(res, 400, hata);
        return;
      }

      if (mekan.yorumlar && mekan.yorumlar.lenght > 0) {
        yorum = mekan.yorumlar.id(req.params.yorumid);

        if (!yorum) {
          cevapOlustur(res, 404, {
            "hata": "Böyle bir yorum yok!"
          });
        } else {
          cevap = {
            mekan: {
              ad: mekan.ad,
              id: req.params.mekanid
            },
            yorum: yorum
          };
          cevapOlustur(res, 200, cevap);
        }
      } else {
        cevapOlustur(res, 404, {
          "hata": "Hiç yorum yok!"
        });
      }
    });
  } else {
    cevapOlustur(res, 404, {
      "hata": "Bulunamadı. mekanid ve yorumid mutlaka girilmeli"
    });
  }
};

var yorumSil = function yorumSil(req, res) {
  cevapOlustur(res, 200, {
    "durum": "başarılı"
  });
};

var yorumGuncelle = function yorumGuncelle(req, res) {
  cevapOlustur(res, 200, {
    "durum": "başarılı"
  });
};

module.exports = {
  yorumEkle: yorumEkle,
  yorumGetir: yorumGetir,
  yorumSil: yorumSil,
  yorumGuncelle: yorumGuncelle
};