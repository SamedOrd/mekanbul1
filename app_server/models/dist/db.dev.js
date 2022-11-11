"use strict";

var mongoose = require("mongoose");

var dbURI = "mongodb://localhost/mekanbul";
mongoose.connect(dbURI); // sıkıntı çıkarsa diğer parametreyide kullanabilirsin. sunum 7 sayfa 9 
// aşağıdaki kodda bağlanma durumunu kontrol ediyoruz. 

function kapat(mcg, callback) {
  mongoose.connection.close(function () {
    console.log(msg);
    callback();
  });
}

process.on("SIGINT", function () {
  kapat("uygulama kapatıldı!", function () {
    process.exit(0);
  });
});
mongoose.connection.on("connected", function () {
  console.log(dbURI + "adresindeki veritabanına bağlandı.");
});
mongoose.connection.on("disconnected", function () {
  console.log(dbURI = "adresindeki veritabanı bağlantısı koptu.");
});
mongoose.connection.on("error", function () {
  console.log("Bağlantı hatası.");
});