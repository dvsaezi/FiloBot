const shoukaku = require('../../core/MusicService.js')
module.exports.run = async (client, message, args) => { // a good practice is to space out ur code by what it does
  // exit cases
  if (shoukaku.getPlayer(message.guild.id)) return
  if (!message.member.voice) return
  if (!args[0]) return

  // get audio data
  const node = shoukaku.getNode()
  let data = node.rest.resolve(args[0])
  if (!data) return // no data? bai bai
  if (Array.isArray(data)) data = data[0]

  // join and play
  const player = await node.joinVoiceChannel({
    guildId: message.guild.id,
    voiceChannelID: message.member.voice.channelID
  });

  ['end', 'closed', 'error', 'nodeDisconnect'].forEach(event =>
    player.on(event, player.disconnect.bind(player)))

  await player.playTrack(data.track)
}
module.exports.info = {
  name: 'play'
}
