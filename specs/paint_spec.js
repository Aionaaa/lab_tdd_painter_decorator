const assert = require("assert")
const Paint = require("../paint.js")

describe("paint", function () {

  let paint;

beforeEach(function () {
  paint = new Paint(2, false)
});

it("shouldnt be empty",  function () {
  const actual = paint.empty;
  assert.strictEqual(actual, false)
});

it("should be able to empty", function () {
  paint.emptyPaint();
  const actual = paint.empty;
  assert.strictEqual(actual, true)
});

})
