'use strict'

const colorTable = require('./colors.js')
const lookupCache = {}

// calculate the euclidian difference between the two RGB points,
// this is not the visual distance!
// https://en.wikipedia.org/wiki/Color_difference
function getSquareDistance(color1, color2) {
  let rgbDistance = (
    Math.pow(color2.r - color1.r, 2) + 
    Math.pow(color2.g - color1.g, 2) +
    Math.pow(color2.b - color1.b, 2)
  )
  return rgbDistance
}

// convert rgb object to simple string for lookup object
function colorToId(color) {
  return 'r' + color.r +
         'g' + color.g +
         'b' + color.b
}

// checks that color is an object containing r, g & b attributes
function isValidColorObject(color) {
  if (typeof color !== 'object') {
    return false
  }
  if (
    !color.hasOwnProperty('r') ||
    !color.hasOwnProperty('g') ||
    !color.hasOwnProperty('b')
  ) {
    return false
  }
  return true
}

module.exports = function (targetColor) {
  if (!isValidColorObject(targetColor)) {
    return null
  }
  let targetColorId = colorToId(targetColor)
  if (targetColorId in lookupCache) {
    return lookupCache[targetColorId]
  }

  let nearestDistance = null
  let nearestName = null

  // we're using a naive sorting algorithm,
  // simply iterating over every color entry
  for (let key in colorTable) {
    if (colorTable.hasOwnProperty(key)) {
      let currentDistance = getSquareDistance(targetColor, colorTable[key])
      // perfect match? we're done
      if (currentDistance === 0) {
        return key
      }
      if (nearestDistance === null || currentDistance < nearestDistance) {
        nearestDistance = currentDistance
        nearestName = key
      }
    }
  }

  return nearestName
}
