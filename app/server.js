var express = require('express')
var converter = require('..')

var app = express()

app.get('./toCelsius', (req, res) => {
  var temperature = req.query.temperature
  res.status(200).send(converter.toCelsius(temperature))
})

app.get('./toFahreheit', (req, res) => {
  var temperature = req.query.temperature
  res.status(200).send(converter.toFarenheit(temperature))
})




app.listen(3000, (err) => {
 if(err) return console.log('Hubo un error'), process.exit(1)

 console.log('Escuchando en el puerto 3000')
})
