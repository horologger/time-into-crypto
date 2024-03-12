module.exports = {
	sendInvoice: sendInvoice
};

const express = require('express');

const app = express();

app.use(express.static('static'));

var server = require("http").createServer();
const ws = require('ws');

const nt = require('nostr-tools');
(0, nt.useWebSocketImplementation)(require('ws'));

const {authenticatedLndGrpc} = require('ln-service');
// const {getWalletInfo} = require('ln-service');
// const {getInvoices} = require('ln-service');
// const {createInvoice} = require('ln-service');

// Edit /Users/i830671/.bos/ragnar/credentials.json etc.
// # export RELAY="wss://atl.purplerelay.com"
// # export LN_BACKEND_TYPE="LND"            #ALBY or LND
// # export LND_ADDRESS="ragnar:10009"       #the LND gRPC address, eg. localhost:10009 (used with the LND backend)
// # export LND_CERT_FILE="lnd-data/tls.cert"    #the location where LND's tls.cert file can be found (used with the LND backend)
// # export LND_MACAROON_FILE_FILE="lnd-data/data/chain/bitcoin/mainnet/admin.macaroon" #the location where LND's admin.macaroon file can be found (used with the LND backend)
// # export DATABASE_URI="/data/time-into-crypto.db" #a postgres connection string or sqlite filename. Default='blah' #nostr-wallet-connect.db (sqlite)
// # export PORT=8080 #the port on which the app should listen on (default='blah' #8080)


var nwc_relay = process.env[`RELAY`]; 
var cert = process.env[`LND_CERT_FILE`];       
var macaroon = process.env[`LND_MACAROON_FILE`];
var socket = process.env[`LND_ADDRESS`];

console.log("nwc_relay: " + nwc_relay);
console.log("cert: " + cert);
console.log("macaroon: " + macaroon);
console.log("socket: " + socket);

const homedir = process.env[`HOME`];
var bosnode = process.env[`BOS_DEFAULT_SAVED_NODE`];

const fs = require('fs');

function readFileIntoJSONObject(filename) {
    try {
    const fileContent = fs.readFileSync(filename, 'utf8');
    const jsonObject = JSON.parse(fileContent);
    return jsonObject;
    } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
    }
}

function checkFileExists(filePath) {
    try {
        fs.accessSync(filePath);
        return true;
    } catch (error) {
        return false;
    }
}
  
function shortenString(str) {
    if (str.length <= 12) {
      return str;
    }
  
    const first = str.substring(0, 6);
    const last = str.substring(str.length - 3);
  
    const dots = '.'.repeat(3);
  
    return `${first}${dots}${last}`;
}

var bosconfig = {};
var boscreds = {};

// Example usage
var filename = homedir + '/.bos/config.json';
if (checkFileExists(filename)) {
    bosconfig = readFileIntoJSONObject(filename);
    if ((typeof bosconfig == "object") && (typeof bosconfig.default_saved_node == "string")) {
        bosnode = bosconfig.default_saved_node;
    }
}

console.log("bosnode: " + bosnode);

filename = homedir + '/.bos/' + bosnode + '/credentials.json';
if (checkFileExists(filename)) {
    boscreds = readFileIntoJSONObject(filename);
    if (typeof boscreds == "object") {
        console.log("reading boscreds: ");
        if (typeof boscreds.cert == "string") {
            cert = boscreds.cert;
        }
        if (typeof boscreds.macaroon == "string") {
            macaroon = boscreds.macaroon;
        }
        if (typeof boscreds.socket == "string") {
           socket = boscreds.socket;
        }        
    }
} else {
    console.log("Getting LND details from ENV");
}

//const {exit} = require('process');

var attempt_to_connect_to_lnd_on_startup = false;
if (attempt_to_connect_to_lnd_on_startup) {

    if (cert && macaroon && socket) {
        console.log("cert: " + shortenString(cert));
        console.log("macaroon: " + shortenString(macaroon));
        console.log("socket: " + socket);
    } else {
        console.log("Either export LND_CERT_FILE, LND_MACAROON_FILE and LND_ADDRESS (host:port) -OR- The method described at https://github.com/andrewlunde/balanceofsatoshis#saved-nodes");
        process.exit(1);
    }
} else {
    console.log("Not attempting to connect to LND on startup.");
}

// console.log(boscreds);

// echo $LND_CERT_FILE
// echo $LND_MACAROON_FILE
// echo $LND_ADDRESS

// lncli --rpcserver=IP_ADDRESS:GRPC_PORT --tlscertpath=./../tls.cert --macaroonpath=./../admin.macaroon

