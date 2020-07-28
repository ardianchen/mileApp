import app from './app.js'
import { database } from './database'

const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV

const db = database(process.env.MONGO_URL, {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASSWORD,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
})

db.connect().then(() => {
  app.listen(PORT, () => {
    console.log('\x1b[32m%s\x1b[0m', `[App] Listening on http://localhost:${PORT} in ${ENV} environment`)
  })
})
