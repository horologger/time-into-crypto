// Import the package
import debug from "@types/debug";
import NDK from "@nostr-dev-kit/ndk";

// Create a new NDK instance with explicit relays
const ndk = new NDK({
    explicitRelayUrls: ["wss://relay.primal.net"],
});
// Now connect to specified relays
await ndk.connect();