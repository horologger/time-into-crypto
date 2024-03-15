var uid = require('uid-safe');

const vacuum8 = "6771ce6cf4a229db78fa8fcf092c943580d186145baa1218b60070f116ba99ff";
const horologger = "7bdef7f39298dc57996c9b7adc08db1eeaf02208437ba01bf4cbe2e8c17a72a5";

var gtimeslots = []; // Table of timeslots for each tenant

const slot = {
    "id": "unknown",
    "label": "unknown",
    "created": 0,
    "receiver": "unknown",
    "start": 1710350693682,
    "end": 1710350813682
};

var TimeSlotManager = (function () {
    var instance;

    function init() {
        // Private methods and variables
        return {
            addTimeSlot: function (slot) {
                var uuid = uid.sync(8);
                slot.id = uuid;
                slot.created = (new Date(Date.now() + 0)).getTime();
                console.log("uuid: " + uuid);
                gtimeslots.push(slot);
                return uuid;
            },
            delTimeSlot: function (uuid) {
                var index = gtimeslots.findIndex(x => x.id === uuid);
                if (index > -1) {
                    gtimeslots.splice(index, 1);
                }
            },
            dumpTimeSlots: function (key, ascend = true) {
                if (key) {
                    const sortedSlots = gtimeslots.slice().sort(function(a, b) {
                        return ascend ? a[key] - b[key] : b[key] - a[key];
                    });
                    sortedSlots.forEach(function(slot) {
                        console.log("uuid: " + slot.id + " label: " + slot.label + " created: " + slot.created + " receiver: " + slot.receiver + " start: " + slot.start + " end: " + slot.end);
                    });
                    return sortedSlots;
                } else {
                    console.log("No key provided. Returning unsorted list:");
                    gtimeslots.forEach(function(slot) {
                        console.log("uuid: " + slot.id + " label: " + slot.label + " created: " + slot.created + " receiver: " + slot.receiver + " start: " + slot.start + " end: " + slot.end);
                    });
                    return gtimeslots.slice(); // Return unsorted list if no key is provided
                }
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

// Usage of the Singleton instance with refactored variable name
var timeSlotMgr = TimeSlotManager.getInstance();

const first = timeSlotMgr.addTimeSlot({ "label": "first", "receiver": vacuum8, "start": (new Date(Date.now() + (5 * 60 * 1000))).getTime(), "end": (new Date(Date.now() + (7 * 60 * 1000))).getTime() });
const second = timeSlotMgr.addTimeSlot({ "label": "second", "receiver": horologger, "start": (new Date(Date.now() + (8 * 60 * 1000))).getTime(), "end": (new Date(Date.now() + (9 * 60 * 1000))).getTime() });
const third = timeSlotMgr.addTimeSlot({ "label": "third", "receiver": horologger, "start": (new Date(Date.now() + (9 * 60 * 1000))).getTime(), "end": (new Date(Date.now() + (10 * 60 * 1000))).getTime() });
const fourth = timeSlotMgr.addTimeSlot({ "label": "fourth", "receiver": horologger, "start": (new Date(Date.now() + (8 * 60 * 1000))).getTime(), "end": (new Date(Date.now() + (11 * 60 * 1000))).getTime() });

timeSlotMgr.delTimeSlot(second);

console.log("Sorted by start ascending:");
timeSlotMgr.dumpTimeSlots("start", true);

console.log("Sorted by end descending:");
timeSlotMgr.dumpTimeSlots("end", false);
