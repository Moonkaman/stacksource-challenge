const express = require('express')
const app = express()
const port = 8000

const util = require('./util')

const zipCodes = new Set()

app.post('/insert/:zip', (req, res) => {
  try {
    const newZip = Number(req.params.zip)
    zipCodes.add(newZip)
  
    res.status(200).send(`Zip code ${newZip} inserted.`)
  } catch(err) {
    console.log(err)

    res.status(500).send('Oops, something went wrong')
  }
})

app.delete('/delete/:zip', (req, res) => {
  try {
    const zip = Number(req.params.zip)
    if (zipCodes.has(zip)) {
      zipCodes.delete(zip)
      res.status(200).send(`Zip code ${zip} deleted.`)
    } else {
      res.status(404).send()
    }
  } catch(err) {
    console.log(err)
    res.status(500).send('Oops, something went wrong')
  }
})

app.get('/has/:zip', (req, res) => {
  try {
    const zip = Number(req.params.zip)
  
    if (zipCodes.has(zip)) {
      res.status(200).send('true')
    } else {
      res.status(404).send('false')
    }
  } catch(err) {
    res.status(500).send('Oops, something went wrong')
  }
})

app.get('/display', (req, res) => {
  try {
    if (zipCodes.size === 0) {
      res.status(404).send("No zips are stored.")
    } else {
      const formattedZips = util.displayZipCodes(zipCodes)
      res.status(200).send(formattedZips)
    }
  } catch(err) {
    res.status(500).send('Oops, something went wrong')
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})