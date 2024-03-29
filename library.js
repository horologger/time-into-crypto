module.exports = {
    init: init,
    drop: drop,
    prepare: prepare,
	preparer: preparer,
	check_nick_exists: check_nick_exists,
	get_nick_from_pubkey: get_nick_from_pubkey,
    tenant_register: tenant_register,
    tenant_unregister: tenant_unregister,
    list_all: admin_list_all,
	push_accessToken: push_accessToken,
	fetchById: fetchById,
	checkSecret: checkSecret,
	fetchByToken: fetchByToken,
	getTenantByID: getTenantByID,
	addTimeSlot: addTimeSlot,
	delTimeSlot: delTimeSlot,
	resTimeSlot: resTimeSlot,
	cnfTimeSlot: cnfTimeSlot,
	dumpTimeSlots: dumpTimeSlots,
	getAllTimeSlots: getAllTimeSlots,
	getAllBoardSlots: getAllBoardSlots,
	updateExpiredTimeSlots: updateExpiredTimeSlots,
	getAllTimeSlots4Period: getAllTimeSlots4Period,
	getInProgressTimeSlots4Period: getInProgressTimeSlots4Period,
	getCreatorTimeSlots: getCreatorTimeSlots,
	getReservorTimeSlots: getReservorTimeSlots,
	reserveTimeSlot: reserveTimeSlot,
	setTimeSlotState: setTimeSlotState,
	setTimeSlotPause: setTimeSlotPause,
	addEvent: addEvent,
	delEvent: delEvent,
	dumpEvents: dumpEvents,
	getFutureEvents: getFutureEvents,
	getActiveEvents: getActiveEvents,
	getAllEvents: getAllEvents,
	setEventState: setEventState,
	addPendingPayment: addPendingPayment,
	delPendingPayments: delPendingPayments,
	delPendingPaymentID: delPendingPaymentID,
	getPendingPayments: getPendingPayments,
	isPaymentPending: isPaymentPending,
	anyPaymentsPending: anyPaymentsPending
};

const Database = require("better-sqlite3");
// const db = new Database('data/crypto-rates.db', { verbose: console.log }); // or ':memory:'
const db = new Database('data/time-into-crypto.db'); // or ':memory:'
db.pragma('synchronous = 2'); // Force write-through to file system

// Importing necessary modules
var uid = require('uid-safe');

const tictype = require('./libtypes');