// GLOBAL OPTIONS:
//    --rpcserver value          The host:port of LN daemon. (default: "localhost:10009")
//    --tlscertpath value        The path to lnd's TLS certificate. (default: "/Users/i830671/Library/Application Support/Lnd/tls.cert")
//    --no-macaroons             Disable macaroon authentication.
//    --macaroonpath value       The path to macaroon file.

// ./lncli --rpcserver=ragnar:10009 --tlscertpath=./tls.cert --macaroonpath=./admin.macaroon getinfo
// base64 -w0 admin.macaroon

// Create a new LND gRPC API client
// const lnd = lnService.authenticatedLndGrpc({
//   cert: './tls.cert', // scp ragnar:/t4/lnd/tls.cert .
//   macaroon: './admin.macaroon', // scp ragnar:/t4/lnd/data/chain/bitcoin/mainnet/admin.macaroon .
//   socket: 'ragnar:10009'
// })

global.lnd = {};

if (attempt_to_connect_to_lnd_on_startup) {
    try {
        console.log(`authenticatedLndGrpc`);
        lnd = authenticatedLndGrpc({ cert, macaroon, socket }).lnd;
    } catch (err) {
        throw new Error('FailedToInstantiateDaemon');
    }
    
    // https://github.com/alexbosworth/ln-service#all-methods

    const ln = require('./libln');

    console.log('Getting node info...');
    ln.getNodeInfo();

    ln.subToInvoices();
}

console.log("Reconnect any websocket browser windows...");

async function someFunction(inv) {
    const someInvoice = await getNewInvoiceInfo(inv);
    console.log(`someInvoice: ${JSON.stringify(someInvoice, null, 2)}`);
    return someInvoice;
}

// Run tests via "npm --type=TYPE test" (types available: memory (default), redis are available)
var TYPE = process.env['npm_config_type'] || 'memory';

TYPE = "sqlite";

var query           = require('querystring');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');

// var server      = express();    // server == app here
// var model       = require('./model/' + TYPE);


// Middleware
app.use(cookieParser());
// app.use(session({ secret: 'oauth20-provider-test-server', resave: false, saveUninitialized: false }));

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());    // Default {type: 'text/plain'}
//app.use(express.text({type: 'text/html'}));    // Expecting Ajax fragment (EuroNext Exchange)


global.gtid = 'aef487d1-0879-4fb1-a8f4-2384b71226c2';  // zone i.e. tenant ID of cryptorates subaccount

const axios = require('axios');
const { exit } = require('process');

app.all("*", function (req, res, next) {

    var hostname = "localhost";

    if (((typeof req) == "object") && ((typeof req.headers) == "object") && ((typeof req.headers['x-forwarded-host']) == "string")) {
        hostname = req.headers['x-forwarded-host'];
    }
    console.log("\n\n=================================\n\nreq: " + req.method + " " + hostname + req.url + "\n");
    next();

});

// Locally encoded favicon
// https://stackoverflow.com/questions/15463199/how-to-set-custom-favicon-in-express
// make an icon maybe here: http://www.favicon.cc/ or here :http://favicon-generator.org

// convert it to base64 maybe here: http://base64converter.com/

// then replace the icon base 64 value

const favicon = new Buffer.from('AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREQAAAAAAEAAAEAAAAAEAAAABAAAAEAAAAAAQAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD8HwAA++8AAPf3AADv+wAA7/sAAP//AAD//wAA+98AAP//AAD//wAA//8AAP//AAD//wAA', 'base64'); 
app.get("/favicon.ico", function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Length', favicon.length);
 res.setHeader('Content-Type', 'image/x-icon');
 res.setHeader("Cache-Control", "public, max-age=2592000");                // expiers after a month
 res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
 res.end(favicon);
});

// app user info
app.get(['/noauth','/sqlite','/sqlite/noauth','/socket','/socket/noauth'], function (req, res) {
    var hostname = "localhost";

    if (((typeof req) == "object") && ((typeof req.headers) == "object") && ((typeof req.headers['x-forwarded-host']) == "string")) {
        hostname = req.headers['x-forwarded-host'];
    }
    console.log(req.method + " " + hostname + req.url);
    let info = {
        'noauth': hostname + ":" + req.url
    };
    res.status(200).json(info);
});

app.get(["/"], function (req, res) {
    res.sendFile('/index.html');
});

