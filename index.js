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
 * Expose `euclidean`.
 */
exports = module.exports = euclidean;