// https://sqlite.org/lang_createtable.html
function init() {
    // console.log("do_DB_Init");
	//          1         2         3         4         5         6     6   7
	// 1234567890123456789012345678901234567890123456789012345678901234567890
	// 0334c29a37fe5d9d5ab8882855c75745f5b5d29cb2c6424fae138a29b248c6cd64
	var createstr = '';

	// db.exec("CREATE TABLE timeslots (
	// 	id TEXT, 
	// 	label TEXT, 
	// 	created INTEGER, 
	// 	creator TEXT, 
	// 	reservor TEXT, 
	// 	start INTEGER, 
	// 	pause INTEGER, 
	// 	duration INTEGER, 
	// 	satsmin INTEGER, 
	// 	quote REAL, 
	// 	currency TEXT, 
	// 	state INTEGER)");

	// createstr  = 'CREATE TABLE IF NOT EXISTS timeslots (';
	// createstr += 'type CHAR(1) PRIMARY KEY NOT NULL, ';
	// createstr += 'name CHAR(8) NOT NULL, ';
	// createstr += 'seq INTEGER';
	// createstr += ')';

	createstr  = 'CREATE TABLE IF NOT EXISTS timeslots (';
	createstr += 'id TEXT, ';
	createstr += 'label TEXT, ';
	createstr += 'created INTEGER, ';
	createstr += 'creator TEXT, ';
	createstr += 'reservor TEXT, ';
	createstr += 'start INTEGER, ';
	createstr += 'pause INTEGER, ';
	createstr += 'duration INTEGER, ';
	createstr += 'satsmin INTEGER, ';
	createstr += 'quote REAL, ';
	createstr += 'currency TEXT, ';
	createstr += 'state INTEGER ';
	createstr += ')';

    stmt = db.prepare(createstr);
    info = stmt.run();
    // console.log(info.changes);

	// var insertstr = "";
	
	// insertstr = "INSERT INTO planType(type, name, seq) VALUES ('F','Free',1)";		// Free plan
	// stmt = db.prepare(insertstr);
	// info = stmt.run();
	// console.log(info.changes);

	// db.exec("CREATE TABLE events (
	// 	id TEXT, 
	// 	type INTEGER, 
	// 	label TEXT, 
	// 	created INTEGER, 
	// 	creator TEXT, 
	// 	reservor TEXT, 
	// 	trigger INTEGER, 
	// 	dest TEXT, 
	// 	data TEXT, 
	// 	state INTEGER)");


	createstr  = 'CREATE TABLE IF NOT EXISTS events (';
	createstr += 'id TEXT, ';
	createstr += 'type INTEGER, ';
	createstr += 'label TEXT, ';
	createstr += 'created INTEGER, ';
	createstr += 'creator TEXT, ';
	createstr += 'reservor TEXT, ';
	createstr += 'trigger INTEGER, ';
	createstr += 'dest TEXT, ';
	createstr += 'data TEXT, ';
	createstr += 'state INTEGER ';
	createstr += ')';
		
    stmt = db.prepare(createstr);
    info = stmt.run();
    // console.log(info.changes);


	// insertstr  = "INSERT INTO tenantInfo(";
	// insertstr += 'tenant, ';
	// insertstr += 'nick, ';
	// insertstr += 'pubkey, ';
	// insertstr += 'clientid, ';
	// insertstr += 'clientsecret, ';
	// insertstr += 'scope, ';
	// insertstr += 'redirectUri ';
	// insertstr += ') VALUES (';
	// insertstr += '?,';
	// insertstr += '?,';
	// insertstr += '?,';
	// insertstr += '?,';
	// insertstr += '?,';
	// insertstr += '?,';
	// insertstr += '?)';

	// console.log("insertstr: " + insertstr);

	// stmt = db.prepare(insertstr);

	// info = stmt.run("0abbacab-0000-0000-0000-000000000000","client1","0334c29a37fe5d9d5ab8882855c75745f5b5d29cb2c6424fae138a29b248c6cd64","client1.id","client1.secret","uaa.resource","http://example.org/oauth2");
	// console.log(info.changes);

	// info = stmt.run("0abbacab-93b6-c0d6-70fe-711b8280fa0c","vacuum8","0334c29a37fe5d9d5ab8882855c75745f5b5d29cb2c6424fae138a29b248c6cd64","0abbacab-93b6-c0d6-70fe-711b8280fa0c","oYRbgIFYuc5IMLqGWJz3ASU9jwFmtYEepIW5","uaa.resource market-data-MRM-MRM_BYOD!b1736.marketdata","http://example.org/oauth2");
	// console.log(info.changes);

	createstr  = 'CREATE TABLE IF NOT EXISTS pending_payments (';
	createstr += 'creator CHAR(36) NOT NULL, ';	// "1234567890123456789012345678901234567890123456789012345678901234"
	createstr += 'invoice CHAR(64) NOT NULL, ';	// "bfa5d543c695f89bfe75ac7fc8076be5ccb8811b3be5dddff9e1d97503425de3"
	createstr += 'request TEXT NOT NULL, ';	// <Bolt 11 Invoice String>
	createstr += 'created DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL';
	createstr += ')';

    stmt = db.prepare(createstr);
    info = stmt.run();
    // console.log(info.changes);
	
    //db.close();
}