app.get(["/links"], function (req, res) {
    console.log("served from adm.js");
    
    console.log(req.headers['x-forwarded-host']);

    var responseStr = "";
    responseStr += "<!DOCTYPE HTML><html><head><title>Crypto Rates ADM</title></head><body><h3>Crypto Rates ADM</h3><br />";
    responseStr += "<a href=\"/admin/links\">Admin Links</a> requires authorization.<br />";
    responseStr += "<a href=\"/rates/links\">Rates Links</a> no authorization.<br />";
    responseStr += "<br />";
    responseStr += "<a href=\"/\">Return to Root.</a><br />";
    responseStr += "</body></html>";
    res.status(200).send(responseStr);
});

//Setup Routes
var router = require("./router")(app, server);

// Set up a headless websocket server that prints any
// events that come in.
const wsServer = new ws.Server({ noServer: true });

var client_cnt = 0;
gsocket = {};

wsServer.on('connection', (socket, req) => {
    gsocket = socket;
    console.log('New Client Joining...');
    console.log(req.url);
    const searchParams = new URLSearchParams(req.url);
    console.log(searchParams.getAll("tenantid"));
    console.log('token: ' + JSON.stringify(req.url,null,2));
    const qparts = req.url.split("=");
    console.log('qparts: ' + JSON.stringify(qparts,null,2));


    const urlParams = new URLSearchParams((req.url).substring(1,(req.url).length));

    var rhpk = "";
    if (urlParams.has('rhpk')) {
        rhpk = urlParams.get('rhpk');
    }
    console.log("rhpk: " + rhpk);

    var shpk = "";
    if (urlParams.has('shpk')) {
        shpk = urlParams.get('shpk');
    }
    console.log("shpk: " + shpk);

    // if (qparts[0] == "/?tenantid") {
    //     // socket['tenantid']= qparts[1];
    // } else {
    //     socket['tenantid']= 'unknown';
    // }
    socket['tenantid']= shpk;
    socket['receiver']= rhpk;

    client_cnt = 0;
    wsServer.clients.forEach(client => {
        client_cnt++;
    });
    console.log('number of clients: ' + client_cnt);

    // ----
    var deviceId = null;
    var deviceStatus = deviceStatus || null;
    // ----
 
    (async () => {
        const retval = (await getPrice("bitcoin", "usd"));
        bitcoinPrice = retval.data.bitcoin.usd;
        console.log(bitcoinPrice);
        const info_event = {
            type: "price",
            ticker: "bitcoin",
            currency: "usd",
            price: bitcoinPrice
        };
        broadcast(JSON.stringify(info_event));

    })();   
    

    socket.on('message', async message => {
        // console.log('Received:' + message);
        const msg = JSON.parse(message);
        
        console.log('msg: ' + JSON.stringify(msg,null,2));
        
        if (msg.action == "info") {
            console.log('Info: ' + msg.hpk);
            if (msg.hpk != 'unknown') {
                console.log('Use ' + msg.relay + ' to get info on ' + msg.hpk);
                const irelay = new nt.Relay(msg.relay);
                await irelay.connect();
                console.log(`connected to irelay ${irelay.url}`)
                // irelay.subscribe([
                //     {
                //     kinds: [0],
                //     authors: [msg.hpk],
                //     },
                // ], {
                //     onevent(event) {
                //     console.log('got event:', event)
                //     }
                // });

                // let's query for an event that exists
                const sub = irelay.subscribe([
                    {
                    kinds: [0],
                    authors: [msg.hpk]
                    },
                ], {
                    onevent(event) {
                    // console.log('Found them:', JSON.stringify(event,null,2));
                    console.log('content: ' + event.content);
                    const content = JSON.parse(event.content);
                    console.log('name: ' + content.name);
                    console.log('display: ' + content.display_name);
                    console.log('picture: ' + content.picture);
                    const info_event = {
                        type: "info",
                        info: content.display_name
                    };
                    broadcast(JSON.stringify(info_event));
                },
                    oneose() {
                        console.log('sub has closed');
                        sub.close()

                        irelay.close();
                        console.log(`irelay ${irelay.url} has closed`);   

                    }
                })
            }
        } else if (msg.action == "post") {
            console.log('Post: ' + "to " + msg.relay);
            console.log('msg: ' + "to " + msg.msg);

            console.log(JSON.stringify(msg,null,2));

            // var dme = {};

            // await make_dm_event(em, horologger);

            // console.log("dm event: " + dme);
            // post_relay.send(msg.event);
            const relay = new nt.Relay(msg.relay);
            await relay.connect();
            console.log(`connected to ${relay.url}`)
            await relay.publish(msg.event);
            relay.close();
            console.log(`relay ${relay.url} has closed`);   

        } else if (msg.action == "other") {
            console.log('Unhandled Action' + msg.action);
        } else {
            console.log('Unknown Action' + msg.action);
        }
        // var is_cmd = false;
        // var parts = message.split(':');
        // if (parts.length > 1) {
        //     console.log('parts: ' + JSON.stringify(parts,null,2));
        //     if (parts.length > 2) {
        //         if (parts[1] == "cmd") {
        //             console.log('Is Command');
        //             is_cmd = true;
        //             switch (parts[2]) {
        //                 case "getnick":
        //                     console.log('GetNick!!');
        //                     break;
        //                 case "setnick":
        //                     if (parts.length > 3) {
        //                         console.log('SetNick: ' + parts[3]);
        //                         // Do the nickname setting logic
        //                     } else {
        //                         console.log('SetNick: ' + 'needs a nickname.');
        //                     }
        //                     break;
        //                 default:
        //                     console.log('Default!!');
        //             }                    
        //         } else {
        //             console.log('Not Command');
        //         }
        //     } else {
        //         console.log('Not Command');
        //     }
        // } else {
        //     // console.log('Malformed Message');
        //     // ---
        //     console.log('Websocket Chart');
        //     deviceId = message;
        //     deviceStatus = (deviceStatus == "On") ? "Off" : "On";
        //     // ---
        // }
        // if (!is_cmd) {
        //     broadcast(message);
        // }
    });

//     import { Relay } from 'nostr-tools/relay'

// const relay = await Relay.connect('wss://relay.example.com')
// console.log(`connected to ${relay.url}`)

//     // let's query for an event that exists
//     const sub = relay.subscribe([
//     {
//         ids: ['d7dd5eb3ab747e16f8d0212d53032ea2a7cadef53837e5a6c66d42849fcb9027'],
//     },
//     ], {
//     onevent(event) {
//         console.log('we got the event we wanted:', event)
//     },
//     oneose() {
//         sub.close()
//     }
//     })

    // --- Uncomment for /socket/chart
    // var intervalID = setInterval(myCallback, 2000);

    function myCallback() {
        getTemp(deviceId).then((t)=>{
        socket.send(JSON.stringify({
        "DeviceID": deviceId,
        "State": deviceStatus,
        "Temperature": t
        }))

    })
    }

    function getTemp(d) {
    return new Promise((resolve, reject) => {
        let t = null;
        if (deviceStatus == "On")
        t = Math.floor(Math.random()*100)/2 + 50;
        else t = "N/A";
        resolve(t);
    })
    }
    // ---

    // Enable to peridically send an invoice for testing
    // +++
    // var intervalInvoice = setInterval(myInvoice, 10000);

    function myInvoice(invReq) {

        // promiseInvoice(deviceId).then((inv)=>{
        // socket.send(JSON.stringify({
        // "type": "invoice",
        // "invoice": inv
        // }))
        // })

        someFunction({lnd: lnd, tokens: 19, description: "next invoice 19"}).then((inv)=>{
            socket.send(JSON.stringify({
                "type": "invoice",
                "invoice": inv.request
                }))
            })
    }
   
    
    socket.on('close', function close() {
        console.log('Disconnected...');
        client_cnt = 0;
        wsServer.clients.forEach(client => {
            client_cnt++;
        });
        console.log('number of clients: ' + client_cnt);    
    });
    
});

