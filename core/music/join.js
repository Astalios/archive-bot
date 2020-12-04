module.exports = {
  name: 'join',
  description: 'Join a voice channel',
  execute(msg,args) {
    // joining a voice channel if the person calling it is inside, otherwise throw error
    // I need to secure the connexion to the voice channel : if it joins a channel that he can't have access, crash the bot
    if (msg.member.voice.channel){
          const connection = msg.member.voice.channel.join();
    } else {
      msg.reply('Merci de rejoindre un channel vocal avant !');
    }
  },
};