// https://sqlite.org/lang_droptable.html
function drop() {
    // console.log("do_DB_Drop");
 
    stmt = db.prepare('DROP TABLE IF EXISTS timeslots');
    info = stmt.run();
    // console.log(info.changes);

    stmt = db.prepare('DROP TABLE IF EXISTS events');
    info = stmt.run();
    // console.log(info.changes);

    stmt = db.prepare('DROP TABLE IF EXISTS pending_payments');
    info = stmt.run();
    // console.log(info.changes);

}

// gtid = global tenant Id is set within the * handler in server.js approx Line 101 which is fortuitous for 1984 fans.
function prepare(sqlinput) {
	var sqlout = 'SELECT now()';

	var sqlin = sqlinput.trim();

	// Handle all SQL requests if needed to impose tenant restrictions
	if (false) {

		// console.log("  sqlin:" + sqlin + ":");

		switch((sqlin.substring(0,6)).toUpperCase()) {
			case "SELECT":
				// console.log("SELECT!");
				// `SELECT rate, created FROM rates`
				sqlout = sqlin;
				// `SELECT rate, created FROM rates WHERE tenant = tenantID`
				// sqlout += " WHERE tenant = '" + gtid + "'";
				break;
			case "INSERT":
				// console.log("INSERT!");
				// `INSERT INTO rates (rate) VALUES (?)`
				var columnsLeftParamIdx = sqlin.indexOf('(');
				var valuesLeftParamIdx = sqlin.indexOf('(', (columnsLeftParamIdx + 1));

				sqlout = sqlin.substring(0,columnsLeftParamIdx); 
				sqlout += '(tenant,';
				sqlout += sqlin.substring((columnsLeftParamIdx+1),valuesLeftParamIdx);
				sqlout += "('" + gtid + "',";
				sqlout += sqlin.substring((valuesLeftParamIdx+1));
				// `INSERT INTO rates (tenant,rate) VALUES (tenantID,?)`
				break;
			case "DELETE":
				// console.log("DELETE!");
				// `SELECT rate, created FROM rates`
				sqlout = sqlin;
				// `SELECT rate, created FROM rates WHERE tenant = tenantID`
				// sqlout += " WHERE tenant = '" + gtid + "'";
				break;
            case "UPDATE":
				break;
            default:
				break;
		}
		// console.log(" sqlout:" + sqlout + ":");
	} else {
		sqlout = sqlin;
	}

	return db.prepare(sqlout);
}

function preparer(sqlinput) {
	var sqlout = 'SELECT now()';

	if (true) {

		var sqlin = sqlinput.trim();

		// console.log("  sqlin:" + sqlin + ":");

		sqlout = sqlin;

		// console.log(" sqlout:" + sqlout + ":");
	}

	return db.prepare(sqlout);
}

function check_nick_exists(nick) {
    console.log("check_nick_exists: " + nick);


	const rows = db.prepare(`SELECT nick FROM tenantInfo`).all();

	var found = false;

	rows.forEach(row => {
		// console.log(row);
		if (row.nick == nick) {
			found = true;
		}
	});

    //db.close();

	return found;
}

function get_nick_from_pubkey(pubkey) {
    // console.log("get_nick_from_pubkey: " + pubkey);


	const rows = db.prepare(`SELECT nick,tenant FROM tenantInfo WHERE pubkey = '` + pubkey + `'`).all();

	var lastnick = "unregistered";
	var lasttenant = "unknown";

	rows.forEach(row => {
		// console.log(row);
		lastnick = row.nick;
		lasttenant = row.tenant;
	});

    //db.close();
	// console.log(lastnick);
	return({"nick": lastnick, "tenant": lasttenant});
}


function fetchById(clientid) {
    // console.log("fetchById: " + clientid);

	const tenant = db.prepare(`SELECT clientid,nick,clientsecret,scope,redirectUri FROM tenantInfo WHERE clientid = ?`).get(clientid);

	// console.log("tenant: " + JSON.stringify(tenant,null,2));

	return tenant;
}