wsServer.on('error', error => {
    console.log('Server Error...' + error);
});

function promiseInvoice(invReq) {
    console.log('promiseInvoice...');
    return new Promise((resolve, reject) => {
        console.log('In Promise...');
        ////let inv = getInvoiceInfo("3b4d9b2dc0a1ed3456b2fceab3c6b07e76d2e3d09166be617a2820b4ac3ddde5");
        let t = invReq;
        // let t = "lnbc190n1pjgy36fpp5dglatu3prge5qxnyuhgrxx0mflmm0x82yh3y2hd4e0lsfhvm7ldqdqcw3jhxapqd9h8vmmfvdjjqvfecqzzsxqr23ssp5pn27g6zvkjzpzpkj2x067wfcmghp0wuw4f3h088ljgh5kd5gnu3s9qyyssq2tk37wk2fry5gdjn9e6zd4e684sgfc8qryg0434w9xzhxdwkn32xc65xj7gpjcsjkpaneljwqxcxt85rm29rg5vxa4zlmk6fj82f3zgq0gqezp";
        resolve(t);
        console.log('End Promise...');
    })
}

function sendInvoice(invReq) {

    if ((typeof gsocket == "object") && (typeof gsocket.send == "function")) {
        promiseInvoice(invReq).then((inv)=>{
            gsocket.send(JSON.stringify({
                "type": "invoice",
                "invoice": inv
            }))
        })
    } else {
        console.log('No websockets listening...be sure to have a rates/chat open and connected.');
    }

}

