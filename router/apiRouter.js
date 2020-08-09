const cryptoRandom = require('crypto-random-string')

/**
 * @param {import('express').Express} app
 * @param {import('knex')} db
 */
module.exports = (app, db) => {
  app.get('/api/create', async (req, res) => {
    let { header, title, description, image, bigimg, color } = req.query
    bigimg = bigimg === "true"
    const id = cryptoRandom({ length: 10, type: 'url-safe' })
    await db.insert({ id, header, title, description, image, bigimg, color }).from('embeds')
    res.send({ success: true, id })
  })
}
