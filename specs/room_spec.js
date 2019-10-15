const assert = require("assert");
const Room = require("../room.js");

describe("Room", function () {
  let room;
  beforeEach(function () {
    room = new Room(10, false)
  });

  it("should not start painted", function () {
    const actual = room.painted;
    assert.strictEqual(actual, false)
  });

  it("should be paintable", function () {
    room.paintRoom();
    const actual = room.painted;
    assert.strictEqual(actual, true)
  })
});
