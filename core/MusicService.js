const { Shoukaku } = require('shoukaku')
let instance
module.exports = client => {
  function createInstance () {
    instance = new Shoukaku(client, {
      moveOnDisconnect: false,
      resumable: true,
      resumableTimeout: 120,
      reconnectTries: 2,
      restTimeout: 10000
    })
    instance.on('ready', (name) => console.log(`Lavalink Node: ${name} is now connected`))
    instance.on('error', (name, error) => console.log(`Lavalink Node: ${name} encountered an error.`, error))
    instance.on('close', (name, code, reason) => console.log(`Lavalink Node: ${name} closed with code ${code}. Reason: ${reason || 'No reason'}`))
    instance.on('disconnected', (name, reason) => console.log(`Lavalink Node: ${name} disconnected. Reason: ${reason || 'No reason'}`))
  }

  if (instance === null) createInstance()
  return instance
}
