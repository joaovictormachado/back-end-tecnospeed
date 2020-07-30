import app from './app'
import config from './config/global'
import log from './utils/logger'

//Exception não tratada
process.on('uncaughtException', error => {
  log.error(`uncaughtExecption event:${error && error.message}`)
})

//Rejeção não tratada e Promise não tratada

process.on('unhandledRejection', (reason, Promise) => {
  log.error(`unhandledRejection event at: $ {promise}:reason:${reason}`)
})
const start = async () => {
  try {
    await app.listen(config.port, '0.0.0.0')
    log.info(`Server running on port: ${config.port}`)
  } catch (error) {
    log.error(`Error while starting the server: ${error && error.message}`, {
      stack: error.stack
    })
  }
}

start()
