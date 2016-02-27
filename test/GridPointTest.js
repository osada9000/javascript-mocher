'use strict';

var assert = require('power-assert');

var GridPoint = require('../lib/gridpoint');

describe('格子点', function () {
    var sut;

    describe('x:1, y:2を与えたとき', function () {
        beforeEach(function () {
            sut = new GridPoint(1, 2);
        });

        it('x 座標の値は 1 であるべき', function () {
            assert.ok(sut.getX() === 1);
        });

        it('Y 座標の値は 2 であるべき', function () {
            assert.ok(sut.getY() === 2);
        });

        it('文字列表記は (1,2) であるべき', function () {
            assert.ok(sut.getNotation() === '(1,2)');
        });

        it('別の格子点(1,2)と比較して同じ座標であるべき', function () {
            assert.ok(sut.hasSameCoordinatesWith(new GridPoint(1, 2)) === true);
        });

        it('格子点(2,2)と比較して異なる座標であるべき', function () {
            assert.ok(sut.hasSameCoordinatesWith(new GridPoint(2, 2)) === false);
        });

    });

});
