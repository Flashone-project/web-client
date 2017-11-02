const logger = require('../lib/logger')
let port = 4000
logger.info('Starting server...')
require('../../server/main').listen(port, () => {
  logger.success(`Server is running at http://localhost:${port}`)
})
