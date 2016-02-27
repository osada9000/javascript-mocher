'use strict';

function GridPoints(gridPointList) {
    this.gpList = gridPointList;

}

GridPoints.prototype.has = function (gridPoint) {

    var res = false;
    for (var i = 0; i < this.gpList.length; i++) {
        if (this.gpList[i].hasSameCoordinatesWith(gridPoint)) {
            res = true;
            break;
        }
    }

    return res;
};

GridPoints.prototype.connected = function () {
    for (var i = 0; i < this.gpList.length - 1; i++) {
        if (!this.gpList[i].isNeighborOf(this.gpList[i + 1])) {
            return false;
        }
    }
    return true;
};


module.exports = GridPoints;
