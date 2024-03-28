module.exports = {
	getNodeInfo: getNodeInfo,
	subToInvoice: subToInvoice,
    getNewInvoiceInfo: getNewInvoiceInfo,
    subToInvoices: subToInvoices,
    getInvoiceResult: getInvoiceResult
};

const db = require('./library');

const {getWalletInfo} = require('ln-service');


// https://github.com/alexbosworth/ln-service#all-methods

// Get info about the Lightning node
async function getNodeInfo() {
    try {
        const walletInfo = await getWalletInfo({ lnd });
        // console.log(`info: ${JSON.stringify(walletInfo, null, 2)}`);
        console.log(`lightning node: ${JSON.stringify(walletInfo.alias, null, 2)}`);
        console.log(`peers_count: ${JSON.stringify(walletInfo.peers_count, null, 2)}`);
        console.log(`public_key: ${JSON.stringify(walletInfo.public_key, null, 2)}`);

        console.log("\nReconnect any websocket browser windows...");

        return walletInfo;
    } catch (err) {
        console.error(`Error getting node info: ${err.message}`)
    }
}

const {subscribeToInvoice} = require('ln-service');

const {once} = require('events');

async function subToInvoice(id) {
    // console.log(`Waiting for Payment...`);
    try {
        const sub = subscribeToInvoice({ id: id, lnd: lnd });
        const [invoice] = await once(sub, 'invoice_updated');
        // console.log(`invoice: ${JSON.stringify(invoice, null, 2)}`);
        return invoice;
    } catch (err) {
        console.error(`Error creating invoice info: ${err.message}`)
    }
}

const {getInvoice} = require('ln-service');
const {createInvoice} = require('ln-service');

async function getNewInvoiceInfo(inv) {
    // console.log(`Creating New Invoice...`);
    try {
        const invoice = await createInvoice(inv);
        // console.log(`invoice: ${JSON.stringify(invoice, null, 2)}`);
        // subToInvoice(invoice.id);
        //waitForPayment(invoice.id);
        return invoice;
    } catch (err) {
        console.error(`Error creating invoice info: ${err.message}`)
    }
}

// https://github.com/alexbosworth/ln-service#subscribetoinvoices

// const {subscribeToInvoice} = require('ln-service');
const {subscribeToInvoices} = require('ln-service');

async function subToInvoices() {
    // console.log(`Waiting for Payments...`);
    try {
        const sub = subscribeToInvoices({ lnd: lnd });
        sub.on('invoice_updated', (invoice) => {
            // console.log(`invoice payment: ${JSON.stringify(invoice, null, 2)}`);
            if (invoice.is_confirmed) { // Invoice was paid
                delPendingPaymentID(invoice.id);    // Delete it so our busy polling will exit and not timeout
            }
        });
        // const [invoice] = await once(sub, 'invoice_updated');
        // console.log(`invoice payment: ${JSON.stringify(invoice, null, 2)}`);
        // See if it's paying a known invoice
        // Clear the pending_payment
    } catch (err) {
        console.error(`Error creating invoice info: ${err.message}`)
    }
}

async function getInvoiceResult(id) {
    try {
        const invoiceDetails = await getInvoice({id, lnd});
        // console.log(`invoiceDetails: ${JSON.stringify(invoiceDetails, null, 2)}`);
        return invoiceDetails;
    } catch (err) {
        console.error(`Error getting invoice info: ${err.message}`)
    }
}
