import mongoose from 'mongoose'

export default (url, options = {}) => {
  mongoose.Promise = global.Promise

  let connection = null

  /**
   * @return {Promise}
   */
  const connect = () => new Promise((resolve, reject) => {
    if (connection) {
      resolve(connection)
    }

    mongoose.connect(url, options)
      .then(() => {
        console.log('\x1b[33m%s\x1b[0m', `[MongoDB] Successfully connected to ${url} `)
        connection = mongoose.connection

        resolve(connection)
      })
      .catch((err) => {
        console.log('\x1b[33m%s\x1b[0m', `[MongoDB] Failed connected to ${url} `)
        reject(err)
      })
  })

  /**
   * @return {Promise}
   */
  const close = () => new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('[MongoDB] There is no mongodb connection yet'))
    }

    connection.close(() => {
      // eslint-disable-next-line
      console.log('\x1b[33m%s\x1b[0m', `[MongoDB] Successfully disconnected from ${url}!`)
      resolve(true)
    })
  })

  /**
   * @return {void}
   */
  const clear = async () => {
    try {
      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      let collectionName = 0
      for (collectionName in mongoose.connection.collections) {
        const collection = mongoose.connection.collections[collectionName]

        await collection.collection.remove()
      }
    } catch (err) {
      // eslint-disable-next-line
      console.log('[App] Error when attempting to clear mongo collections', err)
    }
  }

  return {
    connect,
    close,
    clear
  }
}
