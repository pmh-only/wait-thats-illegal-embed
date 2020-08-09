const PORT = process.env.PORT || 8080

const express = require('express')
const app = express()

app.use('/src', express.static('./src'))
app.listen(PORT, () => console.log('Server is now on http://localhost:' + PORT))

module.exports = app
