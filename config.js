const config = {
    "ownerID": "319915856903667712", //kendi IDınızı yazınız
    "admins": ["319915856903667712"],
    "support": ["319915856903667712"],
    "token": "Njk3ODkyMTc5MzE3NzUxOTIx.Xo95bA.9nN4TQBKlRD_Yvnq_X6eweAeE_8", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "9B0Ixer8sEM1xpLF_lPK3ivAaUPaKRVB", //botunuzun secretini yazınız
      "callbackURL": `https://yunuzbot.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://yunuzbot.glitch.me/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;