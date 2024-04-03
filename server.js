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

// const favicon = new Buffer.from('AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREQAAAAAAEAAAEAAAAAEAAAABAAAAEAAAAAAQAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD8HwAA++8AAPf3AADv+wAA7/sAAP//AAD//wAA+98AAP//AAD//wAA//8AAP//AAD//wAA', 'base64'); 
const favicon = new Buffer.from('77+9UE5HDQoaCgAAAA1JSERSAAAB77+9AAAB77+9CAYAAADvv73vv70277+9AAAACXBIWXMAAA7vv70AAA7vv70B77+9b++/vWQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmfvv73vv708GgAAIABJREFUeO+/ve+/ve+/vXtUVXXvv70H77+977+977+9XRRM77+9JO+/vQJq77+977+977+9aO+/vWgqYVrvv71a77+977+9Mu+/vXd6U++/vTTvv71Xa1k277+977+9TWk6Sy3vv73vv71M77+977+977+9NU3LlO+/ve+/ve+/vRXvv71o77+977+9F0AQEDhw77+977+977+9Lu+/vQZ677+977+977+9e++/ve+/ve+/ve+/vVnru5Zr77+9dO+/vWfvv73Ym++/ve+/ve+/vTnvv73vv73vv73vv70JAADvv73vv73vv73vv70NAADvv71r77+9AAEAAE0wQAAAQBMMEAAA77+9BAMEAAA077+9AAEAAE0wQAAAQBMMEAAA77+9BAMEAAA077+9AAEAAE0wQAAAQBMMEAAA77+9BAMEAAA077+9AAEAAE0wQAAAQBMMEAAA77+9BAMEAAA077+9AAEAAE0wQAAAQBMMEAAA77+9BAMEAAA077+9AAEAAE0wQAAAQBMMEAAA77+9BAMEAAA077+9AAEAAE0wQAAAQBMMEAAA77+9BAMEAAA077+9bgBASsOGDe+/vXHvv73vv701fu+/ve+/ve+/vSzvv71477+9Dh0B77+9HkYQd0nvv702be+/ve+/ve+/ve+/vSdnZmbvv73vv73vv73vv73vv71477+977+977+93LFjR++/vW1EEO+/vRFvAEEcHm9vb37vv73vv71377+977+977+9TO+/ve+/vXE777+977+9xosXL2Z/f3/vv71tRhBH77+977+977+9PwAMKyAg77+977+977+977+9S++/vd6977+977+977+9aWlp1KdPH++/vXLlirLvv70A77+9Ye+/ve+/ve+/vVksFtq2bRvvv73vv73vv70p77+9fe+/ve+/vQHvv73RowcVFxcr77+9De+/vQLehQXvv702ae+/vSTvv73vv71BRBQZGUkzZu+/vRDvv70N77+9Au+/vUDvv73vv73vv73WrUvvv73One+/ve+/ve+/vQDvv70eSkpKKDQ077+9Llzvv70g77+9A++/ve+/ve+/vQwEDGvYsGHvv73Dg++/ve+/ve+/vdubRu+/vRwp77+9A++/ve+/vWDvv73vv71h77+977+977+9X++/vQUicu+/vT4A77+9AQLvv73Vrl0777+9Fu+/ve+/ve+/vX3vv73vv73vv70tADgEBggYVu+/vXrvv73vv71bICLvv73atWvvv73vv73vv73vv710GwDvv73vv70AAe+/ve+/ve+/vXDvv70n77+9OFMvAHrvv70AAQAATTBAAABAEwwQAADvv70EAwQAADTvv70AAQAATTBAAABAEwwQAADvv70EAwQAADTvv70AAQAATTBAAABAEwwQAADvv70EAwQM77+977+977+9TO+/ve+/ve+/vThTLwB677+9AAHvv73vv73vv73NlW7vv73vv73vv70KCwvvv73vv73vv71U77+9DQDvv71h77+977+9YR05ckTvv70FIiJKS0vvv71uAe+/vSEwQO+/ve+/ve+/vW7vv70q77+9AhE5Tx8AejMREUs3Ae+/vQhBQUF077+977+9Oe+/ve+/ve+/vRfvv73vv71q77+9Uu+/vdat77+93LlzYj0AOArvv71A77+977+977+9Xe+/vUbvv71n77+9Fu+/vWHvv73ChRgeYFg4AwFD77+977+977+977+977+9O3dS77+9bt2U77+9Pnbvv70Yde+/vdqVCgsL77+977+9BlABZyBgaFbvv73vv70SExPvv73vv73vv73vv71K77+977+977+977+9D++/ve+/ve+/vQ9jeO+/ve+/ve+/vQwE3ILvv73vv70fzZ0777+9Ru+/vR5NJu+/vcmh77+9Pu+/ve+/vRMaN24cXe+/vX7doXXvv71F77+977+977+9KTY277+977+977+9fu+/ve+/vfKikpISOnPvv70M77+92LHvv70uXO+/vSDdnu+/vWMEce+/vURGRu+/vWXvv704Ozvvv73vv73vv73vv73vv73Hq1fvv73vv70ePXrvv71v77+9Ue+/ve+/ve+/ve+/vSkpKVXvv73vv73vv71m77+9b++/ve+/ve+/ve+/ve+/ve+/ve+/vXt177+977+9DATcku+/vWLvv70WLVpQ06ZN77+9Yu+/vWh+He+/ve+/vUYXL17vv73vv71n77+977+977+977+9Ou+/vV3vv702LV3vv73vv70ef++/vXHvv73vv73vv71/77+977+9XzRu77+9OCopKXFgZ3A7DBAAcBrvv70aNe+/ve+/ve+/ve+/ve+/vdq3b1/vv73vv73vv73vv73vv6fvv73vv70EXDpUCAMEAO+/ve+/vX3vv73vv71H27Zt77+977+9LVtqfu+/ve+/vQcPUu+/vd6977+977+9MTZG77+9d2EB77+977+977+977+9MEpJSe+/ve+/ve+/vSAi77+977+977+977+9L++/ve+/ve+/ve+/vdSp77+9U2dwJxggACDvv71L77+9Lu+/ve+/ve+/vUzvv70bN++/ve+/ve+/ve+/ve+/ve+/vWnLli1U77+9dm1dXg/vv73vv70BAgBiHnrvv70h77+977+9b++/vV7vv71677+977+9bu+/vW7vv71o77+977+9zaLvv73vv71xB++/vQcCTu+/ve+/vc+P2rVrR82bN++/ve+/vXXvv73SjRs3KCsr77+9Dh8+TDk5Oe+/ve+/ve+/ve+/ve+/vdOTQkNDKTAw77+9TCYTXe+/vX7vv71O77+9Pm3vv71H77+9Dxo077+9Vu+/vVpFPj4+Du+/ve+/ve+/ve+/vULvv73vv73vv73vv73vv73vv70C77+977+9cHfvv73vv70lRhDvv73vv73vv71d77+9dO+/vVPvv71ycnIyW++/ve+/vSrvv73vv73vv73vv73vv73vv70v77+977+9EgcEBO+/ve+/ve+/vTXvv73vv71zD0/vv70477+977+977+977+977+977+977+977+9d++/vVlaWu+/vXvvv73vv73vv73vv71ee++/vTt177+977+9Ju+/vUnvv71nPTNy77+977+9Kn/vv716S05O77+9Wu+/vWrvv71v77+9QSPvv70A77+9CQgI4Keffu+/vVfvv71a77+9V++/vV7vv73vv70v77+977+977+9PO+/vThxInt4eO+/vW/vv73vv73vv73vv73vv73vv70377+9fO+/vQsKCu+/ve+/ve+/ve+/vS5d77+9Dz7vv73vv70HDRrvv73vv70M77+9TO+/ve+/vTbvv73vv73vv70/77+92Lp1K++/ve+/ve+/ve+/vW/vv70BI++/vQDvv71G77+9V++/vR4/77+97LO8ae+/vSYuLi7vv73vv73vv73OnTvvv71B77+9Bu+/ve+/vXbvv73vv71r145P77+9OlXvv73vv70tLi7vv70tW++/ve+/ve+/ve+/ve+/ve+/vXLDhg3Ft++/vd6YTCbvv73vv73vv73vv73vv73vv71PXO+/vc2bN++/ve+/ve+/ve+/ve+/vToYLO+/vQ0gBu+/ve+/ve+/vR/vv73vv71/5K++77+977+9Ye+/vS1O77+9Ps2NGzcW77+91qrSo0cP77+977+977+977+9fe+/ve+/vVYrb9y477+977+9DBnvv73vv71/Ye+/ve+/ve+/vVvvv71vf3Vt3Ljvv73vv73vv73vv73vv73vv73vv71AEW8AMWBMJhM/77+977+977+977+9ZO+/vRLvv73vv73vv71MWlrvv71TXu+/vQkLC1Pvv70GOTk577+9YO+/vQLvv73Wre+/ve+/vTbfnu+/vR5777+977+977+9b++/vXXvv73vv71h77+977+9F++/vQYQA++/vV7vv71677+977+977+9L3N6eu+/ve+/vS/vv70PPu+/vUB8DSrvv73vv73Hh0/vv70477+9fB1O77+9PO+/ve+/ve+/vX/vv73HjRo1El8DX19f77+977+977+9VO+/vQZ377+977+9Z++/ve+/ve+/vWIRXxsDRO+/vQHvv70A77+977+977+977+9Dz/vv73vv73vv73vv73vv71EfzHvv71sNu+/ve+/ve+/vRZf77+9X++/ve+/vWvvv73vv73vv71HSUkJL13vv73vv73bt28v77+9Bu+/vUfvv70WXe+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vQEi77+9AO+/vTHvv73vv708aNCgOz5yW++/ve+/ve+/ve+/ve+/vdeG77+977+9du+/ve+/vXzvv73vv71177+977+977+9TUpKCicmJip/S++/ve+/vc2b77+9N++/vVJW77+977+977+977+977+977+977+9Exfvv714A++/ve+/ve+/ve+/vdOTR++/vRzvv73Hjh3vv73vv70dUO+/ve+/ve+/vXIODg4WX++/vXHvv73vv71JL0Xvv70OHz7vv70jR++/vVR2HyAnJ0d677+977+977+9Yu+/vQrvv73vv73vv73vv70j77+9AO+/vSLvv73vv73vv73vv70XX3zvv71/77+977+9R++/ve+/ve+/ve+/vcaOHSvvv71eW++/vWzvv71e77+9O++/vXjvv70iJyUlOe+/ve+/ve+/vT4+PtKbeUdFRUXvv73vv73vv70r77+977+977+9cO+/vRtA77+9PGbvv73vv73vv71477+9Ce+/vRvvv71aLF7vv71YdO+/vUwmE++/ve+/ve+/vUkv77+9XTIyMnjvv73YsQ7vv73vv73vv73vv73vv70r77+9eXcVExMjfu+/ve+/vWrvv70wRe+/ve+/ve+/vWzvv73vv71D77+90okTJ2jNmjXUokUL77+977+9FhoaKlrvv71x77+977+9Lu+/vUjvv71N77+90qJF77+977+977+977+977+9NHDvv71AXV/vv73vv73Nm07vv73vv70czZs377+9bu+/vWVh77+9QO+/vWJjY2nfvn3vv71677+9amrVqu+/vXQ777+9FhgYKFrvv71u3brvv73vv73vv70IDw/vv71177+977+977+977+93bspLi5O77+977+93bNn77+9bu+/ve+/vQjvv73vv73vv73vv70t77+9LAwQ77+9Re+/vSZNaO+/ve+/ve+/vX3vv71277+977+977+977+9bkcz77+9J++/vTLvv71o77+977+977+92rUrbd++77+9Nm7cqMuZ3L/vv73vv71vHe+/vXLvv71r165J77+977+977+9xK/vv70h77+977+977+977+977+9N++/vXhD77+9cxx62bJl77+977+9egYHB0sv77+9Lm7evMmv77+977+9au+/vW7vv73vv73vv73vv73vv70LF++/vTfvv71KTe+/vTYVP++/vVw477+9DSDvv70ZMGDvv71L77+977+977+9OmbPni3vv73vv73vv73vv73vv73vv73vv706fe+/vTTvv73vv73vv71rXgtneu+/vUlF77+977+977+9F++/vU9cPO+/vQ0gQu+/vVvvv70uL1rvv71I77+9GHbvv73vv73vv70E77+977+93bhx77+977+9Mu+/ve+/vWbvv73vv73SpUs5KChI77+9esyaNUt6E35n1KhR77+977+977+977+9R++/vQFEIMOHD++/ve+/vR0c77+9IDc377+9Ke+/vUzvv73vv73vv71KL++/vUNc77+9eu+/vUfvv70aVe+/vU/vv73vv71MJu+/vT9/77+9dO+/ve+/vdm7dy/vv73vv71V77+9N++/vShM77+9Bg14w4YN77+9x65D77+977+977+9fxdfZ++/ve+/ve+/vStd77+9dk16ORxm77+91q3vv71+WO+/ve+/vWTvv70LF0rvv73Oly9f77+9LVvvv73vv70jBu+/vXgD77+977+977+977+9148vXe+/vSR977+9OlR2djbvv71777+977+9a++/vWsmT++/vSzvv70kDnXvv73vv70VTkxM77+91prvv71MJu+/ve+/ve+/vQ/vv71677+9fO+/vTJ377+977+9UXzvv70wSO+/vRtAHO+/vdq1a++/ve+/vcWL77+9Dljvv73vv70PHy7vv73vv70V77+977+977+977+9Bw8e77+9Xhbvv73vv73vv71sPG/evGpdNjTvv73NvGTvv70S77+977+977+977+93Lp1a++/ve+/ve+/vUARbwBxYCIiIu+/vcyZM++/vQ9UCe+/ve+/ve+/vRNf77+977+9EhISYu+/vUtZ77+9OnLvv70I77+9a++/ve+/ve+/vXUx77+9zbxs77+9MmXvv73vv704cQJv77+977+9P++/vQ0gDsqYMWPvv73vv73Nm++/vQ5QSQsXLmTvv73vv70s77+977+9VSUiIu+/vS3vv71IUVER77+977+977+9C3bvv71g77+9WCzvv73vv71HHznvv73vv71977+977+9OdWlTQNF77+9AUTvv73vv73vv73vv70p77+977+9TtKv77+977+977+977+93J7vv73vv73vv73vv73vv70DB++/ve+/vUzvv73vv70/77+977+977+977+977+977+9Whfvv73vv73vv70rVu+/vXBYLzt277+977+9OnXvv73vv73vv70NGu+/vQYQHdOyZUs+cu+/ve+/vQ5GZ2Hvv71aee+/vcqV3KJFC++/vTXvv71OPD09edKkSW5xNnLvv73vv71h77+977+977+977+9Whfvv73vv73vv70rV++/vdS977+9DRs277+9ce2OjXgD77+9TnnooYc4Oztb77+977+977+9We+/ve+/ve+/ve+/ve+/ve+/ve+/vXnvv73EiS5/Le+/ve+/vc+P77+9ee+/vRnesGHvv73vv70vM17vv71y77+9e++/ve+/vWnXmlgsFl7vv71677+9bu+/vVfvv71Y77+977+977+977+977+9P2vvv71H77+9AUTvv73vv70bN++/vUtLS3U777+977+977+977+906d577+977+977+977+977+977+9aO+/vSURV++/ve+/ve+/vS/vv73vv73vv73vv73cuXM5IyNDeu+/vXVn77+9Wu+/ve+/ve+/ve+/ve+/ve+/ve+/vWvXru+/vXHvv73vv73vv73vv70777+9PTEDRe+/vQHvv70G77+977+977+9cO+/vU/vv73vv73vv73IkSM8fe+/vXTvv73Qoe+/ve+/ve+/ve+/ve+/ve+/vWTiiIgI77+9Nm0a77+977+977+9Su+/vSh0NWfvv70c77+9Pu+/ve+/ve+/ve+/ve+/ve+/vdev77+9XO+/ve+/vV4T77+9Oe+/vVHvv70bQDTvv73vv73vv73vv70w77+9Wzp/77+9PO+/ve+/ve+/vRt477+977+9bWnbti3vv73vv73vv71bTu+/vTTvv73vv73YsmULBwYG77+9de+/vS0WC++/ve+/ve+/ve+/vXrvv703b++/vciRI++/vX9mbhbvv70GEA3vv71X77+9Hu+/vdq177+9Qe+/ve+/vRrvv73vv73vv73vv71s77+9Mu+/ve+/ve+/ve+/veWGu++/vWw2c0xMDC9a77+977+9b9y4Ie+/ve+/ve+/ve+/vWPHjnFwcO+/vV3vv73dr18/PnTvv73vv70dX++/ve+/ve+/ve+/vT/vv73vv71zDg0NFe+/vTnvv71bTO+/ve+/vQNcSHBwMG3Zsu+/vdq3by/diibvv73vv73vv73vv73vv73vv73vv73vv73vv73Fiyk7O1vvv70d77+9U++/vU4dGj58OCUlJVHLli3vv73vv73vv73vv73UqVPUp08f77+9cO+/vV3vv73vv73vv71d77+9Uu+/ve+/ve+/ve+/vX3vv73vv73UqFEjKiws77+977+977+9LNq7dy9t2LDvv73Onz/vv73Yhu+/vUrvv71TDO+/vT9hYWEueznvv71v77+94YSEBO+/vW3vv70U77+977+9zInvv73vv73vv71t77+9Nu+/vR/vv70m77+9z5/vv71Z77+977+9R++/vQHvv73OtG3vv73vv73vv70e77+9aO+/ve+/vXjDhg0cHR0t77+9fkZO77+9Tu+/vXjvv73vv73vv71s77+9Wu+/vX/vv73Vku+/ve+/ve+/vW/vv70wUO+/vRtA77+9SMeOHV3vv73vv70777+977+977+9ee+/vcqV3LZtW++/vXPvv73vv73vv73vv73vv73vv73Vq++/vWbvv71J77+9Anbvv71277+9Gnfvv73vv71ZfO+/vRBNEW8A77+9SyIjI13vv73vv73btm3vv73vv73vv71I77+9dXPvv71r147XrFkj77+9K++/ve+/vcaNG++/ve+/vUMP77+977+9G1Lvv70377+977+9Ie+/vTt377+977+977+9XO+/ve+/ve+/vS7vv71277+977+9Hj1677+977+9Ge+/ve+/ve+/ve+/vd2b77+977+977+9K++/vWvYpe+/ve+/ve+/ve+/vXTvv70i77+9Zkjvv70i77+9AFJFWu+/vWrvv71ZWVnvv73vv73vv71dXe+/vXTvv73Hjh3vv73vv73vv71OGu+/ve+/ve+/vU8877+9S++/ve+/vSIjI0Pvv71377+9IyIRbwDvv70kLVrvv73vv73vv73vv71M77+977+977+977+9SktLee+/vcyZ77+9fcSI77+977+977+977+977+9M2fvv73ksrIy77+9XeeOlixZIu+/vVbvv73vv70RbwDvv70t77+977+977+977+9J09KH++/vXd077+977+9Ae+/ve+/vXDvv71ERkY677+9Y1JsNlvvv73vv73vv70KEe+/vXgDSO+/vQQEBHBaWu+/ve+/vTFc77+977+977+9Ak5KSu+/ve+/vUbvv73vv73vv71i77+977+977+977+977+9OS8vT3rvv73vv73vv70HH3wg77+9Ru+/vV0RbwDvv70l77+977+977+9Tu+/ve+/ve+/ve+/ve+/vRQOCQkRXydE77+9NG3alHfvv73vv70h77+9a++/vU52djZ7eHjvv73vv70PcteIN++/ve+/ve+/vQULFkgf77+977+977+9Wu+/vTx977+9dO+/vXUYNBbvv73vv73vv71N77+977+9dB9C77+9O++/vVwi77+9DSBEPHXvv71U77+977+9UidP77+9xL0ON0l0dDTvv73vv73vv71L77+9cu+/vRk9eu+/ve+/ve+/vSB377+977+9QO+/vdChQ2nGjBnvv71t77+9zr/vv73vv71v77+90qULHThwQO+/vRVQYO+/ve+/ve+/vdSxY0fvv73oo4/vv71bISLvv70GDRpI77+9AHfvv70BIu+/vUPvv70O77+977+9H++/ve+/vWTvv71u77+9N2VlZe+/ve+/ve+/ve+/ve+/ve+/vQ4dSjdu3JBuBxTvv73vv73PpxEjRtCYMWPvv73vv73vv71U77+9F29vb++/ve+/vXB3GCDvv73vv73WrUvvv71/77+9OdWqVUvvv73vv73vv71c77+9fO+/vWJjY2nWrFnvv73vv73vv73tgJDFixdTfHw8Xe+/vXpV77+977+977+977+9fO+/ve+/vWAfDBAhZu+/ve+/vVbvv71YQe+/ve+/vX/vv710K++/vUlLS++/ve+/ve+/vWjvv73vv73vv71bASfvv73vv73vv73vv70iIyNp77+977+977+9Iu+/vc+ePStSF++/vUfvv71G77+9O2bGjBnvv73vv70ob++/ve+/ve+/ve+/vRPvv71I77+977+977+977+977+9L++/ve+/vULvv70+2bRpU++/vW1H77+9Gu+/vQbvv70u77+977+977+9Tu+/vTjvv71577+977+977+9OVbvv70dYzbvv73vv71vf++/ve+/ve+/vX3vv73QoUPvv73bjO+/vRXvv70G77+9Ku+/ve+/ve+/vXfvv70v77+977+977+9bDx977+9dO+/vTVBXCcv77+977+9Au+/ve+/ve+/vTt877+9HD9+77+977+977+9InZF77+9Ae+/ve+/ve+/vWzvv70tW++/vTjvv73gs4fvv71q77+9Z++/vX1WfE0Q77+977+977+90aMdegZ977+977+9ZVxOde+/ve+/vTfvv702ee+/ve+/vR1277+9VUdZWRk/77+977+977+977+964G4bu+/vQ4dyqXvv73vv70O77+9P0fvv70YIe+/vX3vv73vv70Rb++/vS3SsWNH77+9HXDvv71RUlLCgwcPFl8P77+977+977+977+977+977+9RUVF77+977+9H3/vv73vv73vv712IdWKeAPvv73vv73vv73vv70XHzp0SO+/vQNN77+977+977+9Yn7vv71H77+977+9AzFOeu+/ve+/ve+/vRN977+9bu+/vcq+77+977+977+924RUK++/vQ0YPm/vv73vv70uB1hN77+977+977+977+9H++/ve+/vQfvv71A77+977+9Tu+/vTrvv70/77+9WO+/ve+/ve+/vT7vv73vv71wzYg3YO+/vTjDpSvvv73Nhhvvv71DU++/vV4977+977+977+9D++/vWbvv71Va++/ve+/ve+/ve+/ve+/ve+/vcOH77+977+977+9aO+/vXgD77+977+977+977+977+9U3w51Isv77+9KO+/vRbvv717JDw877+977+9f++/vX3vv71277+977+9He+/vcmDBw/vv73vv73vv73vv73vv71uKxfvv73vv71/77+9A0zvv70y77+9Zs6cKe+/ve+/vV/vv73vv71X77+9Nm3vv71oD++/vX4sFgtFRERQ77+9Dh3vv71+77+977+977+977+977+9R3l5eXTvv73vv71Z2rdvH2VmZkrvv70IOu+/vQBx77+9Zs2a77+977+977+977+9RR/vv73vv71m77+9Gho2bBge77+9CAAO77+977+9KTrIvHnvv71E77+9R0pKCu+/vRgxAu+/vQMAHAZnIA4wcO+/vUBa77+9bu+/vVjvv73vv73vv71077+977+977+977+977+977+9bO+/vR4A77+977+9MEB077+977+977+9Q8ePH++/vRYtWu+/ve+/vS8sLO+/ve+/vd27U1pa77+9SH0AcB/vv73vv73vv73vv70JEybvv70NDyLvv73vv717Du+/vQMA77+977+9Ge+/ve+/ve+/ve+/ve+/ve+/vcyZMxQQECBS77+977+9d96h77+9XnpJ77+9NgDvv70f77+977+977+9aO+/ve+/ve+/vWLvv70jNTXvv71eee+/vRXvv73vv70A77+977+9cAbvv73vv73WrVvTkSNH77+977+977+9U3nvv73vv73vv70877+977+977+977+977+977+9dO+/vQHvv71977+9DEQnM2bvv70QGR5ERH/vv73TnzA8AEA577+977+977+9fe+/ve+/vXTvv73vv70hMu+/ve+/ve+/ve+/vWXLltGoUe+/ve+/ve+/vQUA77+9AO+/ve+/vWfvv719Ru+/vT3vv73vv73vv70uXe+/vXbvv73vv71Rbm7vv73vv73vv70AAO+/ve+/vVVD77+927fvv71B77+9Bu+/ve+/vX7vv73vv70wPABADAZIDc2YMUPvv73vv73VkiVLaO+/ve+/ve+/ve+/ve+/vQIA77+9Cu+/ve+/vWrvv71N77+9NnTvv73vv71xMu+/vUxK77+9Xu+/vXLvv73atGnvv73vv70PABDvv70z77+9Gnjvv73ll5UPDyLvv71J77+9JmF4AO+/vTjvv73vv71o1KBBAzp/77+9PO+/ve+/ve+/vSjvv73vv73vv73vv71M77+977+977+9eO+/vS4A77+977+9Ge+/vUYTJkxQPjzvv71WK++/vRs3Du+/vQMA77+977+977+9dAPvv73vv73vv73fn8aNG++/ve+/ve+/vUXvv73vv73EiRPvv73vv70C77+977+977+97qOBAwdSz549KSQk77+9AgMD77+977+977+977+9Ll7vv71IaWlp77+9be+/vTbaunUrWe+/vVbvv71WQRHvv73vv73vv71177+977+9HTtW77+9N++/ve+/vSo3N++/ve+/ve+/ve+/vcS3HXHvv71ERETvv71N77+977+977+977+977+977+977+977+9Tz/vv73vv70v77+977+9Mu+/ve+/ve+/ve+/ve+/ve+/vTg877+9De+/vVzvv73vv73fr2Bk77+9au+/ve+/ve+/ve+/vduN77+9X++/ve+/ve+/vXnZsmVs77+92arvv73vv73vv73vv73vv70P3LlzZ++/vW1AHBrvv70GXCpRUVEOGA9377+977+977+977+977+977+9EO+/ve+/ve+/ve+/ve+/vQkTJnBeXl7vv73vv73vv73vv73vv71ifu+/ve+/vcS3B3FY77+9G3Dvv70sWe+/vUTvv73vv71g77+977+9f15877+9Ee+/ve+/ve+/vT/vv73vv73vv73vv73vv73vv73vv73vv73vv70cGxsr77+9Xe+/vUMi3oDvv70kMDDvv70LCwt1O++/ve+/vXHvv73vv70577+977+977+9Eu+/vXbvv73vv73vv73QoQNv377vv70h77+977+9K1fvv71+77+977+977+924jvv70b77+977+977+9Gu+/vQ4dSn5+fkpr77+977+977+9VFpa77+977+9Ju+/ve+/ve+/ve+/vSBa77+9YAEdOHDvv73vv73vv73vv70cUu+/ve+/vXvvv73Zs2c777+9Qe+/ve+/vRRz77+977+93Lnvv70hf++/vVXvv73vv73vv73vv73vv73vv73vv70p77+93Ygx77+977+977+977+9Y8eO77+9V++/vSrZn++/ve+/ve+/vTg0NFR877+9Ee+/ve+/vTMQOzVr1oxiYmLvv73vv71877+977+9d++/vX56cO+/vd69e++/ve+/ve+/vQdp0aJFFBQU77+977+977+977+9Yu+/vWfvv719VkktUEd877+977+9Ql5577+9FSV/77+977+9Kicn77+977+977+977+9xbcbMVZa77+9au+/vRs3blTvv70vV3Tvv73vv70x77+9NUDvv70L77+9QO+/ve+/ve+/vVNPKe+/ve+/vXDvv71CKigoUFoT77+977+977+935/vv71P77+9Tmlpae+/ve+/ve+/vSDvv71H27Zt77+9Tu+/vTpi77+9QX/vv71T77+977+9Ex4e77+977+977+9NO+/ve+/vcqNGzcW77+9bu+/ve+/vWM277+9ecyYMXzvv73vv71l77+977+977+9a++/vU58XRB977+9Z2Hvv71h77+977+977+9Su+/vW3YsO+/vS5e77+977+977+9JhhP77+9Xu+/vWjOnDkUEREh77+977+9LXAGYhzvv73vv71lB++/vV9Z77+9cO+/vULvv73vv73vv71Y77+9NGlCy5cv77+9HTt2OO+/ve+/vSAiKiws77+9bgF077+977+9A++/ve+/vSZN77+9UEZG77+977+9L++/vUpPT++/ve+/ve+/vVDvv73vv71sSu+/vXHUqlXvv73vv71M77+9Qu+/vSZNIl9fX++/vXbvv71077+977+90rVr16Tvv70AHe+/vRLvv71dDBo0SO+/vQ4uXu+/vRjvv70D77+977+9ZDLRk08+Se+/vWbNoiZN77+9SO+/vXNHFy5c77+977+9MBAM77+977+9SExMVFbvv73vv71p77+9ypXvv73vv73vv73vv73UqRPNmTNH77+9Z++/ve+/vdq0ae+/vXQL77+9M++/vTvvv73vv70aHx8fLioqUu+/ve6UnTt377+9bzPvv70aadSoES9d77+91K7vv73vv71wJt26dRNfO0Tvv73vv70M77+9DmJiYu+/vV5L77+977+944+V77+9Au+/ve+/ve+/ve+/vU1JSUk0de+/vVTvv71d77+977+9dDvVsn3vv7122rVr77+9dBvvv70jDO+/vTvvv73vv73vv71XVu+/vWrvv73Sp++/vX7vv73vv70e77+977+9Qe+/vQbvv73vv71v77+9Te+/ve+/vX/vv710K++/vVZaWkov77+977+977+9dBvvv70zDO+/vTvvv73Tp++/ve+/vVo7duygnO+/vRxl77+977+9de+/vWnThu+/vXnvv70d77+937/vv710K++/ve+/vR8/77+977+9Hz8u77+9Bjjvv73vv711NGdM77+9eu+/ve+/vV5ffu+/vRfEtxlx77+91KtX77+977+9z5/vv71W77+9Ve+/vX7vv70I06ZNE19L77+9YRFv77+9Ke+/ve+/ve+/ve+/ve+/vQDvv73vv71s3KRJE++/vW1G77+9Ix4eHu+/ve+/vS9ydnbvv73vv71977+9EQoKCnjUqFHvv73vv704cF8l77+9VHR077+977+9Wu+/ve+/ve+/ve+/ve+/ve+/vUxl77+977+9ee+/ve+/vdOH77+9zJlDYWFh0q3vv73Ipk3vv70oKSnvv73OnDkj77+9CjgQHmVS77+977+93bsr77+977+977+9V18p77+9Bc6pZcuW77+9Zu+/vRraunXvv71LD++/vR9+77+977+9EhMT77+9Rx7vv73vv71wE++/vUHvv70WDw8P77+9ceOGslPvv71e77+9eu+/vW8zIu+/vVrvv71q77+977+977+907nvv73vv71Y77+977+977+9CO+/ve+/ve+/vTxl77+9FO+/ve+/ve+/vRJfU0Rp77+9G3Dvv71077+977+9SdmBV1BQ77+977+977+977+977+924zvv73vv73vv71k77+9ESNG77+9Tz/vv73vv71sX3Pvv73vv73vv71yXu+/vXw5169fX3xNEe+/ve+/vT3vv71KREZGKu+/ve+/vXPvv71OKikpUVYP77+9RUVF77+93Llz77+977+9Z3Pvv70dO3ZQUlISHT58WO+/vRUQ77+9eyDvv73vv73Qoe+/ve+/vVo7d++/vVRWC2Q1btyY77+9L19O77+9d++/vXbvv73vv71x77+977+9BRo5ciTvv73vv73vv71heO+/vTnvv73vv71UQu+/vQDvv73vv70d77+977+977+915fGjx9P06ZNI39/f++/vXY0Kyoq77+92bNn77+9zJkz77+977+977+9WO+/vR1wEu+/ve+/vdGcLTk5OUrvv70f77+977+977+977+977+977+977+977+977+9Iu+/vUtiYiLvv707d07vv73vv73vv70oNu+/ve+/vdesWe+/vc2aNRNfT++/ve+/vSLegFPvv71Z77+9Zu+/vQ7vv709e++/ve+/vW8v77+9REZGcnJy77+977+9fe+/vVFSU1Pvv71H77+9Hu+/ve+/vThncA/vv70277+977+977+977+9au+/ve+/ve+/vSrvv70FatSrV++/ve+/vc6dS3vvv73upZ49e0rvv73vv73ZpUvvv73vv73vv73nn6fvv71d77+977+9d++/vX0n77+9Djgp77+9A++/vU3vv71W77+977+977+977+9DUjvv73vv73vv73vv73vv70/77+977+9T++/ve+/ve+/vVNAQO+/vXQ777+977+977+977+977+9woUL77+977+9V1/vv73vv73vv71877+9du+/ve+/vWHvv73vv71G5aOy77+977+90pTvv70Cx4nvv73vv73vv73vv71z77+977+9J8iJ77+9Nm7vv71IEyZM77+977+977+9dO+/vVbvv73vv73vv71fR3Pvv71s2rRJybXvv73vv73vv71y77+977+977+9F++/vV5Ee1rvv71u77+9bH9x77+977+9x4/vv73vv70PPyzvv73vv73vv71LRu+/vQHvv73vv73Jkyfvv70c77+9Z8+eFe+/vVZEW++/vdat77+9M2fvv73kkpISJe+/ve+/ve+/vWRnZ++/vQkT77+9Yu+/ve+/ve+/vSnvv70Rb++/vWliNu+/ve+/vT3vv71o77+977+977+977+924tUf++/vRgxYgRf77+9fFnvv70+77+9KFbvv73vv70XLVrvv71BQUHvv71r77+977+9dnAP77+977+9Ru+/vRrvv73vv73vv73vv73vv71aZ8+eVVIH77+9ERcXR3Pvv73vv71R77+9IVNH77+977+9bygpKe+/ve+/vR49Ku+/vQoYAO+/ve+/vVtB77+9Ru+/ve+/ve+/vcKj77+9XUPTpk1p77+977+977+9fe+/vXbvv70eHu+/vU/vv73vv70hQ++/vVB8fDzvv70H77+9BmcgFTRs77+9UFkt77+977+9OO+/vVrvv71q77+977+9yZNpypQp77+977+977+9I92OZgUFBe+/vX/vv73vv73vv71677+9LTzvv70TdO+/vQFSQe+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVBWC++/vWcy77+977+9D3/vv70D77+977+9H++/ve+/ve+/vU3vv71K77+977+977+977+9Zu+/ve+/vT/vv73vv70mT++/vUzvv70vX++/vW4HDAoD77+977+977+977+9YGXvv70uXe+/ve+/ve+/vRbYp0vvv70uNGfvv70c77+977+9Ru+/vQh777+977+9CRMm0J49e++/vVsB77+977+9Pe+/vQpU77+977+977+977+977+9UXZ277+977+9WnB377+977+977+977+9aO+/vSLavXvvv71LD++/ve+/ve+/vUwaOXIkde+/ve+/vQ3vv70D77+977+9GUgF77+977+977+9Su+/vVzvv71877+9bDbvv73vv71aUDUPDw/vv708eTJN77+9Ou+/vWrVqiXdjmbvv73vv73vv700a++/vSx677+977+977+977+977+9zZvvv73vv70b77+9AO+/ve+/vXbvv73vv71K77+9XO+/vXJFSR3vv71a77+9Bg3vv73vv71PP++/ve+/ve+/vRjvv71WNGNmWu+/vWoVTe+/vTLvv70yMzPvv73vv70BN++/vQFSQe+/vTp177+91Ll+77+977+977+9OlDvv73vv73vv71g77+977+977+9b++/vT44U2/vv73vv73vv73vv73vv73vv71E77+9f++/ve+/vXQr77+977+9cA/vv70CVWcgN27vv71QUgd+77+977+9x4fWrl3vv73vv73jp59+77+9Z++/vXnvv73vv73vv73vv70xPEAc77+9QCrvv70AMe+/ve+/vV5777+977+9dO+/vSLvv71G77+9We+/vVZa77+9YAEe77+9Dk4FA++/vQJVN1IxQGQ0b96cJk3vv70k77+9Ru+/ve+/vV3vv73vv70mTe+/ve+/vQ/vv73vv73vv73vv70A77+977+9Yu+/vSjvv73vv71377+9yJg4cSJ5enpK77+9Ye+/ve+/vUfvv71SUlISfe+/ve+/vTfSrQBUCu+/vUAqMO+/ve+/vSxHeXnvv73vv70677+9X2bvv73vv73vv70MGSLdhl1yc3MpKSnvv70iIiIwPO+/ve+/ve+/vQzvv70CDBDvv71q167vv73Sh2VqUVZWRgsWLO+/ve+/vdOnU05O77+9dDsAd++/vQFS77+977+9Ae+/vQ8R77+977+977+9Aw9I77+9cEfbtm3vv73vv73vv70kOn7vv73vv710KwB277+9Je+/vQpUDRBmVlIH77+977+9Qe+/vQbvv70tVO+/vcyZMzRk77+9EO+/vdu3L++/vQfvv70c77+977+9VO+/ve+/ve+/ve+/ve+/ve+/vUtJHe+/vS9n77+9ee+/ve+/ve+/vU9v77+977+9Js2dO++/vUpLS++/ve+/vQHvv70EA++/ve+/ve+/ve+/vWIldVR977+9Ie+/vVdubu+/vXQLRO+/ve+/vR8pS++/vS7vv73vv71T77+977+9Me+/ve+/ve+/vTBAKlA1QFzvv70L77+9XO+/vcmTJ++/vVvvv73vv71777+90oQJE2jvv73vv73vv73SrQDvv70C77+9QCpQNUB8fX3vv73Uge+/vTpw77+977+977+9N++/vV3vv71w77+977+9fO+/vUnvv73vv73vv73vv73vv70AQ++/vQDvv71A77+9B++/vVzvv73vv73vv70qPz/vv73vv73vv73vv71r77+9Ne+/ve+/ve+/ve+/ve+/ve+/vV/vv702be+/ve+/ve+/vdWr77+977+9CTAcDO+/vQpU77+977+977+9c++/vT1K77+977+977+977+9z5/vv73vv73vv73GjRspPDzvv73vv71P77+9TkVFRe+/ve+/vQLvv73vv70BUu+/ve+/vcesBwUFKe+/vQPvv73asmUL77+93LnToTXvv73vv73vv71PPXvvv73vv73vv73vv71EOn/vv73vv71DawFI77+9AO+/vUDvv73vv73vv73Wq1dPSR3vv73vv73vv71/77+9CgoKdH/vv73Lly/vv71z77+9PUdRUVHvv73vv73vv73vv73vv73vv70DOCMM77+9ClQN77+9e+65h0wm77+977+9WnDvv71T77+9Tu+/vR/vv73vv71H77+9HidTWlpK77+9Z8+mVu+/vVrRhx9+77+977+9DO+/vVvvv73vv714K1A1QO+/ve+/ve+/vSgoKO+/ve+/vV7vv73vv73vv70e77+9at26dTRk77+9EO+/ve+/ve+/vWvvv73vv73vv70NGzbvv71LL++/vUTvv71P77+91rE777+9S++/vTp1KDw877+9GjVqRBbvv73vv71u3rxJ77+977+977+977+977+9Dz9QWVnvv710e++/ve+/ve+/ve+/vRkzZgzvv73SqVMn77+977+9de+/ve+/vW/fng8fPlzvv73dkSNH77+9b9++77+977+9I++/vU9AQABP77+9OO+/vXfvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv715zZo13L9/fzbvv71M77+9Pe+/vXjvv70bcO+/vQwePO+/ve+/vWEJ77+9UAAAFFBJREFUc++/vW7vv70GDRLvv71e77+977+9Yu+/ve+/vVHvv73vv73vv73vv73vv71377+977+9HThw77+9R++/vRrvv70W77+9Re+/vW/vv73vv714enrvv71LL++/ve+/vXl5ee+/vToODx4877+9PXrvv70Q77+977+9VWPvv73vv70fQETvv707d++/ve+/ve+/vVQl77+9Jkzvv71A77+977+977+977+9WmDvv73WrVtTbGws77+9ae+/ve+/vUfvv73vv73vv73vv71PdO+/ve+/vQnauXMn77+9OnVK77+9Q++/vUxwcDDvv71Z77+977+9eu+/ve+/vem/t++/vWzvv73vv71v77+966+/77+9e1ga77+9TzFnSe+/ve+/ve+/ve+/ve+/vVBU77+9O++/vSPvv73vv70I77+977+9adasGe+/vT17Vu+/vWNy1apVOO+/ve+/vWbvv70u77+9Cu+/vV7vv73vv73vv73vv73vv71t2rRRUgfvv73vv70CAgJo27ZtFBIS77+977+977+9DRs277+977+9eu+/vS1dXu+/vV1g77+9VO+/ve+/vXTvv73vv70FJe+/vdq2be+/ve+/vQ7vv71RLVzvv73vv71a77+9au+/ve+/vWtO77+9NO+/vQYMGO+/ve+/vWsaGQbvv71tMjIy77+977+9adasGe+/ve+/vQXvv71RfHw8DRs2TO+/ve+/vTXvv71MNG/vv708fOWCnTBAbnPvv73vv71ZJXXvv71mMy5jAWjvv73qq68677+9Q0JC77+96aefdu+/ve+/vRsJBu+/vW1O77+9OO+/ve+/vVZERO+/ve+/vVoARtG6dWvvv73Vq++/vUNr77+9HTvWoe+/vW8UGCDvv71ROUA6deqkrBbvv71RPO+/ve+/vQ7vv70RFRXvv73vv71b77+977+9ahgg77+9UTlAOnfurKwW77+9Ue+/ve+/ve+/vTrvv73vv73vv71k77+977+977+9KO+/ve+/vXF1GCDvv73vv73vv73MpO+/ve+/vXwl77+9OnTogJt1AO+/vWA277+9KTo6Wkkt77+977+977+9ZUQYIO+/vWFmZWchXl5e77+9DwJQDW3btu+/ve+/vXXvv70q77+9FRgY77+977+977+9K++/vQDvv73EgQMH77+977+9cu+/ve+/vUAAI++/ve+/ve+/vVFW77+9au+/vSrvv73vv70wQCrvv71/77+9fmXvv70efO+/vUFl77+9AFzvv73vv73vv71dae+/ve+/ve+/vR1cGQZIJe+/ve+/vdun77+9VkxMDFksFmXvv70AXO+/ve+/vWTvv73evXsr77+9d++/ve+/vVFl77+9XBUGSCXvv70dO++/ve+/vVh177+977+977+977+9eQHvv70QHh5O77+977+977+9Smrvv71sNu+/ve+/ve+/vV0VBkgl77+977+977+977+90KFD77+977+977+977+977+9X1ktAFfVp08fZe+/ve+/vR49Snl5ee+/ve+/vSoM77+9Ku+/vdq1S1nvv73vv73vv70EZe+/vQBc77+977+9Ae+/ve+/ve+/ve+/vSvvv73vv73vv70wQO+/ve+/vXPvv71OZe+/vTp177+9RA0bNlRWD++/ve+/ve+/ve+/ve+/vVNcXO+/ve+/vXrvv71977+977+977+9Wu+/vQwD77+9Cu+/ve+/ve+/vVReXu+/ve+/ve+/ve+/vWzvv71lLO+/vTsYMGAA77+977+977+9KO+/ve+/vTMQ77+9YO+/vVTvv73vv73vv73rlJbvv73vv73vv73vv73vv70/77+977+9Fu+/ve+/vRk8eO+/ve+/vVo/77+977+9I++/ve+/ve+/vSvvv73vv73vv70wQO+/vWDHjh3vv71q77+977+925fvv73vv70eZe+/vQBc77+977+977+977+977+9L3natm3vv73vv71a77+9DgPvv70O77+977+977+9W2Xvv708PT1p0KBB77+977+9Ae+/ve+/vQEDBlDvv706de+/ve+/vdu6de+/ve+/vVrvv70OA++/vQ7vv71v77+9Tu+/ve+/ve+/ve+/ve+/vQ0ZMkRZLQBX77+977+9y51sNu+/ve+/vT8cXR0G77+9HRQWFip9N1bvv73eve+/vX1QCu+/vRUEBAQo77+9fO+/vX/vv71+77+9du2asnrvv70OA++/vS7vv73vv73vv71LZe+/vTw8PGjEiBHvv73vv70BOO+/vSfvv71477+9fH1977+977+927x577+977+9WkZgIiLvv71uwpnvv73vv73vv70o77+977+9dCLvv70ffu+/ve+/vdq0aUPvv73vv73vv70A77+92bNH77+9FztFREQofQrvv73vv73vv70Z77+9Xe+/ve+/ve+/ve+/vcmTJ++/ve+/vWvVqu+/ve+/vUdWAzjvv70HHnhA77+977+9OH/vv708HT58WFk9I++/vQDvv73vv71n77+9fe+/ve+/vd64ce+/ve+/vQNwRi/vv73vv73vv73vv716X3zvv70F77+977+977+9Ce+/ve+/ve+/vdC+fXvvv70fKu+/vVrvv70UEhJC77+977+977+977+9agI477+977+977+9AO+/ve+/ve+/vSR/f39lNWNjY++/ve+/vWnvv70IcAZi77+9I0fvv73vv73vv73vv73Hle+/ve+/ve+/ve+/ve+/ve+/vWPvv70q77+9B++/vWxG77+9Hu+/vXR4ZGVlUUpK77+977+9ekbvv70BYu+/vTVr77+9KO+/vTdu77+9OO+/ve+/ve+/vQFwFh4eHjRh77+9BO+/vTVX77+9Wu+/ve+/ve+/vXdG77+9AWIn77+9A++/ve+/vXvvv73vv71beu+/vS0NHTrvv73vv701a++/ve+/ve+/vRUr77+977+9Mwrvv70D77+977+977+977+9VO+/vdy577+977+9eu+/ve+/ve+/vdS6dWsqKytTVhNA77+977+977+977+9KTIyUlnvv70TJ05QWFjvv73vv716Ru+/vTPvv71qWO+/vWTvv73vv716ISEh77+977+9U08p77+9CSDvv71HHlE6PO+/vXDvv71REzgD77+977+977+977+9AO+/vXTvv70S77+977+977+9Ke+/vXnvv73vv71JCg8PJ++/vc2m77+9Ju+/vQTvv73vv71E77+977+977+91KlTJ2U177+977+977+9KSQk77+9MjIy77+977+9NBLvv73vv71UQ15eHn3vv73vv70XSmvvv71p77+9Bmch77+9FgYOHO+/vXR4EO+/ve+/ve+/vRIM77+977+9Ye+/ve+/vTzvv73vv71D77+92rlz77+977+977+977+9W3zvv70R77+9UTHvv73vv71877+977+9Qe+/ve+/ve+/vSPvv708Iu+/ve+/vS4e77+9BlwqJu+/ve+/vU/vv70477+9fEcfP37vv73vv73vv70j77+977+9Mnzvv71w77+977+91I8/77+977+9Fu+/vUV877+9XTnvv73vv71VTe+/vUzvv73vv73vv71TXnfvv73UqVTvv712be+/vXUBHO+/ve+/vceHZsyY77+977+977+977+977+P77+9fu+/vUB877+977+9Wu+/ve+/ve+/vTg7O1vvv71fTDNn77+9FO+/vXYE77+9O1Pvv71MUX4sFRcXc++/vQYNxLfvv70AEW/vv70l77+977+977+9byvvv73vv71LSkrvv71177+977+977+9244geu+/vUHvv70GfO+/ve+/vXXvv73vv73vv73vv73Fi8W377+9IBFv77+9JdO8eXMuKytT77+977+9f++/ve+/vVfvv73bjiB6ZcWKFcqPIe+/ve+/ve+/vWFhYe+/ve+/vW7vv73vv70377+977+977+9T++/ve+/ve+/ve+/vcyJ77+977+977+9244gNU3vv71e77+977+9Zu+/vSk/ftavXy/vv73vv70G77+9eAMu77+9Bx54QO+/vQDvv71477+9IgcGBu+/vW8/77+9aO+/ve+/ve+/vRcfP35c77+977+977+977+93KtXL++/ve+/vTdK77+9Lu+/vRo4fO+/vTBt3LhRee+/ve+/ve+/vWDvv73vv71f77+977+977+9Lu+/vV7vv71O77+9Sm3btlVed9euXe+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vU8xV05UVO+/ve+/vV9R77+977+977+93LNnT++/ve+/vUfvv73vv73vv70HHu+/ve+/ve+/vVLvv73vv71v377vv73vv71v77+977+9N++/ve+/vdm6de+/ve+/ve+/vXDvv73vv70p77+9Ve+/ve+/ve+/ve+/vSPvv73vv73vv73vv73vv73vv73vv73vv73vv73vv70cL++/vX3vv73vv73vv73vv70bMO+/vQ3vv71877+977+977+9RO+/vTAzL1jvv71AfO+/vRHvv73evO+/ve+/vRsi77+9CTNzfHzvv73vv73vv70bMO+/vQ0YIl9877+92IHvv713ZSHvv73vv73vv73vv70Y77+977+977+9MzPvv73vv73vv73vv71v77+9QSPegCESFhYmdnBc77+9fBnvv73vv71F77+9Ou+/ve+/ve+/vXzvv73vv71577+944OZOSYmRnwN77+9GO+/vQtLJ8ePH++/vWXLlu+/vdSuX++/vT7vv71a77+977+9LBbvv71Ife+/ve+/vVnvv71wITVv77+9XO+/ve+/ve+/ve+/vX5KKSkpIu+/vd2B77+9FDNK77+9Nm3vv703b++/vRTvv70r77+977+9N++/vRRfAwTvv70977+9x48XOyZKSko4NDRUfA0MHO+/vQYMFcmb77+9Nu+/ve+/vR9977+9Ue+/vTVA77+9X9O9e3cuKSkROybvv71977+9Xe+/vTUwcu+/vTrvv73vv73vv73vv73Hj++/ve+/ve+/ve+/ve+/ve+/vVDXrl3vv73MmTMi77+9AX7VuHFj2r9/PzVo77+9QO+/vX5ubi7vv73vv73vv71Sdnbvv71IfXfvv717IDorKirvv73Jkyfvv73Vv++/vXto77+9xo0UGBgo77+9A++/ve+/ve+/vQ9977+977+9YsOD77+977+9T++/vWN4OO+/ve+/vWnvv70R77+977+9V1/vv73vv73vv70zM2/duu+/vT08PO+/ve+/vQFx77+977+9TCbvv73vv73vv71W77+977+977+977+9bxtUE++/vQYM77+977+977+9cO+/vWvvv73vv73vv73vv73vv73vv70XXwfvv73vv70yc++/vUzvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv71NIt6AYSN5Q++/vVfvv73vv73vv73vv706IO+/vTFj77+9SO+/ve+/vTxv77+9PO+/vXVw77+977+9N2Dvv714eXnvv73Ro0dFDybvv73vv73Go0fvv70WXwvvv73vv70ZPHjvv73Yh2l/de+/ve+/vQUOCAgQXws377+9eAPvv71O77+977+93bnvv73vv71c77+977+977+9Wu+/vXjvv70J77+977+9PO+/ve+/vUPvv73vv73vv73vv71V77+977+977+977+977+977+977+9It6A77+9M2/vv70877+977+9S0pKOCEhQXwtEO+/vWvXrnzvv73vv70N77+9Xe+/ve+/vSxZIu+/vRZuGO+/vQYM77+9Wu+/vWrvv71T77+977+977+9Ly4uLu+/vV9o77+977+977+91KkTZ2dnS++/ve+/vXzvv73vv71F77+9W++/ve+/ve+/vXrvv71h77+9G3Dvv71ERUXvv73vv71q77+9Ps6477+977+977+977+977+977+977+977+9A3Hvv71077+91o3vv71f77+9Lu+/vUvvv73vv71m77+9H0ZyEW/vv71t77+977+9a++/vUkfa++/ve+/ve+/vcigQe+/ve+/ve+/vQNx77+977+977+977+9cH5+77+977+977+977+977+977+977+977+977+977+9eu+/vXHvv70bcO+/ve+/ve+/vWbeuXPvv73vv73vv73vv73vv70/77+9ExkyZO+/ve+/ve+/vSDvv73vv73evXs777+977+9OHLvv70I77+977+977+977+977+977+9G0fvv70B77+9SkhI77+9U++/ve+/vTMz77+977+977+977+9c++/vT0n77+9Ju+/ve+/veSpp++/vRLvv70+77+977+9FRQUcNu2be+/ve+/ve+/ve+/vSPegO+/vSUxMVHvv70rcCszd++/vVw277+977+977+977+9OHfvv73vv73vv73vv71q77+977+955ucIu+/vQ3vv71lZs+eLX3vv73vv71izZo177+9FO+/vVTvv73vv71T77+9Su+it1jvv71877+977+977+9IO+/ve+/vQQN77+9ZTw9Pe+/vT/vv73vv73vv73vv71xeO+/ve+/ve+/vWQOCgoSXxvEuTJ677+9aO+/vV3vv70WBw8e77+9Hzvvv70T77+9Bu+/vTbvv70bN+asrCzvv73vv73vv70W77+9z5/vv73vv73vv71I77+9Qe+/vSNhYWFO77+9Ce+/vV9d77+9du+/vVvvv71oIe+/vS7vv71vEW/vv73vv73TvXt3Li4u77+9Pi5vUVxc77+977+9Pu+/ve+/ve+/ve+/vSDvv73Zvn3vv73vv73vv73vv73vv73vv73vv70y77+927fvv73vv73vv70g77+9RO+/vQHvv73PiBEj77+977+977+9Su+/ve+/ve+/vWQfHx/vv73vv71BZNKjRw/vv71d77+9Fu+/vSdPFl8T77+9dxFvACHvv73vv71Q77+9yrFjx7hD77+9Du+/veuDqM+yZcukd++/ve+/vSxa77+9SHw977+9SiPvv70AQj9/77+9cO+/vdq177+977+9ae+/vQoLC3nvv73Yse+/vWvvv73vv73vv73vv71ice+/vWdcMTNv2bIF367vv70RbwDvv70l77+977+977+977+977+977+9In3vv71Wae+/ve+/ve+/vdykSRPvv711Qhzvv702be+/vUjvv71u77+977+977+9GXBgYO+/ve+/vXog77+977+9TO+/vTRu3rxJ77+9Pu+/vSjvv704cULvv73vv71K77+977+914/vv70ePUpjx47vv71uBRwsNDRU77+9Be+/ve+/vcyk77+977+977+977+977+977+916Vb77+9KmDvv70477+977+977+9bO+/vdevH2VmZkrvv71S77+977+977+9AFrvv71oEW3atO+/vVrvv71oIe+/vQ44SGBg77+9aO+/ve+/vVfvv71S3759KSMjQ++/vQ/vv70zDBAn77+977+977+9Qe+/ve+/ve+/ve+/ve+/ve+/vVzvv71W77+9NGDvv70AOnbvv70YTe+/vTbvv73vv73vv73vv73vv73vv70B77+977+977+977+977+977+977+977+9z6cBAwY477+9OO+/vUrvv706GlJ577+977+977+977+977+977+977+9d3Lvv73vv70p77+916/vv73vv716Ie+/ve+/vU/vv70+Iu+/vVJRURE/77+977+977+977+924/vv70d77+9Bu+/vTskOjrvv73vv73vv73vv71EDu+/ve+/ve+/ve+/ve+/vTkiIkJ8zZDvv73vv71R77+9Ru+/ve+/ve+/ve+/ve+/vWJ877+977+977+9Re+/vQHvv70u77+977+977+9ce+/ve+ctkd5eTnvv73vv71f77+977+977+9zZvvv73vv70bUu+/ve+/ve+/vRrmkpISHjhw77+977+9NiPVjngD77+9He+/vdWrFxcUFCg777+9a++/ve+/ve+/ve+/vRctWu+/vUHvv73vv715662377+977+9K0VFRe+/ve+/ve+/vQ/vv71vL++/vSnvv70NIHbvv71b77+9bu+/ve+/ve+/ve+/ve+/ve+/vUtJSQnvv73vv73vv73vv71877+977+977+977+977+9H1Lvv700ae+/ve+/ve+/vV8eVVhY77+977+977+977+977+924po77+9eANINRIeHu+/vRcvXnTvv71B77+9CO+/ve+/ve+/vWHvv70G77+977+9cO+/ve+/ve+/ve+/vXsO77+9J++/vV/vv73OvXrvv70S77+9Ru+/vUYRbwDvv71mQkND77+977+977+977+9Djvvv70dbe+/vd69PHzvv71wPO+/ve+/vQUSEBDvv73vv73One+/vX0f77+9dO+/vRI/77+977+9A++/vduH77+9OO+/vQ0gGtK0aVM+eu+/ve+/ve+/vQfvv71KOTk577+977+9e++/vXHvv73vv73vv73vv73vv70T77+9Ou+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vRwSEiLvv71d77+9LhFvANGY77+977+9QO+/ve+/ve+/vXU777+9Je+/vd2777+9J07vv73IjRs3Fl9X77+977+977+92bPvv70ubyfft28fN2jvv71AfHsQ77+9Iu+/vQBS77+9eHp677+9JUt077+9Fe+/vRzvv73vv73vv715x44d77+9P++/ve+/vT94cO+/ve+/ve+/vXXvv73vv71877+977+9Ye+/vT/vv70lS++/ve+/vWjvv70X77+9BhAdMm3vv70077+977+9bDrvv70q77+9Z++/ve+/vXjvv73vv73vv73vv73vv70bb3Dvv70uXe+/vWw277+977+977+977+977+977+905Pvv73vv73vv70/77+9Tz/vv71k77+977+9cc+ePdy7d2/vv73vv70R77+9Y++/ve+/vR9gAO+/vT/vv704LV3vv73vv71q164t3YpD77+977+977+9UHJyMn3vv73vv73vv73vv73vv73vv73vv73vv73Ro0fvv70Z77+977+9BG9vb0pMTO+/vUcffe+/ve+/ve+/ve+/ve+/vWXLlmQ277+977+9aO+/ve+/vTdv77+90aNHaceOHe+/ve+/ve+/ve+/ve+/vd2777+977+9BUfvv70AMe+/ve+/ve+/vTDvv73vv70v77+9Ve+/vVbSrTjclStXaO+/ve+/ve+/ve+/vWTvv70S2rVr77+9dDtu77+9bt26VFpaSu+/ve+/ve+/vdKt77+9Qu+/vUHvv73vv70JCAjvv71177+977+9Oe+/vdqSE9q+fTvvv71r77+9Tnzvv70RxJ1iIe+/ve+/vQTvv71SUlJC77+9fO+/vQlZ77+9Vu+/vdWr77+9b++/vRbvv73vv71F77+9Fu+/ve+/vXPvv71Rbm4u77+977+977+9Su+/vQPvv702xKcY77+9REVF77+92bNn77+9TxDvv71677+977+977+977+977+9HUHvv70hOAMx77+977+9Fy/vv73vv73vv73LqWXLlhQWFibdjhLdu3fvv70bN27vv70I77+977+977+9Ju+/vRsZM2YM77+977+977+9O++/ve+/ve+/vS/disOV77+977+9Ue+/vR49aO+/vd690q0AGBYG77+977+9adGiBX3vv73vv70UFxcn3Yrvv70dOHDvv73vv71077+9Qjbvv71N77+9FQBDMu+/ve+/vVXvv73FuXPvv71377+977+977+977+977+977+9040bN++/ve+/vXHvv73vv73vv71ISkhI77+9bgPvv73vv70wQO+/vRAz77+977+977+9Tx07du+/ve+/vdu3S++/ve+/vVDvv70/77+977+9dAsA77+977+9S1hATz3vv70U77+977+977+977+91KhRI++/vVZ0V1JSQkFBQVRQUCDvv70K77+977+977+9DARo77+9ypUUGhpK77+9Zs2i77+977+9Mu+/vXZ077+977+977+9TR07du+/vW4D77+977+9MEDvv73vv73vv70KCwvvv70vf++/vQt177+90oXvv73vv73vv73vv73vv73vv71V77+91q3vv71bADAkDBDvv73FoUPvv73vv73vv70HH++/vUcffe+/vU7vv708Kd2OLgIDA++/vVsAMCQMEO+/ve+/ve+/ve+/ve+/vSk8PO+/vUbvv70cSVlZWe+/ve+/vdSI77+9Lu+/vQE4CwwQ77+977+977+9Zu+/ve+/vcuXU2hoKE3vv70677+977+977+977+977+9W++/vSQnJ0fvv70FAEPvv70A77+977+9Kigo77+977+977+977+9b9S8eXNKSkpy77+9M++/ve+/vUfvv71K77+9AGBIeBsvVO+/ve+/ve+/vT/vv73vv73vv70L77+977+977+9RA0bNu+/vW7njq5f77+9Tu+/ve+/ve+/vSfvv73vv70q77+9Cu+/ve+/ve+/vQwE77+977+977+977+977+9Zs2aRe+/ve+/vXcfPe+/ve+/vTPvv73vv73vv70m77+9Uu+/vdavX++/ve+/vQHvv70gOAMBXe+/ve+/ve+/vdOf77+977+9Z3rvv73hh53vv73vv71H77+977+977+977+977+9IAAO77+9AQLvv70KCQnvv73Ro0fvv70z77+9PCPvv73vv73vv73vv71r77+977+977+977+977+9RXsAMDIMEHAIDw8PSkhI77+9MWPvv71Q77+9fu+/ve+/vWLvv70o77+977+977+977+9Sx07du+/ve+/ve+/vQzvv711Ae+/vQkGCDhcw4YN77+9J++/ve+/vSfvv71877+977+977+977+977+9ZDI577+9XllZGQ0cOO+/vTZv77+977+977+9OgDvv70OAwTvv73vv73vv73vv71o2LBhNGTvv70Q77+977+977+977+977+977+9S0tLae+/ve+/ve+/vWbvv70a77+9XxsAbu+/vQECYu+/vTZtSgkJCe+/ve+/ve+/vUhxcXHvv73vv73vv71b77+917tw77+9Ag0bNu+/ve+/ve+/ve+/vXvvv706BO+/vTvvv70AAe+/ve+/ve+/ve+/vUfvv73vv73vv70UHx9PcXFxFB4ebu+/ve+/ve+/vRs3btCCBQtoxowZeGw777+9Qhgg77+977+977+977+9Xu+/ve+/ve+/ve+/ve+/ve+/vVjvv73evTvvv73vv73vv73vv73vv73vv73vv71v77+9e1ZWFu+/vdu377+9Nmzvv71A77+9fO+/vQnvv73vv73vv70Jdgvvv73vv70wQO+/vSV4eHhQQEAA77+977+977+9UH5+77+94b+OF++/vRVg77+9AADvv70m77+977+9YQAAcCkYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+9CQYIAABo77+9AQIAAO+/vWDvv70AAO+/vSYYIAAA77+977+977+9A++/vVhs37rvv73vv711AAAAAElFTkTvv71CYO+/vQ==', 'base64'); 

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
        } else if (msg.action == "update-user") {
            console.log('update-user: ' + JSON.stringify(msg,null,2));
            if (db.getUser(msg.user)) {
                db.updateUser(msg.user, msg.currency, msg.relay, msg.hostport, msg.base64cert, msg.base64macaroon);
            } else {
                db.createUser(msg.user, msg.currency, msg.relay);
            }
        } else if (msg.action == "delete-user") {
            console.log('delete-user: ' + JSON.stringify(msg,null,2));
            db.deleteUser(msg.user);
        } else if (msg.action == "getUserInfo") {
            console.log('getUserInfo: ' + JSON.stringify(msg,null,2));
            const userInfo = db.getUser(msg.user);
            console.log('userInfo: ' + JSON.stringify(userInfo,null,2));
            if (typeof userInfo != "undefined") {
                notify_creator(msg.user, JSON.stringify({ type: "userInfo", userInfo: userInfo }));
            } else {
                console.log('Unknown User: ' + msg.user);
            }
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
                notify_creator(slot.creator, JSON.stringify({ type: "session-info", infoMsg: "Session Reservor has not arrived." }));
            }
        } else if (isConnected(slot.reservor)) {
            console.log("Reservor connected..." + slot.reservor);
            console.log("Creator not connected...");
            notify_reservor(slot.reservor, JSON.stringify({ type: "session-info", infoMsg: "Session Creator has not arrived." }));
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
