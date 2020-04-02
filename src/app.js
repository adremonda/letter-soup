const express = require('express')
const LetterSoup = require('./LetterSoup.js')
const { check, validationResult} = require('express-validator')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080
const max2d = 100
const range = (x) => max2d > x && x > 0

app.use(express.urlencoded({ extended: true }))

app.post('/ocurrence', [
    check('columns').exists().bail().isNumeric().toInt().custom(range),
    check('rows').exists().bail().isNumeric().toInt().custom(range),
    check('characters').exists().bail().isAlpha().trim()
        .custom((chras, { req }) => chras.length === req.body.rows*req.body.columns),
    check('word').optional().isAlpha().trim()
    ],  
    (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const word = req.body.word || 'OIE'
    const letterSoup = new LetterSoup(req.body.rows, req.body.columns, req.body.characters)
    res.json({
        ocurrence: letterSoup.ocurrence(word)
    })
})


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})