const Decorator = function (name, paint) {
  this.name = name;
  this.paint = []
};

Decorator.prototype.addPaint = function(paint) {
  this.paint.push(paint)
};
