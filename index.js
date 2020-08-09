const app = require('./functions/listen')
const db = require('./functions/database')

const webRouter = require('./router/webRouter')
const apiRouter = require('./router/apiRouter')

webRouter(app, db)
apiRouter(app, db)
