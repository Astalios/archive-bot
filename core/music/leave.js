module.exports = {
  name: 'leave',
  description: 'leave the voice channel',
  execute(msg,args) {
    // leaving the voice channel if the person is inside the same channel as the bot is
    // I need to secure the connexion to the voice channel : if it joins a channel that he can't have access, crash the bot
    const connections = msg.client.voice.connections
        .filter((c) => (c.channel.guild === msg.channel.guild )
            && (c.channel.id === msg.member.voice.channel.id) );
    for ( const connection of connections ){
      connection[1].disconnect();
    }
  },
};
