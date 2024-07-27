const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require("express");


// Create a new client instance
const client = new Client({
    puppeteer:{
        headless:false,
    },
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    //qrcode.generate(qr, {small: true});
    console.log("Escanea el QR")
});

//servidor node
const app = express();
const port = 3001;
app.listen(port,()=> {
    console.log(`Escuchando en el puerto:${port}`)
});


// Start your client
client.initialize();


