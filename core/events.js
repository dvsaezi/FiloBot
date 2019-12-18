module.exports = client => {
  const { prefix } = require('../config.json')
  client.on('message', async message => {
    if (message.author.bot) return
    if (message.channel.type === 'dm') return
    if (!message.content.startsWith(prefix)) return
    console.log(`User: ${message.author.username} || ${message.author.id} ||`)
    console.log(`Server: ${message.guild.name} || ${message.guild.id} ||`)
    console.log(`Channel: ${message.channel.name} || ${message.channel.id} ||`)
    console.log(`Message: ${message.content}`)

    const args = message.content.slice(prefix.length).split(/ +/g)
    const command = args.shift().toLowerCase()

    const commandfile = client.commands.get(command.toLowerCase())
    if (!commandfile) return
    commandfile.run(client, message, args)
  }
  )
  client.on('ready', () => {
    client.user.setActivity('filo help')
  })
}
