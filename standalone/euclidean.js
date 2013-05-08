(function (window) {
    'use strict';

    /**
     * Module dependencies.
     */
    var M = window.Math;

    /**
     * Calculate distance between two points.
     * @private
     * @function
     * @param {Object} p1 - A given point with coordenates xy.
     * @param {Object} p2 - A given point with coordenates xy.
     * @returns {Number}
     */
    function euclidean(p1, p2) {
        var deltaX = M.pow(p1.x - p2.x, 2),
            deltaY = M.pow(p1.y - p2.y, 2);

        return M.floor(M.sqrt(deltaX + deltaY));
    }

    /**
     * Expose euclidean
     */
    // AMD suppport
    if (typeof window.define === 'function' && window.define.amd !== undefined) {
        window.define('euclidean', [], function () {
            return euclidean;
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = euclidean;

    // Default
    } else {
        window.euclidean = euclidean;
    }
}(this));