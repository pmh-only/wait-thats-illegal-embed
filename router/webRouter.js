const path = require('path').resolve()
const { renderFile: render } = require('ejs')

/**
 * @param {import('express').Express} app
 * @param {import('knex')} db
 */
module.exports = (app, db) => {
  app.get('/',         async (  _, res) => res.redirect('/edit/-'))
  app.get('/edit/:id', async (req, res) => {
    let [ embed ] = await db.select('*').where('id', req.params.id).from('embeds')
    if (!embed) embed = require('../presets/notfound.json')
    const html = await render(path + '/page/editor.ejs', { embed }, { async: true })
    res.send(html)
  })
  app.get('/:id', async (req, res) => {
    let [ embed ] = await db.select('*').where('id', req.params.id).from('embeds')
    if (!embed) embed = require('../presets/notfound.json')
    const html = await render(path + '/page/embed.ejs', { embed, id: req.params.id }, { async: true })
    res.send(html)
  })
}