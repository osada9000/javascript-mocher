'use strict';

function GridPoints(gridPoint1, gridPoint2) {
    this.gp1 = gridPoint1;
    this.gp2 = gridPoint2;
}

GridPoints.prototype.has = function (gridPoint) {

    if (this.gp1.hasSameCoordinatesWith(gridPoint)
        || this.gp2.hasSameCoordinatesWith(gridPoint)) {
        return true;
    }
    return false;
};

GridPoints.prototype.connected = function () {
    return this.gp1.isNeighborOf(this.gp2);
};


module.exports = GridPoints;