function fetchByToken(token) {
    // console.log("fetchByToken: " + token);

	const access_token = db.prepare(`SELECT token,userId,clientId,scope,ttl FROM access_token WHERE token = ?`).get(token);

	if ((access_token) && (typeof access_token == "object")) {

		// Scope isn't valid JSON at times for some reason.  Skip for now
		access_token.scope = JSON.parse(access_token.scope);

		return access_token;
	} else {
		return null;
	}
}

function checkSecret(client, secret) {
    // console.log("checkSecret: " + secret);

	const tenant = db.prepare(`SELECT clientid,clientsecret FROM tenantInfo WHERE clientid = ?`).get(client.id);

	// console.log("tenant: " + JSON.stringify(tenant,null,2));

	if ((tenant) && (typeof tenant == "object") && (typeof tenant.clientsecret == "string") && (tenant.clientsecret == secret)) {
		// console.log("Secret Matches " + secret);
		return true;
	} else {
		// console.log("Secret DOES NOT Match " + secret);
		return false;
	}
}

function getTenantByID(tenantID) {
    // console.log("getTenantByID: " + tenantID);

	const tenant = db.prepare(`SELECT tenant,nick,pubkey,clientid,scope,redirectUri,plan,satoshi FROM tenantInfo WHERE tenant = ?`).get(tenantID);

	if ((tenant) && (typeof tenant == "object")) {

		// console.log("tenant: " + JSON.stringify(tenant,null,2));
		return tenant;

	} else {
		return null;
	}
}

var crypto = require('crypto');

function generatePassword() {
	// var	length = 48;
	var	length = 36;
	// var wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$';
	var wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	return Array.from(crypto.randomFillSync(new Uint32Array(length)))
	  .map((x) => wishlist[x % wishlist.length])
	  .join('');
}

function tenant_register(tenantID,nick,pubKey) {
    // console.log("tenant_register: " + tenantID);


	const rows = db.prepare(`SELECT tenant FROM tenantInfo`).all();

	var found = false;

	rows.forEach(row => {
		// console.log(row);
		if (row.tenant == tenantID) {
			found = true;
		}
	});

	var retobj = {
		"status": "exists"
	};

	if (!found) {

		// Generate a clientid
		var clientid = tenantID; // Use tenantID for now
		// Generate a secret
		var clientsecret = generatePassword();
		// Generate a download URL
		// Insert the clientid into the client table
		// Maybe combine the tenant table and the client table???

		var insertstr  = "INSERT INTO tenantInfo(";
		insertstr += 'tenant, ';
		insertstr += 'nick, ';
		insertstr += 'pubkey, ';
		insertstr += 'clientid, ';
		insertstr += 'clientsecret, ';
		insertstr += 'scope, ';
		insertstr += 'redirectUri ';
		insertstr += ') VALUES (';
		insertstr += '?,';
		insertstr += '?,';
		insertstr += '?,';
		insertstr += '?,';
		insertstr += '?,';
		insertstr += '?)';
	
		// console.log("insertstr: " + insertstr);
	
		const stmt = db.prepare(insertstr);
	
		stmt.run(tenantID,nick,pubKey,clientid,clientsecret,"uaa.resource market-data-MRM-MRM_BYOD!b1736.marketdata","http://example.org/oauth2");

		retobj = 
		{
			"status": "registered",
			"credentials": {
				// "LPSCallbackDependencyName": "market-data-MRM-MRM_BYOD",
				"downloadUrl": "https://https://cryptorates-crypto-rates-app.cryptoassetssubledger.com/rates/downloadCryptoData",
				// "uploadUrl": "https://mrmawsus10-mrm-mrm-byod-market-data-upload.cfapps.us10.hana.ondemand.com/uploadMarketData",
				// "saasregistryappname": "market-data-MRM-MRM_BYOD",
				// "saasregistryenabled": true,
				"uaa": {
					// "apiurl": "https://api.authentication.us10.hana.ondemand.com",
					"clientid": clientid,
					"clientsecret": clientsecret,
					"credential-type": "binding-secret",
					// "identityzone": "cryptorates",
					// "identityzoneid": "aef487d1-0879-4fb1-a8f4-2384b71226c2",
					// "sburl": "https://internal-xsuaa.authentication.us10.hana.ondemand.com",
					// "subaccountid": "aef487d1-0879-4fb1-a8f4-2384b71226c2",
					"tenantid": tenantID,
					"tenantmode": "dedicated",
					// "uaadomain": "authentication.us10.hana.ondemand.com",
					// "url": "https://cryptorates.authentication.us10.hana.ondemand.com",
					// "verificationkey": "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA+8Nrbx6bRV4sHy7/lWDVeSuvV+Rj9quxC3zuTlmaoALvGPhMxghtWfD25/a8pXYUxfXTVGBvx/rWL8kJ1ywaTpgYORQy4yvQUI5c5pc7nXX4f6PN5uZF2Hw4s1Y0+PGu9STkqGiDlisw331UuEyShi18L2oz6SNo7gWBwynDt7mYmYt6wH0SJNmeV9VQN8fuKNmto3oanJqLchPDfEzyh4+21JcTq6upfXBVHClwEKrc0qDowCtjxHb7uOxvvHhTn9VSb3G1pFMdhvnSIYVOa9bWMesVxIqwi+A1wDxeDENZAIvSvTl3A1/x56aPYaNI1P4T8f7vg4Qj3ViVHq/RkQIDAQAB-----END PUBLIC KEY-----",
					// "xsappname": "6d979d34-f4c0-4b90-8629-15201dc0d138!b64971|market-data-MRM-MRM_BYOD!b1736",
					// "zoneid": "aef487d1-0879-4fb1-a8f4-2384b71226c2"
				}
			}
		};

	}

    //db.close();
	return retobj;

}

