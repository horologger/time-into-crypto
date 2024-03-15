const { addTimeSlot, delTimeSlot, dumpTimeSlots } = require('./ts_test');

describe('Time Slot Management', () => {
  let slot;

  beforeEach(() => {
    slot = {
      "label": "test",
      "receiver": "test",
      "start": 0,
      "end": 0
    };
  });

  afterEach(() => {
    dumpTimeSlots(); // Reset the time slots after each test
  });

  test('Adding a time slot', () => {
    const uuid = addTimeSlot(slot);
    expect(uuid).toBeTruthy(); // Ensure a valid UUID is returned
    expect(slot.id).toBe(uuid); // Ensure the slot's ID is set correctly
    expect(gtimeslots.length).toBe(1); // Ensure the slot is added to the time slots array
  });

  test('Deleting a time slot', () => {
    const uuid = addTimeSlot(slot);
    delTimeSlot(uuid);
    expect(gtimeslots.length).toBe(0); // Ensure the slot is removed from the time slots array
  });

  test('Dumping time slots', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    addTimeSlot(slot);
    dumpTimeSlots();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(slot.id)); // Ensure the slot's ID is logged
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(slot.label)); // Ensure the slot's label is logged
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(slot.created.toString())); // Ensure the slot's created timestamp is logged
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(slot.receiver)); // Ensure the slot's receiver is logged
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(slot.start.toString())); // Ensure the slot's start timestamp is logged
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(slot.end.toString())); // Ensure the slot's end timestamp is logged
  });
});