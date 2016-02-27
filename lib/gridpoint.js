'use strict';

function GridPoint(x, y) {
    this.x = x;
    this.y = y;
}

GridPoint.prototype.getX = function () {
    return this.x;
};

GridPoint.prototype.getY = function () {
    return this.y;
};

GridPoint.prototype.getNotation = function () {
    return '(' + this.x + ',' + this.y + ')';
};

GridPoint.prototype.hasSameCoordinatesWith = function (gridPoint) {
    return (this.x === gridPoint.getX() && this.y === gridPoint.getY());
};

module.exports = GridPoint;
