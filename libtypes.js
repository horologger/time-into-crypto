
const d10mins = 10 * 60 * 1000;
const d15mins = 15 * 60 * 1000;
const d20mins = 20 * 60 * 1000;
const d30mins = 30 * 60 * 1000;
const d60mins = 60 * 60 * 1000;
const d90mins = 90 * 60 * 1000;

// Enum structure for slot states
const TimeSlotState = {
    CREATED: 'created',
    AVAILABLE: 'available',
    RESERVED: 'reserved',
    CONFIRMED: 'confirmed',
    REJECTED: 'rejected',
    CANCELED: 'canceled',
    T_MINUS_60: 't_minus_60',
    LATE_CREATOR: 'late_creator',
    LATE_RESERVOR: 'late_reservor',
    NOSHOW_CREATOR: 'noshow_creator',
    NOSHOW_RESERVOR: 'noshow_reservor',
    IN_PROGRESS: 'in_progress',
    PAUSED_CREATOR: 'paused_creator',
    PAUSED_RESERVOR: 'paused_reservor',
    PAUSED_PENDING_PAYMENT: 'paused_pending_payment',
    STOPPED_CREATOR: 'stopped_creator',
    STOPPED_RESERVOR: 'stopped_reservor',
    TERMINATED_CREATOR: 'terminated_creator',
    TERMINATED_RESERVOR: 'terminated_reservor',
    GOING_LONG: 'going_long',
    COMPLETED: 'completed',
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
    "pause": 0,
    "duration": d30mins,
    "satsmin": 10000,
    "quote": 1.234,
    "currency": "usd",
    "state": TimeSlotState.CREATED
};
  
// Enum structure for event states
const EventState = {
    ACTIVE: 'active',
    TRIGGERED: 'triggered',
    PROCESSED: 'processed'
};

// Enum structure for event states
const EventType = {
    UNKNOWN: 'unknown',
    INFO: 'info',
    NOSTR_DM: 'nostr_dm',
    INVOICE: 'invoice'
};
  

// Initial time slot data
const event = {
    "id": "unknown",
    "type": EventType.UNKNOWN,
    "label": "unknown",
    "creator": "unknown",
    "reservor": "unknown",
    "trigger": Date.now() + d60mins,
    "dest": "unknown", // "wss://relay.example.com
    "data": "{}",
    "state": EventState.ACTIVE
};
  
module.exports = {
    TimeSlotState: TimeSlotState,
    EventState: EventState,
    EventType: EventType
}