function tenant_unregister(tenantID) {
    // console.log("tenant_unregister: " + tenantID + " is not implemented yet!");
	var found = false;
	return found;
}

function admin_list_all(tenantID) {
    // console.log("admin_list_all: ");
    const rows = db.prepare(`SELECT id, tenant, timeStamp FROM tenantInfo`).all();
    return rows;
}

function push_accessToken(token,userId,clientId,scope,ttl) {
    // console.log("push_accessToken: " + token);

	var insertstr  = "INSERT INTO access_token(";
	insertstr += 'token, ';
	insertstr += 'userId, ';
	insertstr += 'clientId, ';
	insertstr += 'scope, ';	//JSON.stringify(scope)
	insertstr += 'ttl ';
	insertstr += ') VALUES (';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?)';

	// console.log("insertstr: " + insertstr);

	const stmt = db.prepare(insertstr);
	stmt.run(token,userId,clientId,JSON.stringify(scope),ttl);
}

function addTimeSlot(timeslot) {
    // console.log("addTimeSlot: " + JSON.stringify(timeslot)	);

	var uuid = uid.sync(8);
	timeslot.id = uuid;
	timeslot.created = Date.now();
	// console.log("uuid: " + uuid);
	// timeslot.reservor = "unknown";
	// timeslot.state = tictype.TimeSlotState.CREATED;

	var insertstr  = "INSERT INTO timeslots(";
	insertstr += 'id, ';
	insertstr += 'label, ';
	insertstr += 'created, ';
	insertstr += 'creator, ';
	insertstr += 'reservor, ';	
	insertstr += 'start, ';	
	insertstr += 'pause, ';	 
	insertstr += 'duration, ';	 
	insertstr += 'satsmin, ';	 
	insertstr += 'quote, ';	 
	insertstr += 'currency, ';	 
	insertstr += 'state ';
	insertstr += ') VALUES (';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?,';
	insertstr += '?)';

	// console.log("insertstr: " + insertstr);

	const stmt = db.prepare(insertstr);
	stmt.run(timeslot.id, timeslot.label, timeslot.created, timeslot.creator, timeslot.reservor, timeslot.start, timeslot.pause, timeslot.duration, timeslot.satsmin, timeslot.quote, timeslot.currency, timeslot.state);
}

