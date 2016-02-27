'use strict';

var assert = require('power-assert');

var GridPoint = require('../lib/GridPoint');
var GridPoints = require('../lib/GridPoints');

describe('格子点集合', function () {
    var sut;

    describe('格子点集合(5,7),(11,13)を与えたとき', function () {
        beforeEach(function () {
            sut = new GridPoints(new GridPoint(5, 7), new GridPoint(11, 13));
        });

        it('格子点集合に(5,7)が含まれているべき', function () {
            assert.ok(sut.has(new GridPoint(5,7)) === true);
        });

        it('格子点集合に(11,13)が含まれているべき', function () {
            assert.ok(sut.has(new GridPoint(11,13)) === true);
        });

        it('格子点集合に(2,3)が含まれていないべき', function () {
            assert.ok(sut.has(new GridPoint(2,3)) === false);
        });

        it('格子点が隣接してない', function () {
            assert.ok(sut.connected() === false);
        });

    });

    describe('格子点集合(2,2),(2,3)を与えたとき', function () {
        beforeEach(function () {
            sut = new GridPoints(new GridPoint(2, 2), new GridPoint(2, 3));
        });

        it('格子点が隣接している', function () {
            assert.ok(sut.connected() === true);
        });

    });
});
