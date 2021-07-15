import express from 'express'
import cors from 'cors'
const app = express()

import { test } from './src/data/sampleTest.js'

app.use(cors())
app.use(express.json())

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    })
})

app.post('/grade', (req, res) => {
    var correct = 0
    var testResponse = req.body["testResponse"]
    console.log('grading')
    test.map((question, i) => {
        if (question["solution"] === testResponse[i]) {
            correct += 1
        }
    })
    res.send({ data: correct })
})

app.listen(8080, () => console.log('API is running on http://localhost:8080'))