function delTimeSlot(uuid) {
    // console.log("delTimeSlot: " + uuid	);

	const stmt = db.prepare("DELETE FROM timeslots WHERE id = ?");
	const result = stmt.run(uuid);

	return(result);
}

function resTimeSlot(uuid, reservor) {
    // console.log("resTimeSlot: " + uuid	+ " by " + reservor);

	const stmt = db.prepare("UPDATE timeslots SET state = ?, reservor = ? WHERE id = ?");
	const result = stmt.run(tictype.TimeSlotState.RESERVED,reservor,uuid);

	return(result);
}

function cnfTimeSlot(uuid, creator) {
    // console.log("resTimeSlot: " + uuid	+ " by " + creator);

	const stmt = db.prepare("UPDATE timeslots SET state = ? WHERE id = ?");
	const result = stmt.run(tictype.TimeSlotState.CONFIRMED,uuid);

	return(result);
}

function dumpTimeSlots(key, ascend = true) {
	console.log("dumpTimeSlots: " + key + " " + ascend + "=====================================");
	// Retrieve and display timeslots sorted by the specified key
	let order = ascend ? 'ASC' : 'DESC';
	const stmt = db.prepare(`SELECT * FROM timeslots ORDER BY ${key} ${order}`);
	const rows = stmt.all();
	rows.forEach(row => {
		console.log(`uuid: ${row.id} label: ${row.label} created: ${row.created} creator: ${row.creator} reservor: ${row.reservor} start: ${row.start} pause: ${row.pause} duration: ${row.duration} satsmin: ${row.satsmin} state: ${row.state}`);
	});
	console.log("End dumpTimeSlots: " + key + " " + ascend + "=====================================");
}

function getAllTimeSlots(key, ascend = true) {
	let order = ascend ? 'ASC' : 'DESC';
	const stmt = db.prepare(`SELECT * FROM timeslots ORDER BY ${key} ${order}`);
	const rows = stmt.all();
	return rows;    
}

function getAllBoardSlots() {
	const stmt = db.prepare(`SELECT * FROM timeslots ORDER BY creator, start ASC`);
	const rows = stmt.all();
	return rows;    
}


function updateExpiredTimeSlots(timeNow, graceSecs = 0) {
	const stmt = db.prepare(`SELECT * FROM timeslots`);
	const rows = stmt.all();
	numExpired = 0;
	rows.forEach(row => {
		// console.log(`uuid: ${row.id} label: ${row.label} start: ${row.start} pause: ${row.pause} duration: ${row.duration} state: ${row.state}`);
		let endTime = row.start + row.pause + row.duration + graceSecs;
		if (timeNow > endTime) {
			console.log("Expired: " + row.id);
			const stmt = db.prepare("UPDATE timeslots SET state = ? WHERE id = ? AND state != 'completed'");
			console.log("stmt: " + stmt);
			const result = stmt.run(tictype.TimeSlotState.EXPIRED, row.id);
			numExpired++;
		}
	});
	return numExpired;    
}

function getAllTimeSlots4Period(key, ascend = true, startTime, endTime, state = "confirmed") {
	let order = ascend ? 'ASC' : 'DESC';
	const stmt = db.prepare(`SELECT * FROM timeslots WHERE ? <= start AND start < ? AND state = '${state}' ORDER BY ${key} ${order}`);
	const rows = stmt.all(startTime,endTime);
	return rows;    
}