function broadcast(data) {

    var idx = 1;
    var bidx = 1;
    wsServer.clients.forEach(client => {
        // console.log("client: " + JSON.stringify(client, null, 2));
        console.log("client: " + idx + " " + client.tenantid + " " + client.receiver);
        if (client.tenantid != 'unknown') {
            if (client.readyState === ws.OPEN) {
                client.send(data);
            }
            bidx++;
        }
        idx++;
    });
    console.log('broadcasted...to...'+(bidx-1));
}

global.notify_tenant = function(tenantid,data) {

    var idx = 1;
    wsServer.clients.forEach(client => {
        // console.log("client: " + JSON.stringify(client, null, 2));
        console.log("client: " + idx + " " + client.tenantid);

        if ((client.tenantid == tenantid) && (client.readyState === ws.OPEN)) {
            client.send(data);
        }
        idx++;
    });
}

// =============================================================================    

// Giving up on 'nostr' for now and trying 'nostr-tools' instead
// const {Relay} = require('nostr');
// const {RelayPool, encryptDm, decryptDm, calculateId, createDelegation,
// 	createDelegationEvent, getPublicKey, signDelegationToken,
// 	signId, verifyEvent} = require('nostr');
const {RelayPool} = require('nostr');


const jb55 = "32e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245"
const vacuum8    = "6771ce6cf4a229db78fa8fcf092c943580d186145baa1218b60070f116ba99ff"
const horologger = "7bdef7f39298dc57996c9b7adc08db1eeaf02208437ba01bf4cbe2e8c17a72a5"
const damus = "wss://relay.damus.io"
const scsi = "wss://nostr-pub.wellorder.net"
const primal = "wss://relay.primal.net"
// const relays = [damus, scsi]

const relays = [primal]

// const post_relay = Relay(primal, {reconnect: true});

// post_relay.on('open', () => {
//     console.log('post_relay is open');
// });

// post_relay.on('eose', () => {   
//     console.log('post_relay has closed');
// });


const pool = RelayPool(relays);

pool.on('open', relay => {
    console.log(`connected to ${relay.url}`)
	// relay.subscribe("subid", {limit: 1, kinds:[4], authors: [horologger]})
	// relay.subscribe("subid", {limit: 3, kinds:[1], authors: [horologger]})
	relay.subscribe("subid", {limit: 29, kinds:[0], authors: [horologger]})
});

pool.on('eose', relay => {
    console.log(`relay ${relay.url} has closed`)
	relay.close()
});

pool.on('event', (relay, sub_id, ev) => {
    // console.log("relay: " + JSON.stringify(relay));
    console.log("relay.url: " + relay.url);
	console.log(ev);
});

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


function create_dm_event(msg, pubkey) {
	// const created_at = 0;
    const created_at = Math.round((new Date()).getTime() / 1000);
	const kind = 4;
    const content = (msg ? msg : "some cryptic message");
    const tags = [['p', pubkey]];

	return {pubkey: pubkey, created_at, kind, content, tags}
}

// var em = encryptDm(PRIVKEY, vacuum8, "This is a private message");
// console.log("encrypted msg: " + em);

async function make_dm_event(emsg, pubkey) {
    var dme = create_dm_event(emsg, pubkey);
    dme.id = await calculateId(dme);
    dme.sig = await signId(PRIVKEY, dme.id)
    console.log(dme);
    return dme;
}

// var dme = {};

// await make_dm_event(em, horologger);

// console.log("dm event: " + dme);
// pool.send(dme,pool[0]);


// =============================================================================    

// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// --- Uncomment for /socket/chat
let myVar = setInterval(myTimer, (10 * 1000));

function myTimer() {
    const time_event = {
        type: "time",
        time: Math.round((new Date()).getTime() / 1000),
    };
    broadcast(JSON.stringify(time_event));
}

server.on('upgrade', (request, socket, head) => {
    wsServer.handleUpgrade(request, socket, head, socket => {
      wsServer.emit('connection', socket, request);
    });
  });

const port = process.env.PORT || 8080;    // Start9 config desn't seem to allow setting PORT but needs to be 8080 for the reverse proxy to work
// app.listen(port, function () {
//     console.info('Listening on http://localhost:' + port);
// });
server.on("request", app);
server.listen(port, function () {
    console.info('Listening on http://localhost:' + port);
});
