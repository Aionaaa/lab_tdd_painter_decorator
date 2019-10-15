const Room = function (area, painted) {
  this.area = area;
  this.painted = painted;
};

Room.prototype.paintRoom = function () {
  const roomPainted = this.painted;
  this.painted = true;
};

module.exports = Room;
