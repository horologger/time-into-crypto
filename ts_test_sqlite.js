// Importing necessary modules
var uid = require('uid-safe');
const Database = require('better-sqlite3');

// Creating an in-memory SQLite database
const db = new Database(':memory:');

// Constants for unique identifiers
const vacuum8 = "6771ce6cf4a229db78fa8fcf092c943580d186145baa1218b60070f116ba99ff";
const horologger = "7bdef7f39298dc57996c9b7adc08db1eeaf02208437ba01bf4cbe2e8c17a72a5";
const d10mins = 10 * 60 * 1000;
const d15mins = 15 * 60 * 1000;
const d20mins = 20 * 60 * 1000;
const d30mins = 30 * 60 * 1000;
const d60mins = 60 * 60 * 1000;
const d90mins = 90 * 60 * 1000;

// Creating timeslots table in the SQLite database
db.exec("CREATE TABLE timeslots (id TEXT, label TEXT, created INTEGER, creator TEXT, reservor TEXT, start INTEGER, duration INTEGER, state INTEGER)");

// Enum structure for slot states
const TimeSlotState = {
  CREATED: 'created',
  AVAILABLE: 'available',
  RESERVED: 'reserved',
  REJECTED: 'rejected',
  CANCELED: 'canceled',
  LATE_CREATOR: 'late_creator',
  LATE_RESERVOR: 'late_reservor',
  NOSHOW_CREATOR: 'noshow_creator',
  NOSHOW_RESERVOR: 'noshow_reservor',
  PAUSED_CREATOR: 'paused_creator',
  PAUSED_RESERVOR: 'paused_reservor',
  INPROGRESS: 'in_progress',
  GOING_LONG: 'going_long',
  COMPLETE: 'complete',
  EXPIRED: 'expired',
  REFUNDED: 'refunded'
};

// Initial time slot data
const timeslot = {
  "id": "unknown",
  "label": "unknown",
  "creator": "unknown",
  "reservor": "unknown",
  "start": Date.now() + d60mins,
  "duration": d30mins,
  "state": TimeSlotState.CREATED
};

