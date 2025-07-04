import express from 'express'
import routes from './router/router.js'

const app = express()

const port = 3000

app.use(express.json())

app.use('/', routes)

app.listen(port,  () => {
    console.log(`Listening on port ${port}`)
})