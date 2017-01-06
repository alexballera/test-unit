/**
 * Module dependencies
 */

var expect = require('chai').expect
var converter = require('..')

describe('Temparature Converter', () => {

  describe('Celsius to Fahrenheit Conversion', () => {

    it('Converts 100C to Farenheit', () => {
      var fh = converter.toFarenheit(100)
      expect(fh).to.equal(212)
    })
  })

  describe('Fahrenheit to Celsius Conversion', () => {

    it('Converts 212F to Farenheit', () => {
      var fh = converter.toCelsius(212)
      expect(fh).to.equal(100)
    })
  })
})