function getInProgressTimeSlots4Period(key, ascend = true, startTime, endTime) {
	let order = ascend ? 'ASC' : 'DESC';
	const stmt = db.prepare(`SELECT * FROM timeslots WHERE ? <= start AND start < ? AND (state = 'in_progress' OR state = 'paused_creator' OR state = 'paused_reservor') ORDER BY ${key} ${order}`);
	const rows = stmt.all(startTime,endTime);
	return rows;    
}

function getCreatorTimeSlots(creator, key = "start", ascend = true, state = null) {
	let order = ascend ? 'ASC' : 'DESC';
	var querystring = ``;
	if (state == null) {
		querystring = `SELECT * FROM timeslots WHERE creator = ? ORDER BY ${key} ${order}`;
	} else {
		querystring = `SELECT * FROM timeslots WHERE creator = ? AND state = ? ORDER BY ${key} ${order}`;
	}
	const stmt = db.prepare(querystring);
	var rows = [];
	if (state == null) {
		rows = stmt.all(creator);
	} else {
		rows = stmt.all(creator, state);
	}

	return rows;    
}

function getReservorTimeSlots(reservor, key, state, ascend = true) {
	let order = ascend ? 'ASC' : 'DESC';
	const stmt = db.prepare(`SELECT * FROM timeslots WHERE reservor = ? AND state = ? ORDER BY ${key} ${order}`);
	const rows = stmt.all(reservor, state);
	return rows;    
}

function reserveTimeSlot(id, reservor) {
	const stmt = db.prepare("UPDATE timeslots SET reservor = ?, state = ? WHERE id = ?");
	const result = stmt.run(reservor, tictype.TimeSlotState.RESERVED, id);
}

function setTimeSlotState(id, newState) {
	const stmt = db.prepare("UPDATE timeslots SET state = ? WHERE id = ?");
	const result = stmt.run(newState, id);
}

function setTimeSlotPause(id, pauseSecs) {
	const stmt = db.prepare("UPDATE timeslots SET pause = ? WHERE id = ?");
	const result = stmt.run(pauseSecs, id);
}

function addEvent(event) {
	// Generate unique ID and set creation timestamp
	var uuid = uid.sync(8);
	event.id = uuid;
	// event.type = EventType.INFO; // Should already be set
	event.created = Date.now();
	// console.log("uuid: " + uuid);
	event.reservor = "unknown";
	event.state = tictype.EventState.ACTIVE;
	
	// Insert event into the SQLite database using transactions for better-sqlite3
	const stmt = db.prepare("INSERT INTO events VALUES (@id, @type, @label, @created, @creator, @reservor, @trigger, @dest, @data, @state)");
	const result = stmt.run(event);
	
	return uuid;
}

function delEvent(uuid) {
	// First check to make sure it's not reserved!!!
	// Delete event from the SQLite database using transactions for better-sqlite3
	const stmt = db.prepare("DELETE FROM events WHERE id = ?");
	const result = stmt.run(uuid);
	return result;
}

function dumpEvents(key, ascend = true) {
	// Retrieve and display events sorted by the specified key
	let order = ascend ? 'ASC' : 'DESC';
	const stmt = db.prepare(`SELECT * FROM events ORDER BY ${key} ${order}`);
	const rows = stmt.all();
	rows.forEach(row => {
		// console.log(`uuid: ${row.id} type: ${row.type} label: ${row.label} created: ${row.created} creator: ${row.creator} reservor: ${row.reservor} trigger: ${row.trigger} state: ${row.state}`);
	});
}

function getFutureEvents(key, ascend = true, timeNow) {
	let order = ascend ? 'ASC' : 'DESC';
	const stmt = db.prepare(`SELECT * FROM events WHERE trigger >= ${timeNow} ORDER BY ${key} ${order}`);
	const rows = stmt.all();
	return rows;    
}

function getActiveEvents(key, ascend = true) {
	let order = ascend ? 'ASC' : 'DESC';
	const stmt = db.prepare(`SELECT * FROM events WHERE state = 'active' ORDER BY ${key} ${order}`);
	const rows = stmt.all();
	return rows;    
}

