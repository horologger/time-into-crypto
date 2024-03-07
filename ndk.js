"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ndk_1 = require("@nostr-dev-kit/ndk");
// Create a new NDK instance with explicit relays
var ndk = new ndk_1.default({
    explicitRelayUrls: ["wss://relay.primal.net"],
});
// Now connect to specified relays
await ndk.connect();
