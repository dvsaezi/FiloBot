const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return
  const embed1 = new Discord.MessageEmbed()
    .setColor('#f59c42')
    .setDescription(args.slice(0).join(' ')
    )
  message.channel.send(embed1)
}
module.exports.info = {
  name: 'say',
  permissions: 'MANAGE MESSAGES',
  ownerOnly: false
}
