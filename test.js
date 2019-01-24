'use strict'

require('mocha')
const assert = require('assert')
const converter = require('hex-rgb-converter')

const getColorName = require('./index.js')

describe('gets the right name', function() {
  let colors = {
    '0da1e8': 'cyanprocess',
    '0e877d': 'surfiegreen',
    '0f5527': 'parsley',
    '101654': 'covegrey',
    '12e235': 'malachite',
    '163212': 'palmleaf',
    '18d551': 'malachite',
    '2c5fbb': 'trueblue',
    '32f198': 'mediumspringgreen',
    '3c5952': 'mineralgreen',
    '45904a': 'edengreen',
    '465344': 'andovergreen',
    '593864': 'englishviolet',
    '5eff8f': 'caribbeangreenpearl',
    '6175ed': 'mediumslateblue',
    '6253d8': 'majorelleblue',
    '6d487b': 'bishop',
    '806ef5': 'mediumslateblue',
    '8a5aa4': 'violetii',
    '8dca43': 'yellowgreen',
    '90421d': 'cumin',
    '90b6c4': 'nepal',
    '96c630': 'atlantis',
    'a07e46': 'metallicsunburst',
    'a0c8db': 'palecerulean',
    'ae6baa': 'pearlypurple',
    'b5c852': 'celery',
    'c37dca': 'frenchmauve',
    'de98aa': 'mallowpink',
    'e3d349': 'wattle',
    'e9730a': 'rosemarie',
    'f04248': 'salmonpearl',
    'f2fa2c': 'maximumyellow',
    'f5d4e2': 'wepeep',
  }

  for (let key in colors) {
    if (colors.hasOwnProperty(key)) {
      let rgb = converter.toRGB(key)
      it(key + ' should be named ' + colors[key], () => {
        assert.equal(getColorName({
          r: rgb[0],
          g: rgb[1],
          b: rgb[2],
        }), colors[key], 'expected ' + key + ' to be named ' + colors[key])
      })
    }
  }
})
