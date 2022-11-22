const anaSayfa=function(req,res,next){
    res.render('anaSayfa', { 
        "baslik": "Anasayfa",
        "sayfaBaslik": {
            "siteAd": "Mekanbul",
            "slogan": "Civardaki Mekanları Keşfet!"
        },
        "mekanlar": [
            {
                "ad": "Starbucks",
                "adres": "Fatih mah.",
                "puan": "4",
                "imkanlar": ["Kahveler", "Kekler", "Donuts"],
                "mesafe": "4km"
            }
            ,
            {
                "ad": "D'OR Bistro & Lounge",
                "adres": "Fatih mah.",
                "puan": "4",
                "imkanlar": ["Kahveler", "Kekler", "Pastalar"],
                "mesafe": "3km"
            }
            ,
            {
                "ad": "Arabica Coffee House",
                "adres": "Iyaş Park Avm",
                "puan": "4",
                "imkanlar": ["Kahveler", "Cookie", "Pastalar","Cheesecake"],
                "mesafe": "1km"
    
            }
            

        ]

     });
}

const mekanBilgisi=function(req,res,next){
    res.render('mekanBilgisi', { 
        "baslik": "Mekan Bilgisi,",
        "mekanBaslik": "Starbucks",
        "mekanDetay":{
            "ad": "Starbucks",
            "adres": "Fatih mah.",
            "puan":"4",
            "imkanlar": ["Kahveler","Kekler","Donuts"],
            "kordinatlar": {
                "enlem": "37.7",
                "boylam": "30.5",
            },
            "saater": [
                {
                    "gunler": "Pazartesi-Cuma",
                    "acilis": "09.00",
                    "kapanis": "23.00",
                    "kapali": false
                }
                ,
                {
                    "gunler": "Cumartesi-Pazar",
                    "acilis": "10.00",
                    "kapanis": "22.00",
                    "kapali": false
                }
            ],
            "yorumlar": [ {
                "yorumYapan": "Samed Ordueri",
                "puan": "4",
                "tarih": "24 Mayıs 2021",
                "yorumMetni": "Kahveler fena değil ama yer bulmak bir hayli zor."

            }
              
            ]
        }


        
    });
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