module.exports = {
  name: 'rename',
	description: 'Rename either you, or someone.',
	execute(msg, args) {
    let phraseRename = "";
    let isMention = 1;
    if (!msg.mentions.users.size){
      isMention = 0;
    }
    for (isMention; isMention < args.length; isMention++) // args = mention val1 val2 val3 ... valN
      phraseRename += args[isMention] + " ";
    if (msg.mentions.users.size == 1 ){
      msg.guild.member(msg.mentions.users.first()).setNickname(phraseRename);
      msg.channel.send("Done.");
    } else if (!msg.mentions.users.size) {
      msg.guild.member(msg.author).setNickname(phraseRename);
      msg.channel.send("Done.");
    } else {
      msg.channel.send("Syntax Error, use this : `a!rename [@user] <newName>`");
    }
  },
};
