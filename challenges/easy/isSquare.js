/**
 * Determine if a rectangle is a square
 * @param {number} a - the base
 * @param {number} b - the height
 * @returns {boolean}
 */

function isSquare (a, b) {
  if (a === b) {
    return true
  } else {
    return false
  }
}

module.exports = isSquare
