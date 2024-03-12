const axios = require('axios');

async function getPrice(ids, vs_currencies) {

    let requrl = "https://api.coingecko.com/api/v3/simple/price?ids=" + ids + "&vs_currencies=" + vs_currencies;
   
    return await axios.get(requrl);

}

var bitcoinPrice = 0;
(async () => {
    const retval = (await getPrice("bitcoin", "usd"));
    bitcoinPrice = retval.data.bitcoin.usd;
    console.log(bitcoinPrice);
})();   