// Singleton pattern implementation for TimeSlotManager
var TimeSlotManager = (function() {
    var instance;

    function init() {
        // Private methods and variables
        return {
            addTimeSlot: function(timeslot) {
                // Generate unique ID and set creation timestamp
                var uuid = uid.sync(8);
                timeslot.id = uuid;
                timeslot.created = Date.now();
                console.log("uuid: " + uuid);
                timeslot.reservor = "unknown";
                timeslot.state = TimeSlotState.CREATED;
                
                // Insert timeslot into the SQLite database using transactions for better-sqlite3
                const stmt = db.prepare("INSERT INTO timeslots VALUES (@id, @label, @created, @creator, @reservor, @start, @duration, @state)");
                const result = stmt.run(timeslot);
                
                return uuid;
            },
            delTimeSlot: function(uuid) {
                // Delete timeslot from the SQLite database using transactions for better-sqlite3
                const stmt = db.prepare("DELETE FROM timeslots WHERE id = ?");
                const result = stmt.run(uuid);
            },
            dumpTimeSlots: function(key, ascend = true) {
                // Retrieve and display timeslots sorted by the specified key
                let order = ascend ? 'ASC' : 'DESC';
                const stmt = db.prepare(`SELECT * FROM timeslots ORDER BY ${key} ${order}`);
                const rows = stmt.all();
                rows.forEach(row => {
                    console.log(`uuid: ${row.id} label: ${row.label} created: ${row.created} creator: ${row.creator} reservor: ${row.reservor} start: ${row.start} duration: ${row.duration}`);
                });
            },
            getAllTimeSlots: function(key, ascend = true) {
                let order = ascend ? 'ASC' : 'DESC';
                const stmt = db.prepare(`SELECT * FROM timeslots ORDER BY ${key} ${order}`);
                const rows = stmt.all();
                return rows;    
            },
            getCreatorTimeSlots: function(creator, key, state, ascend = true) {
                let order = ascend ? 'ASC' : 'DESC';
                const stmt = db.prepare(`SELECT * FROM timeslots WHERE creator = ? AND state = ? ORDER BY ${key} ${order}`);
                const rows = stmt.all(creator, state);
                return rows;    
            },
            getReservorTimeSlots: function(reservor, key, state, ascend = true) {
                let order = ascend ? 'ASC' : 'DESC';
                const stmt = db.prepare(`SELECT * FROM timeslots WHERE reservor = ? AND state = ? ORDER BY ${key} ${order}`);
                const rows = stmt.all(reservor, state);
                return rows;    
            },
            reserveTimeSlot: function(id, reservor) {
                const stmt = db.prepare("UPDATE timeslots SET reservor = ?, state = ? WHERE id = ?");
                const result = stmt.run(reservor, TimeSlotState.RESERVED, id);
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

// Get an instance of TimeSlotManager
var timeSlotMgr = TimeSlotManager.getInstance();

// Add initial time slots
const first = timeSlotMgr.addTimeSlot({  "label": "1st", "creator": vacuum8, "start": Date.now() + (5 * 60 * 1000), "duration": d30mins });
const second = timeSlotMgr.addTimeSlot({ "label": "2nd", "creator": horologger, "start": Date.now() + (8 * 60 * 1000), "duration": d10mins });
const third = timeSlotMgr.addTimeSlot({  "label": "3rd", "creator": horologger, "start": Date.now() + (9 * 60 * 1000), "duration": d20mins });
const fourth = timeSlotMgr.addTimeSlot({ "label": "4th", "creator": horologger, "start": Date.now() + (8 * 60 * 1000), "duration": d30mins });

// Delete a time slot
timeSlotMgr.delTimeSlot(second);

// Display time slots sorted by start time in ascending order
console.log("Sorted by start ascending:");
timeSlotMgr.dumpTimeSlots("start", true);

// Display time slots sorted by duration time in descending order
console.log("Sorted by duration descending:");
timeSlotMgr.dumpTimeSlots("duration", false);

// Additional time slot operations
const fifth = timeSlotMgr.addTimeSlot({ "label": "5th", "creator": vacuum8, "start": Date.now() + (12 * 60 * 1000), "duration": d90mins });
const sixth = timeSlotMgr.addTimeSlot({ "label": "6th", "creator": horologger, "start": Date.now() + (15 * 60 * 1000), "duration": d60mins });

// Delete another time slot
// timeSlotMgr.delTimeSlot(fifth);

// Display time slots sorted by duration time in ascending order
console.log("Sorted by duration ascending:");
timeSlotMgr.dumpTimeSlots("duration", true);

// Display time slots sorted by creation time in descending order
console.log("Sorted by created descending:");
timeSlotMgr.dumpTimeSlots("created", false);

// Call the reserveTimeSlot function with an example id and reservor
timeSlotMgr.reserveTimeSlot(first, horologger); // Assuming 'first' is the id of the time slot to be reserved
timeSlotMgr.reserveTimeSlot(fifth, horologger); // Assuming 'fifth' is the id of the time slot to be reserved

// Generate a call to getAllTimeSlots
const allTimeSlots = timeSlotMgr.getAllTimeSlots("start", true);
console.log("\nTime Slots:");
allTimeSlots.forEach(slot => {
    console.log(`uuid: ${slot.id} label: ${slot.label} created: ${slot.created} creator: ${slot.creator} reservor: ${slot.reservor} start: ${slot.start} duration: ${slot.duration} state: ${slot.state}`);
});

// Generate a call to getCreatorTimeSlots where state is reserved
const reservedTimeSlots = timeSlotMgr.getReservorTimeSlots(horologger, "start", TimeSlotState.RESERVED);
console.log("\nTime Slots with state RESERVED:");
reservedTimeSlots.forEach(slot => {
    console.log(`uuid: ${slot.id} label: ${slot.label} created: ${slot.created} creator: ${slot.creator} reservor: ${slot.reservor} start: ${slot.start} duration: ${slot.duration}`);
});


// Generate a call to getCreatorTimeSlots where state is reserved
const createdTimeSlots = timeSlotMgr.getCreatorTimeSlots(horologger, "start", TimeSlotState.CREATED);
console.log("\nTime Slots with state CREATED:");
createdTimeSlots.forEach(slot => {
    console.log(`uuid: ${slot.id} label: ${slot.label} created: ${slot.created} creator: ${slot.creator} reservor: ${slot.reservor} start: ${slot.start} duration: ${slot.duration}`);
});