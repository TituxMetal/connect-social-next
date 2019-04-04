const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = require('./server/app')

app.prepare().then(() => {
  server.get('*', (req, res) => handle(req, res))
  server.listen(port, err => {
    if (err) {
      throw err
    }
    console.log(`Running on http://tuxi.local:${port}`)
  })
})
