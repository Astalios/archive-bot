module.exports = {
  name: 'join',
  description: 'Join a voice channel',
  execute(msg,args) {
    // joining a voice channel if the person calling it is inside, otherwise throw error
    if (msg.member.voice.channel){
          msg.member.voice.channel.join();
    } else {
      msg.reply('Merci de rejoindre un channel vocal avant !');
    }
  },
};
