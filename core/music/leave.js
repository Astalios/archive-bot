module.exports = {
  name: 'leave',
  description: 'leave the voice channel',
  execute(msg,args) {

    const Discord = require('discord.js');
    // leaving the voice channel if the person is inside the same channel as the bot is
    // I need to secure the connexion to the voice channel : if it joins a channel that he can't have access, crash the bot
    if (msg.member.voice.channel == client.voice.channel){
          connection.leave();
    } else {
      msg.reply("Merci d'être dans le même channel vocal avant !");
    }
  },
};
