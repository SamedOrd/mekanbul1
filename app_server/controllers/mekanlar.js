var express = require('express');
var router = express.Router();

const anaSayfa=function(req,res,next){
    res.render('anasayfa', { title: 'Anasayfa' });
}

const mekanBilgisi=function(req,res,next){
    res.render('mekanBilgisi', { title: 'mekanBilgisi' });
}

const yorumEkle=function(req,res,next){
    res.render('yorumEkle', { title: 'yorumEkle' });
}
const hakkinda=function(req,res,next){
    res.render('hakkinda', { title: 'Hakkinda' });
}
module.exports ={
    anaSayfa,
    mekanBilgisi,
    yorumEkle,
    hakkinda
}