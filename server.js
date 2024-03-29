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



// const Database = require('better-sqlite3');

// // Creating an in-memory SQLite database
// const db = new Database(':memory:'); 

const tictype = require('./libtypes');

const db = require('./library');


// // Creating timeslots table in the SQLite database
// db.exec("CREATE TABLE timeslots (id TEXT, label TEXT, created INTEGER, creator TEXT, reservor TEXT, start INTEGER, pause INTEGER, duration INTEGER, satsmin INTEGER, quote REAL, currency TEXT, state INTEGER)");
// db.exec("CREATE TABLE events (id TEXT, type INTEGER, label TEXT, created INTEGER, creator TEXT, reservor TEXT, trigger INTEGER, dest TEXT, data TEXT, state INTEGER)");
// var createstr = '';
// createstr  = 'CREATE TABLE IF NOT EXISTS pending_payments (';
// createstr += 'creator CHAR(36) NOT NULL, ';	// "1234567890123456789012345678901234567890123456789012345678901234"
// createstr += 'invoice CHAR(64) NOT NULL, ';	// "bfa5d543c695f89bfe75ac7fc8076be5ccb8811b3be5dddff9e1d97503425de3"
// createstr += 'created DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL';
// createstr += ')';

// db.exec(createstr);

db.drop();
db.init();


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

// Start9
// LNCLI_MACAROONPATH=/mnt/lnd/admin.macaroon
// LNCLI_RPCSERVER=lnd.embassy:10009
// LNCLI_TLSCERTPATH=/mnt/lnd/tls.cert

// Umbrel
// LNCLI_RPCSERVER: $APP_LIGHTNING_NODE_IP:$APP_LIGHTNING_NODE_GRPC_PORT
// LNCLI_TLSCERTPATH: "/lnd/tls.cert"
// LNCLI_MACAROONPATH: "/lnd/data/chain/bitcoin/mainnet/admin.macaroon"

const fs = require('fs');

var nwc_relay = process.env[`RELAY`]; 

var cert = process.env[`LNCLI_TLSCERT`];

// Testing on Ragnar
// export LNCLI_TLSCERTPATH=./lnd-data/tls.cert

if (typeof cert == "undefined") {
    console.log("LNCLI_TLSCERT not found.  Trying LNCLI_TLSCERTPATH")
    const certpath = process.env[`LNCLI_TLSCERTPATH`];
    if (typeof certpath == "undefined") {
        console.log("No LND Certificate found.  Export LNCLI_TLSCERT or LNCLI_TLSCERTPATH or use .bos/credentials.json");
        process.exit(1);
    } else if (typeof certpath == "string") {
        console.log("LNCLI_TLSCERTPATH: " + certpath);
        if (checkFileExists(certpath)) {
            const rawcert = fs.readFileSync(certpath);
            // console.log("rawcert: " + rawcert);
            const b64cert = Buffer.from(rawcert).toString('base64');
            // console.log("b64cert: " + shortenString(b64cert));
            // console.log("b64cert: " + b64cert);
            cert = b64cert;
        } else {
            console.log("No LND Certificate found.  Export LNCLI_TLSCERT or LNCLI_TLSCERTPATH or use .bos/credentials.json");
            process.exit(1);
        }        
    } else {    
        console.log("No LND Certificate found.  Export LNCLI_TLSCERT or LNCLI_TLSCERTPATH or use .bos/credentials.json");
        process.exit(1);
    }
}

var macaroon = process.env[`LNCLI_MACAROON`];

// Testing on Ragnar
// export LNCLI_MACAROONPATH=./lnd-data/data/chain/bitcoin/mainnet/admin.macaroon

if (typeof macaroon == "undefined") {
    console.log("LNCLI_MACAROON not found.  Trying LNCLI_MACAROONPATH")
    const macaroonpath = process.env[`LNCLI_MACAROONPATH`];
    if (typeof macaroonpath == "undefined") {
        console.log("No LND Certificate found.  Export LNCLI_MACAROON or LNCLI_MACAROONPATH or use .bos/credentials.json");
        process.exit(1);
    } else if (typeof macaroonpath == "string") {
        console.log("LNCLI_MACAROONPATH: " + macaroonpath);
        if (checkFileExists(macaroonpath)) {
            const rawmacaroon = fs.readFileSync(macaroonpath);
            // console.log("rawmacaroon: " + rawmacaroon);
            const b64macaroon = Buffer.from(rawmacaroon).toString('base64');
            // console.log("b64macaroon: " + shortenString(b64macaroon));
            // console.log("b64macaroon: " + b64macaroon);
            macaroon = b64macaroon;
        } else {
            console.log("No LND Certificate found.  Export LNCLI_MACAROON or LNCLI_MACAROONPATH or use .bos/credentials.json");
            process.exit(1);
        }        
    } else {    
        console.log("No LND Certificate found.  Export LNCLI_MACAROON or LNCLI_MACAROONPATH or use .bos/credentials.json");
        process.exit(1);
    }
}