function getAllEvents(key, ascend = true) {
	let order = ascend ? 'ASC' : 'DESC';
	const stmt = db.prepare(`SELECT * FROM events ORDER BY ${key} ${order}`);
	const rows = stmt.all();
	return rows;    
}

function setEventState(id, newState) {
	const stmt = db.prepare("UPDATE events SET state = ? WHERE id = ?");
	const result = stmt.run(newState, id);
}

// function addPendingPayment(creator, invoice) {
// 	const stmt = db.prepare("INSERT INTO pending_payments VALUES (@creator, @invoice, @created)");
// 	const result = stmt.run(creator, invoice, Date.now());
// }

function addPendingPayment(creator,invoiceID,request) {
    // console.log("addPendingPayment: " + creator + " : " + invoiceID);

	var retobj = {
		"status": "error"
	};

	if (true) {

		var insertstr  = "INSERT INTO pending_payments(";
		insertstr += 'creator, ';
		insertstr += 'invoice, ';
		insertstr += 'request ';
			insertstr += ') VALUES (';
			insertstr += '?,';
			insertstr += '?,';
			insertstr += '?)';
	
		// console.log("insertstr: " + insertstr);
	
		const stmt = db.prepare(insertstr);
	
		stmt.run(creator,invoiceID,request);

		retobj = 
		{
			"status": "added",
            "creator": creator,
            "invoiceid": invoiceID
		};

	}

    //db.close();
	return retobj;

}


// function delPendingPayments(invoice) {
// 	const stmt = db.prepare("DELETE FROM pending_payments WHERE invoice = ?");
// 	const result = stmt.run(invoice);
// }

function delPendingPayments(creator) {
    // console.log("delPendingPayments: " + creator);

	var retobj = {
		"status": "error"
	};

	if (true) {

		var deletestr  = "DELETE FROM pending_payments WHERE 'creator' = '" + creator + "'";
	
		// console.log("deletestr: " + deletestr);
	
		const stmt = db.prepare(deletestr);    // preparer doesn't append a WHERE tenant clause
	
		stmt.run();

		retobj = 
		{
			"status": "deleted",
            "creator": creator
		};

	}

    //db.close();
	return retobj;

}

function delPendingPaymentID(invoiceID) {
    // console.log("delPendingPaymentID: " + invoiceID);

	var retobj = {
		"status": "error"
	};

	if (true) {

		var deletestr  = "DELETE FROM pending_payments WHERE invoice = '" + invoiceID + "'";
	
		// console.log("deletestr: " + deletestr);
	
		const stmt = db.prepare(deletestr);    // preparer doesn't append a WHERE tenant clause
	
		stmt.run();

		retobj = 
		{
			"status": "deleted",
            "invoiceid": invoiceID
		};

	}

    //db.close();
	return retobj;

}

function getPendingPayments(creator) {
	const stmt = db.prepare("SELECT * FROM pending_payments WHERE creator = ?");
	const rows = stmt.all(creator);
	return rows;
}

function isPaymentPending(creator,invoiceID) {
    // console.log("isPaymentPending: " + creator + " : " + invoiceID);

    const rows = db.prepare(`SELECT creator,invoice FROM pending_payments`).all();

	var found = false;

	rows.forEach(row => {
		// console.log("row: " + row);
		if ((row.creator == creator) && (row.invoice == invoiceID)) {
            // console.log("found still pending...");
			found = true;
		}
	});

    //db.close();

	return found;

}

function anyPaymentsPending(creator) {
    // console.log("anyPaymentsPending: " + creator + " : " + invoiceID);

    const rows = db.prepare(`SELECT creator,invoice FROM pending_payments`).all();

	var found = false;

	rows.forEach(row => {
		// console.log("row: " + row);
		if ((row.creator == creator)) {
            // console.log("found still pending...");
			found = true;
		}
	});

    //db.close();

	return found;

}
