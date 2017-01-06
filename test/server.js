var axios = require('axios')
var expect = require('chai').expect

describe('Temperature Converter API', () => {
  describe('Celsius to Fahrenheit Conversion', () => {

    it('returns status 200', (done) => {
      axios
        .get('http://localhost:3000/toFahreheit?temperature=100')
        .then((res) => expect(res.status).to.equal(200))
        done()
    })

    it('returns 100C in Fahrenheit', (done) => {
      axios
        .get('http://localhost:3000/toFahreheit?temperature=100')
        .then((res) => expect(res.status).to.equal(212))
        done()
    })

  })

  describe('Fahrenheit to Celsius Conversion', () => {

    it('returns status 200', (done) => {
      axios
        .get('http://localhost:3000/toCelsius?temperature=212')
        .then((res) => expect(res.status).to.equal(200))
        done()
    })

    it('returns 100C in Fahrenheit', (done) => {
      axios
        .get('http://localhost:3000/toCelsius?temperature=212')
        .then((res) => expect(res.status).to.equal(100))
        done()
    })

  })

})
