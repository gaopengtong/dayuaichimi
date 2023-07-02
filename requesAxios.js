const axios = require('axios');
let data = JSON.stringify({
    "address": "0x001"
});

let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://faucet.cashmere.exchange/api/lineaZk/claim',
    headers: {
        'Content-Type': 'application/json'
    },
    data : data
};

axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });