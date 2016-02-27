'use strict';

var assert = require('power-assert');

var GridPoint = require('../lib/GridPoint');
var GridPoints = require('../lib/GridPoints');

describe('格子点集合', function () {
    var sut;

    describe('格子点集合(5,7),(11,13)を与えたとき', function () {
        beforeEach(function () {
            var args = [new GridPoint(5, 7), new GridPoint(11, 13)];
            sut = new GridPoints(args);
        });

        it('格子点集合に(5,7)が含まれているべき', function () {
            assert.ok(sut.has(new GridPoint(5, 7)) === true);
        });

        it('格子点集合に(11,13)が含まれているべき', function () {
            assert.ok(sut.has(new GridPoint(11, 13)) === true);
        });

        it('格子点集合に(2,3)が含まれていないべき', function () {
            assert.ok(sut.has(new GridPoint(2, 3)) === false);
        });

        it('格子点が隣接してない', function () {
            assert.ok(sut.connected() === false);
        });

    });

    describe('格子点集合(2,2),(2,3)を与えたとき', function () {
        beforeEach(function () {
            var args = [new GridPoint(2, 2), new GridPoint(2, 3)];
            sut = new GridPoints(args);
        });

        it('格子点が隣接している', function () {
            assert.ok(sut.connected() === true);
        });

    });

    describe('格子点集合(2,2),(2,3),(2,4)を与えたとき', function () {
        beforeEach(function () {
            var args = [
                new GridPoint(2, 2),
                new GridPoint(2, 3),
                new GridPoint(2, 4)
            ];
            sut = new GridPoints(args);
        });

        it('格子点集合に(2,2)が含まれているべき', function () {
            assert.ok(sut.has(new GridPoint(2,2)) === true);
        });

        it('格子点集合に(2,3)が含まれているべき', function () {
            assert.ok(sut.has(new GridPoint(2,3)) === true);
        });

        it('格子点集合に(2,4)が含まれているべき', function () {
            assert.ok(sut.has(new GridPoint(2, 4)) === true);
        });

        it('格子点が隣接している', function () {
            assert.ok(sut.connected() === true);
        });

    });

    describe('格子点集合(2,2),(2,3),(2,5)を与えたとき', function () {
        beforeEach(function () {
            var args = [
                new GridPoint(2, 2),
                new GridPoint(2, 3),
                new GridPoint(2, 5)
            ];
            sut = new GridPoints(args);
        });

        it('格子点集合に(2,2)が含まれているべき', function () {
            assert.ok(sut.has(new GridPoint(2,2)) === true);
        });

        it('格子点集合に(2,3)が含まれているべき', function () {
            assert.ok(sut.has(new GridPoint(2,3)) === true);
        });

        it('格子点集合に(2,5)が含まれているべき', function () {
            assert.ok(sut.has(new GridPoint(2, 5)) === true);
        });

        it('格子点が隣接していないべき', function () {
            assert.ok(sut.connected() === false);
        });

    });

});
