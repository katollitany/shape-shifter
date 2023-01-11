const rectangleArea = require('./rectangleArea')

/**
 * @param {number} a - the base
 * @param {number} b - the height
 * @returns {number} the area
 */

function triangleArea(a, b) {
 const rectangleArea = (b * a)/2
  return rectangleArea 
}

module.exports = triangleArea