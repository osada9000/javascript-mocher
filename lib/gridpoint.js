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

GridPoint.prototype.isNeighborOf = function (gridPoint) {
    if (gridPoint.getX() === this.x && gridPoint.getY() === this.y + 1) {
        return true;
    }
    if (gridPoint.getX() === this.x + 1 && gridPoint.getY() === this.y) {
        return true;
    }
    if (gridPoint.getX() === this.x && gridPoint.getY() === this.y - 1) {
        return true;
    }
    if (gridPoint.getX() === this.x - 1 && gridPoint.getY() === this.y) {
        return true;
    }

    return false;
};

module.exports = GridPoint;