var socket = process.env[`LNCLI_RPCSERVER`];

console.log("nwc_relay: " + nwc_relay);
console.log("cert: " + shortenString(cert));
console.log("macaroon: " + shortenString(macaroon));
console.log("socket: " + socket);

const homedir = process.env[`HOME`];
var bosnode = process.env[`BOS_DEFAULT_SAVED_NODE`];

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
    console.log(".bos/config.json exists is used to find which node to connect to.");
    bosconfig = readFileIntoJSONObject(filename);
    if ((typeof bosconfig == "object") && (typeof bosconfig.default_saved_node == "string")) {
        bosnode = bosconfig.default_saved_node;
    }
}

console.log("bosnode: " + bosnode);

filename = homedir + '/.bos/' + bosnode + '/credentials.json';
if (checkFileExists(filename)) {
    console.log(filename + " exists and overrides ENVIRONMENT variables");
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
    // If 
}

//const {exit} = require('process');

var attempt_to_connect_to_lnd_on_startup = true;
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
const ln = require('./libln');

if (attempt_to_connect_to_lnd_on_startup) {
    try {
        console.log(`authenticatedLndGrpc`);
        lnd = authenticatedLndGrpc({ cert, macaroon, socket }).lnd;
    } catch (err) {
        throw new Error('FailedToInstantiateDaemon');
    }
    
    // https://github.com/alexbosworth/ln-service#all-methods


    console.log('Getting node info...');
    ln.getNodeInfo().then((nodeInfo) => {
        nodeInfo.features = []; // Don't need this
        console.log(`nodeInfo: ${JSON.stringify(nodeInfo, null, 2)}`);
        // exit(0);
    }).catch((err) => { 
        console.log(`Error getting node info: ${err.message}`);
    });


    ln.subToInvoices(); // Not working yet
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
gsocket = {};   // Table of websocket connections
// gtimeslots = {};   // Table of timeslots for each tenant

// function addTimeSlot(payee,slot) {
//     if (typeof gtimeslots[payee] == "undefined") {
//         gtimeslots[payee] = [];
//     }
//     gtimeslots[payee].push(slot);
// }   


wsServer.on('connection', (socket, req) => {
    gsocket = socket;
    console.log('New Client Joining...');
    console.log(req.url);
    // const searchParams = new URLSearchParams(req.url);
    // console.log(searchParams.getAll("payee"));
    // console.log('token: ' + JSON.stringify(req.url,null,2));
    // const qparts = req.url.split("=");
    // console.log('qparts: ' + JSON.stringify(qparts,null,2));


    const urlParams = new URLSearchParams((req.url).substring(1,(req.url).length));

    var orhpk = "";
    if (urlParams.has('orhpk')) {
        orhpk = urlParams.get('orhpk');
    }
    console.log("orhpk: " + orhpk);

    var eehpk = "";
    if (urlParams.has('eehpk')) {
        eehpk = urlParams.get('eehpk');
    }
    console.log("eehpk: " + eehpk);

    socket['payee']= eehpk;
    socket['payor']= orhpk;

    client_cnt = 0;
    wsServer.clients.forEach(client => {
        client_cnt++;
    });
    console.log('number of clients: ' + client_cnt);

    // ----
    var deviceId = null;
    var deviceStatus = deviceStatus || null;
    // ----
 
    // (async () => {
    //     const retval = (await getPrice("bitcoin", "usd"));
    //     if ((typeof retval.data == "object") && (typeof retval.data.bitcoin == "object") && (typeof retval.data.bitcoin.usd == "number")) {
    //     // if (typeof retval.data.bitcoin.usd == "number") {
    //         bitcoinPrice = retval.data.bitcoin.usd;
    //         console.log(bitcoinPrice);
    //         const info_event = {
    //             type: "price",
    //             ticker: "bitcoin",
    //             currency: "usd",
    //             price: bitcoinPrice
    //         };
    //         broadcast(JSON.stringify(info_event));
    //     }
    // })();   
    
    getPrice("bitcoin", "usd").then((retval) => {
        if ((typeof retval.data == "object") && (typeof retval.data.bitcoin == "object") && (typeof retval.data.bitcoin.usd == "number")) {
            bitcoinPrice = retval.data.bitcoin.usd;
            console.log(bitcoinPrice);
            const info_event = {
                type: "price",
                ticker: "bitcoin",
                currency: "usd",
                price: bitcoinPrice
            };
            broadcast(JSON.stringify(info_event));
        }
    }).catch((err) => {
        console.log('Get Bitcoin Price Error: ' + err);
    });
           

    socket.on('message', async message => {
        // console.log('Received:' + message);
        const msg = JSON.parse(message);
        
        console.log('msg: ' + JSON.stringify(msg,null,2));
        
        if (msg.action == "info") {
            console.log('Info: ' + msg.hpk);
            // Not always working, so commented out
            // if (msg.hpk != 'unknown') {
            //     console.log('Use ' + msg.relay + ' to get info on ' + msg.hpk);
            //     const irelay = new nt.Relay(msg.relay);
            //     irelay.connect().then(() => {
            //         console.log(`connected to irelay ${irelay.url}`)

            //         // let's query for an event that exists
            //         const sub = irelay.subscribe([
            //             {
            //             kinds: [0],
            //             authors: [msg.hpk]
            //             },
            //         ], {
            //             onevent(event) {
            //             // console.log('Found them:', JSON.stringify(event,null,2));
            //             console.log('content: ' + event.content);
            //             const content = JSON.parse(event.content);
            //             console.log('name: ' + content.name);
            //             console.log('display: ' + content.display_name);
            //             console.log('picture: ' + content.picture);
            //             const info_event = {
            //                 type: "info",
            //                 info: content.display_name
            //             };
            //             broadcast(JSON.stringify(info_event));
            //         },
            //             oneose() {
            //                 console.log('sub has closed');
            //                 sub.close()

            //                 irelay.close();
            //                 console.log(`irelay ${irelay.url} has closed`);   

            //             }
            //         })
            //     }).catch((err) => {
            //         console.log(`irelay ${irelay.url} failed to connect`);
            //     });
            // }
        } else if (msg.action == "post") {
            console.log('Post: ' + "to " + msg.relay);
            console.log('msg: ' + "to " + msg.msg);

            console.log(JSON.stringify(msg,null,2));

            // var dme = {};

            // await make_dm_event(em, horologger);

            // console.log("dm event: " + dme);
            // post_relay.send(msg.event);

            // const relay = new nt.Relay(msg.relay);
            // await relay.connect();
            // console.log(`connected to ${relay.url}`)
            // await relay.publish(msg.event);
            // relay.close();

            // console.log(`relay ${relay.url} has closed`);   
            const relay = new nt.Relay(msg.relay);
            relay.connect().then(() => {    
                console.log(`connected to ${relay.url}`)
                relay.publish(msg.event).then(() => {
                    relay.close();
                    console.log(`relay ${relay.url} has closed`);   
                }).catch((err) => { 
                    console.log(`relay ${relay.url} failed to publish`);
                });
            }).catch((err) => {
                console.log(`relay ${relay.url} failed to connect`);
            });

        } else if (msg.action == "defer") {
            console.log('Defer: ' + "to " + msg.relay);
            console.log('msg: ' + "is " + msg.msg);
            console.log('trigger: ' + "at " + msg.trigger);

            const now =  Math.floor(Date.now()/1000)
            const trg = parseInt(msg.trigger);
            console.log('now: ' + now);
            console.log('trg: ' + trg); 

            // console.log(JSON.stringify(msg,null,2));
            if (trg >= now) {
                console.log("adding Event for later...");
                const ev = db.addEvent({  "type": EventType.NOSTR_DM, "label": "deferred", "creator": "unknown", "trigger": msg.trigger, "dest": msg.relay, "data": JSON.stringify(msg.event) });
            } else {
                console.log('trigger is in the past');
            }

            // const relay = new nt.Relay(msg.relay);
            // await relay.connect();
            // console.log(`connected to ${relay.url}`)
            // await relay.publish(msg.event);
            // relay.close();
            // console.log(`relay ${relay.url} has closed`);   

        } else if (msg.action == "addTimeSlot") {
            console.log('addTimeSlot for ' + msg.hpk + " " + msg.start + " " + msg.duration + " " + msg.satsmin + " " + msg.quote);
            const addedID = db.addTimeSlot({  "label": "add", "creator": msg.hpk, "reservor": "unknown", "start": msg.start, "pause": 0, "duration":  (msg.duration * 60), "satsmin": msg.satsmin, "quote": msg.quote, "currency": "usd", "state": "created"});
            console.log('addedID: ' + addedID);
        } else if (msg.action == "delTimeSlot") {
            console.log('delTimeSlot for ' + msg.hpk + " " + msg.slotID);
            const result = db.delTimeSlot(msg.slotID);
            console.log('deleted...: ' + msg.slotID);
        } else if (msg.action == "resTimeSlot") {
            console.log('resTimeSlot for ' + msg.hpk + " " + msg.slotID);
            const result = db.resTimeSlot(msg.slotID, msg.hpk);
            console.log('reserved...: ' + msg.slotID);
        } else if (msg.action == "cnfTimeSlot") {
            console.log('cnfTimeSlot for ' + msg.hpk + " " + msg.slotID);
            const result = db.cnfTimeSlot(msg.slotID, msg.hpk);
            console.log('confirmed...: ' + msg.slotID);
        } else if (msg.action == "getTimeSlots") {
            console.log('getTimeSlots for ' + msg.hpk);
            const createdTimeSlots = db.getCreatorTimeSlots(msg.hpk);
            // broadcast(JSON.stringify({ type: "timeslots", slots: createdTimeSlots}));
            if ((msg.hpk == eehpk) || (msg.hpk == orhpk)) {
                notify_listeners(msg.hpk, JSON.stringify({ type: "timeslots", slots: createdTimeSlots}));
            } else {
                console.log("No established connection for " + msg.hpk);
            }
        } else if (msg.action == "getBoardSlots") {
            console.log('getBoardSlots for all');
            const boardTimeSlots = db.getAllBoardSlots();
            broadcast(JSON.stringify({ type: "boardslots", slots: boardTimeSlots}));
        } else if (msg.action == "pause") {
            console.log('doPause Action ' + msg.action + " on " + msg.slotID + " by " + msg.pauser);
            notify_listeners(msg.hpk, JSON.stringify({ type: "paused", pauser: msg.pauser, slotID: msg.slotID}));
            if (msg.hpk == msg.pauser) {
                db.setTimeSlotState(msg.slotID, "paused_creator");
            } else {
                db.setTimeSlotState(msg.slotID, "paused_reservor");
            }
        } else if (msg.action == "resume") {
            console.log('doResume Action' + msg.action + " on " + msg.slotID + " by " + msg.pauser);
            notify_listeners(msg.hpk, JSON.stringify({ type: "resumed", resumer: msg.resumer, slotID: msg.slotID}));
            db.setTimeSlotState(msg.slotID, "in_progress");
        } else if (msg.action == "end") {
            console.log('doEnd Action ' + msg.action + " on " + msg.slotID + " by " + msg.pauser);
            notify_listeners(msg.hpk, JSON.stringify({ type: "ended", ender: msg.ender, slotID: msg.slotID}));
            db.setTimeSlotState(msg.slotID, "completed");
        } else if (msg.action == "receive-invoice") {
            console.log('receive invoice: ' + JSON.stringify(msg,null,2));
            // Create the invoice

            // const ln = require('./libln');


            // const newInvoice = await ln.getNewInvoiceInfo({lnd: lnd, tokens: 19, description: "next invoice 19"});
            // console.log(`newInvoice: ${JSON.stringify(newInvoice, null, 2)}`);

            // if (typeof newInvoice == "object") {
            //     const deletedPayments = ln.delPendingPayments(tenantID);
            //     console.log(`deletedPayments: ${JSON.stringify(deletedPayments, null, 2)}`);

            //     const addedPayment = ln.addPendingPayment(tenantID,newInvoice.id);
            //     console.log(`addedPayment: ${JSON.stringify(addedPayment, null, 2)}`);

            // } else {
            //     console.log("Unable to create a new invoice.  Is LND available?");
            // }


            // notify_reservor(msg.reservor, JSON.stringify({ type: "pay-invoice", creator: msg.creator, reservor: msg.reservor, invoice: msg.invoice }));
        } else if (msg.action == "pay-receipt") {
            console.log('pay-receipt: ' + JSON.stringify(msg,null,2));
            ln.getInvoiceResult(msg.response.paymentHash).then((inv)=>{
                console.log('getInvoiceResult: ' + JSON.stringify(inv,null,2));
                if (inv.is_confirmed) {
                    console.log('Payment is complete...');
                    db.delPendingPaymentID(msg.response.paymentHash); // 
                    db.setTimeSlotState(msg.slotID, "in_progress"); // 
                    notify_listeners(msg.hpk, JSON.stringify({ type: "resumed", resumer: msg.resumer, slotID: msg.slotID}));
                }
                // if (db.isPaymentPending(msg.creator,inv.paymentHash)) {
                //     db.delPendingPaymentID(msg.creator,inv.paymentHash);
                //     console.log('Payment is complete...');
                // }
            });
            // check if the payment is valid
        } else if (msg.action == "user-rejected") {
            console.log('user-rejected: ' + JSON.stringify(msg,null,2));
            // Need to figure out if we resend the invoice or not
            notify_creator(msg.creator, JSON.stringify({ type: "rejected", creator: msg.creator, reservor: msg.reservor, slotID: msg.slotID, response: msg.response }));
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

function sendSomething() {

    if ((typeof gsocket == "object") && (typeof gsocket.send == "function")) {
            gsocket.send(JSON.stringify({
            "type": "invoice",
            "data": "something"
        }));
    } else {
        console.log('No websockets listening...be sure to have a rates/chat open and connected.');
    }

}

function broadcast(data) {

    var idx = 1;
    var bidx = 1;
    wsServer.clients.forEach(client => {
        // console.log("client: " + JSON.stringify(client, null, 2));
        console.log("client: " + idx + " " + client.payee + " " + client.payor);
        // if (client.payee != 'unknown') { // Even unknowns get the message
            if (client.readyState === ws.OPEN) {
                client.send(data);
            }
            bidx++;
        // }
        idx++;
    });
    console.log('broadcasted...to...'+(bidx-1));
}

global.notify_listeners = function(hpk,data) {

    var idx = 1;
    var nidx = 1;
    
    wsServer.clients.forEach(client => {
        if (((client.payee == hpk) || (client.payor == hpk))  && (client.readyState === ws.OPEN)) {
            console.log("client: " + idx + " ee:" + client.payee + " or:" + client.payor);
            client.send(data);
            nidx++;
        }
        idx++;
    });
    console.log('notified...'+(nidx-1)+'..of..'+idx);
}

global.notify_creator = function(hpk,data) {
    console.log('notify_creator...');

    var idx = 1;
    var nidx = 1;
    var sent = false;
    
    wsServer.clients.forEach(client => {
        if (((client.payee == hpk) && (client.payor == hpk))  && (client.readyState === ws.OPEN) && !sent) {
            console.log("client: " + idx + " ee:" + client.payee + " or:" + client.payor);
            client.send(data);
            nidx++;
            sent = true;
        }
        idx++;
    });
    console.log('notified...'+(nidx-1)+'..of..'+idx);
}

global.notify_reservor = function(hpk,data) {
    console.log('notify_reservor...');

    var idx = 1;
    var nidx = 1;
    var sent = false;
    
    wsServer.clients.forEach(client => {
        if ((client.payor == hpk)  && (client.readyState === ws.OPEN) && !sent) {
            console.log("client: " + idx + " ee:" + client.payee + " or:" + client.payor);
            client.send(data);
            nidx++;
            sent = true;
        }
        idx++;
    });
    console.log('notified...'+(nidx-1)+'..of..'+idx);
}

global.isConnected = function(hpk) {
    
    var found = false
    wsServer.clients.forEach(client => {
        if ((client.payor == hpk)  && (client.readyState === ws.OPEN)) {
            // console.log("client: " + idx + " ee:" + client.payee + " or:" + client.payor);
            found = true;
        }
    });
    return(found);
}

// =============================================================================    


// Giving up on 'nostr' for now and trying 'nostr-tools' instead
// const {Relay} = require('nostr');
// const {RelayPool, encryptDm, decryptDm, calculateId, createDelegation,
// 	createDelegationEvent, getPublicKey, signDelegationToken,
// 	signId, verifyEvent} = require('nostr');
const {RelayPool} = require('nostr');
const { session } = require('passport');
const { time } = require('console');


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
    try {
        let requrl = "https://api.coingecko.com/api/v3/simple/price?ids=" + ids + "&vs_currencies=" + vs_currencies;
   
        return await axios.get(requrl);
    } catch (error) {
        console.error("An error occurred while fetching the price:", error);
        // throw error; // Re-throw the error to propagate it up the call stack
        return 100000;
    }
}


var bitcoinPrice = 0;
// (async () => {
//     const retval = (await getPrice("bitcoin", "usd"));
//     if (typeof retval.data == "object" && typeof retval.data.bitcoin == "object" && typeof retval.data.bitcoin.usd == "number") {
//         bitcoinPrice = retval.data.bitcoin.usd;
//     } else {
//         bitcoinPrice = 100000;
//     }
//     console.log(bitcoinPrice);
// })();   

getPrice("bitcoin", "usd").then((retval) => {
    if (typeof retval.data == "object" && typeof retval.data.bitcoin == "object" && typeof retval.data.bitcoin.usd == "number") {
        bitcoinPrice = retval.data.bitcoin.usd;
    } else {
        bitcoinPrice = 100000;
    }
    console.log(bitcoinPrice);
}).catch((err) => {
    console.log('Get Bitcoin Price Error: ' + err);
});




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


// Add initial time slots
// const justNow = Math.floor((Date.now()/10000)*10);
// const first = db.addTimeSlot({  "label": "1st", "creator": vacuum8, "reservor": "unknown", "start": justNow + (5 * 60), "duration": 30, "satsmin": 1100, "quote": 11.234, "currency": "usd"});
// const second = db.addTimeSlot({ "label": "2nd", "creator": horologger, "reservor": vacuum8, "start": (justNow + (60)), "duration": 125, "satsmin": 1200, "quote": 12.234, "currency": "usd", "state": 'confirmed'});
// const third = db.addTimeSlot({  "label": "3rd", "creator": horologger, "reservor": "unknown", "start": justNow + (19 * 60), "duration": 20, "satsmin": 1300, "quote": 13.234, "currency": "usd"});
// const fourth = db.addTimeSlot({ "label": "4th", "creator": horologger, "reservor": "unknown", "start": justNow + (40 * 60), "duration": 30, "satsmin": 1400, "quote": 14.234, "currency": "usd"});
// const fifth = db.addTimeSlot({  "label": "5th", "creator": vacuum8, "reservor": "unknown", "start": justNow + (35 * 60), "duration": 30, "satsmin": 1500, "quote": 15.234, "currency": "usd"});

// =============================================================================    

// Add initial events
const ev1 = db.addEvent({  "label": "4later", "type": tictype.EventType.INFO, "creator": "unknown", "trigger": Math.floor(Date.now()/1000) + (1 * 15), dest: "ws://localhost:8080", "data": JSON.stringify({action: "info", hpk: "unknown"})});

// const ev2 = db.addEvent({  "label": "in30s", "type": EventType.INFO, "creator": "unknown", "trigger": Math.floor(Date.now()/1000) + (1 * 30), dest: "ws://localhost:8080", "data": JSON.stringify({action: "info", hpk: "unknown"})});

async function processOutbox(timeNow) {
    // Get all events in the future
    const futureEvents = db.getActiveEvents("trigger", true);
    futureEvents.forEach(async event => {
        // console.log("future event: " + JSON.stringify(event));
        console.log(event.trigger + " <= " + timeNow + " " + Math.floor((event.trigger - timeNow)/60) + " minutes or " + (event.trigger - timeNow) + " seconds away...");
        if (event.trigger <= timeNow) {
            // Process the event
            console.log("Triggering event: " + event.id + " " + event.label + " " + event.type + " " + event.trigger + " " + event.dest);
            console.log("Triggered Data: " + JSON.stringify((JSON.parse(event.data)),null,2));

            if (event.type == 'nostr_dm') {
                const relay = new nt.Relay(event.dest);
                // await relay.connect();
                // console.log(`connected to ${relay.url}`)
                // await relay.publish(JSON.parse(event.data));
                // relay.close();
                relay.connect().then(() => {
                    relay.publish(JSON.parse(event.data)).then(() => {
                        relay.close();
                        console.log(`relay ${relay.url} has closed`);   
                    }).catch((err) => {
                        console.log(`relay ${relay.url} failed to publish`);
                    });
                }).catch((err) => {
                    console.log(`relay ${relay.url} failed to connect`);
                });
            } else {
                console.log("Unhandled Event Type: " + event.type);
            }


            db.setEventState(event.id, tictype.EventState.TRIGGERED);
        }
    });

}

function manageSessions(timeNow) {
    console.log("manageSessions...");
    const numExpired = db.updateExpiredTimeSlots(timeNow, 120);
    if (numExpired > 0) { 
        console.log(numExpired + " expired time slots...");
    }

    db.dumpTimeSlots("start", true);

    // Find upcoming time slots
    var slots = db.getAllTimeSlots4Period("start", true, timeNow, timeNow + (5 * 60), "confirmed");
    slots.forEach(async slot => {
        const insecs = slot.start - timeNow;
        console.log("upcoming: " + slot.id + ": " + slot.start + " >= " + timeNow + " " + insecs + " seconds away...");
        notify_listeners(slot.creator, JSON.stringify({ type: "pending-session", insecs: insecs }));
        if (insecs <= 5) {
            if (slot.state == "confirmed") {
                db.setTimeSlotState(slot.id, "in_progress");
            }
            notify_listeners(slot.creator, JSON.stringify({ type: "in_progress", slots: slots }));
        }
    });

// const timeNow = Math.round(new Date().getTime() / 1000);
// const slot_start = timeNow - 10;   // 100 secs since start
// const slot_duration = 90;
// const invoicePeriod = (1 * 30); // in seconds

// const endsecs = slot_start + slot_duration; // duration is in seconds
// const forsecs = timeNow - slot_start;
// const secsremaining = endsecs - timeNow;
// const durationPerc = Math.round(forsecs/((slot_duration / 100)));
// const invoicePerc = Math.round(forsecs/((invoicePeriod / 100)));
// const invoiceNow = (Math.round(forsecs/((invoicePeriod / 100)))%100 == 0);

// console.log("timeNow   : " + timeNow);
// console.log("slot_start: " + slot_start); console.log("slot_duration: " + slot_duration);
// console.log("forsecs: " + forsecs); console.log("secsremaining: " + secsremaining);

// console.log("durationPerc: " + durationPerc);

    // Find in progress time slots
    const invoicePeriod = (1 * 60); // in seconds
    // var slots = db.getAllTimeSlots4Period("start", true, timeNow - (60 * 60), timeNow + (1 * 60), "in_progress");
    var slots = db.getInProgressTimeSlots4Period("start", true, timeNow - (60 * 60), timeNow + (1 * 60));
    
    var bothConnected = false;

    slots.forEach(async slot => {
        if ((slot.state == "paused_creator") || (slot.state == "paused_reservor") || (slot.state == "paused_pending_payment")) {
            console.log("slot.pause: " + slot.pause + " + timerInterval: " + timerInterval);
            var newPause = slot.pause + timerInterval;
            db.setTimeSlotPause(slot.id, newPause);
        }

        bothConnected = false;

        // Need to check if both the creator and reservor are connected
        if (isConnected(slot.creator)) {
            console.log("Creator connected..." + slot.creator);
            if (isConnected(slot.reservor)) {
                console.log("Both connected...");
                bothConnected = true;
            } else {
                console.log("Reservor not connected...");
            }
        } else if (isConnected(slot.reservor)) {
            console.log("Reservor connected..." + slot.reservor);
            console.log("Creator not connected...");
        } else {
            console.log("Neither party connected...");
        }

        if (bothConnected) {
            const endsecs = slot.start + slot.pause + slot.duration; // duration is in seconds
            const forsecs = timeNow - slot.start - slot.pause;
            const secsremaining = endsecs - timeNow;
            var durationPercent = (Math.round(forsecs/(((slot.pause + slot.duration) / 100))));
            if (durationPercent == 0) { durationPercent = 100; }
            var invoicePercent = (Math.round((forsecs%invoicePeriod)/((invoicePeriod / 100))));
            if (invoicePercent == 0) { invoicePercent = 100; }
            const invoiceNow = (Math.round(forsecs/((invoicePeriod / 100)))%100 == 0);
            const invoiceSoon = (invoicePercent >= 85);

            var numInvoices = parseInt(Math.floor(slot.duration / invoicePeriod));
            const partialFinalInvoice = (slot.duration % invoicePeriod != 0);
            const satssec = slot.satsmin / 60;
            const invoiceTotal = slot.duration * satssec;
            const satsPerInvoice = satssec * invoicePeriod;
            const satsFinalInvoice = invoiceTotal - (satsPerInvoice * numInvoices);

            var periodNum = (Math.floor(forsecs / invoicePeriod)) + 1;
            if (partialFinalInvoice) { numInvoices++; }

            console.log("forsecs: " + forsecs);
            console.log("satssec: " + satssec);
            console.log("duration: " + slot.duration);
            console.log("durationPercent: " + durationPercent);
            console.log("invoicePercent: " + invoicePercent);
            console.log("invoiceNow: " + invoiceNow);
            console.log("invoiceSoon: " + invoiceSoon);
            console.log("invoicePeriod: " + invoicePeriod);
            console.log("numInvoices: " + numInvoices);
            console.log("partialFinalInvoice: " + partialFinalInvoice);
            console.log("invoiceTotal: " + invoiceTotal);
            console.log("satsPerInvoice: " + satsPerInvoice);
            console.log("satsFinalInvoice: " + satsFinalInvoice);
            console.log("periodNum: " + periodNum + " of " + numInvoices);



            console.log("in_progress: " + slot.id + ": " + slot.start + " <= " + timeNow + " " + forsecs + " seconds since start... " + secsremaining + " seconds remaining...");
            // notify_listeners(slot.creator, JSON.stringify({ type: "in-progress", forsecs: forsecs, invsoon: invoiceSoon, invnow: invoiceNow, secsremaining: secsremaining, durperc: durationPercent, invperc: invoicePercent}));

            // Check to see if there are any outstanding unpaid invoices
            // if (db.anyPaymentsPending(slot.creator)) {
            //     console.log("Outstanding invoices! ");
            //     // Notify the creator
            //     // notify_creator(slot.creator, JSON.stringify({ type: "outstanding-invoices", creator: slot.creator, reservor: slot.reservor, invoices: pendingPayments }));
            //     // Pause the session
            //     // db.setTimeSlotState(slot.id, "paused_pending_payment");
            //     db.setTimeSlotState(slot.id, "paused_pending_payment");
            //     notify_listeners(slot.creator, JSON.stringify({ type: "paused", pauser: slot.creator, slotID: slot.id}));
            // }

            // Check to see if there are any outstanding unpaid invoices
            const paymentGracePeriod = 30 * 1000;   // 30 seconds
            db.getPendingPayments(slot.creator).forEach(async payment => {
                console.log("payment: " + JSON.stringify(payment, null, 2));
                const now = new Date().getTime();
                console.log("now: " + now);
                if (payment.created >= (now - paymentGracePeriod)) { 
                    console.log("Payment is still pending...within grace period");
                }
                ln.getInvoiceResult(payment.invoice).then((inv)=>{
                    console.log('getInvoiceResult: ' + JSON.stringify(inv,null,2));
                    if (inv.is_confirmed) {
                        console.log('Payment is complete...');
                        db.delPendingPaymentID(payment.invoice); //
                        db.setTimeSlotState(slot.id, "in_progress"); // NOT WORKING
                        notify_listeners(slot.creator, JSON.stringify({ type: "resumed", pauser: slot.creator, slotID: slot.id}));
                    } else {
                        console.log("Payment is still pending...resending invoice");
                        db.setTimeSlotState(slot.id, "paused_pending_payment");
                        notify_listeners(slot.creator, JSON.stringify({ type: "paused", pauser: slot.creator, slotID: slot.id}));
                        notify_reservor(slot.reservor, JSON.stringify({ type: "pay-invoice", creator: slot.creator, reservor: slot.reservor, slotID: slot.id, invoice: payment.request }));
                    }
                });
            });

            if (invoiceNow && (periodNum <= numInvoices)) {

                // Don't ask the creator to create the invoice
                // notify_creator(slot.creator, JSON.stringify({ type: "create-invoice", creator: slot.creator, reservor: slot.reservor, amtInSats: 10000 }));
                
                const invoiceDescription = "TiC " + shortenString(slot.creator) + " " + periodNum + " of " + numInvoices + " for " + satsPerInvoice +  " sats. Total Budget = " + invoiceTotal + " sats";
                notify_creator(slot.creator, JSON.stringify({ type: "create-invoice", creator: slot.creator, reservor: slot.reservor, invoice: invoiceDescription }));
                // notify_reservor(slot.reservor, JSON.stringify({ type: "pay-invoice", creator: slot.creator, reservor: slot.reservor, invoice: invoiceDescription }));
                // Use the connection to LND to create it
                ln.getNewInvoiceInfo({lnd: lnd, tokens: satsPerInvoice, description: invoiceDescription}).then((inv) => {
                    console.log(`newInvoice: ${JSON.stringify(inv, null, 2)}`);
                    db.addPendingPayment(slot.creator, inv.id, inv.request);
                    // Notify the reservor
                    notify_reservor(slot.reservor, JSON.stringify({ type: "pay-invoice", creator: slot.creator, reservor: slot.reservor, slotID: slot.id, invoice: inv.request }));
                }
                ).catch((error) => {
                    console.error("Error creating invoice:", error);
                }); 
            }

            if (secsremaining <= 0) {
                db.setTimeSlotState(slot.id, "completed");
                notify_listeners(slot.creator, JSON.stringify({ type: "completed", slots: slots }));
            } else {
                console.log("in_progress: " + slot.id + ": " + slot.start + " <= " + timeNow + " " + forsecs + " seconds since start... " + secsremaining + " seconds remaining...");
                notify_listeners(slot.creator, JSON.stringify({ type: "in-progress", forsecs: forsecs, invsoon: invoiceSoon, invnow: invoiceNow, secsremaining: secsremaining, durperc: durationPercent, invperc: invoicePercent}));
            }
        } 
    });

    // Find completed time slots
    // console.log(" Looking for completed time slots... " + timeNow);
    // var slots = db.getAllTimeSlots4Period("start", true, timeNow - (60 * 60), timeNow, "completed");
    // slots.forEach(async slot => {
    //     console.log("completed: " + slot.id + ": " + slot.start + " <= " + timeNow);
    //     notify_listeners(slot.creator, JSON.stringify({ type: "completed", slots: slots }));
    // });

}

// =============================================================================    

// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// --- Uncomment for /socket/chat
var myVar = setInterval(syncTimer, (1 * 1000));

const timerInterval = 10; // in seconds
function syncTimer() {
    const now = Math.round(new Date().getTime() / 1000);
    if (now % 10 == 0) {
        console.log("sync " + now);
        clearInterval(myVar);
        db.addTimeSlot({ "label": "syncd", "creator": horologger, "reservor": vacuum8, "start": (now + (20)), "pause": (0), "duration": (2 * 60), "satsmin": 150, "quote": 12.234, "currency": "usd", "state": 'confirmed'});
        myVar = setInterval(myTimer, (timerInterval * 1000));
    } else {
        console.log("sync in " + (10-(now%10)));
    }
}

function myTimer() {
    const now = Math.round(new Date().getTime() / 1000);

    console.log(now);

    console.log("now " + now);
    const time_event = {
        type: "time",
        time: now,
    };
    broadcast(JSON.stringify(time_event));

    processOutbox(now).then(() => {
        // Handle any post-processing logic here
        // console.log("Outbox processed...");
        manageSessions(now);
        // console.log("Sessions processed...");
    }).catch((error) => {
        console.error("Error processing outbox:", error);
    });

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
