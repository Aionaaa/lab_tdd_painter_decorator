const Paint = function (litres, empty) {
  this.litres = litres;
  this.empty = empty;
}


Paint.prototype.emptyPaint= function () {
  const emptyPaint = this.empty;
  this.empty = true;
};

module.exports = Paint;
