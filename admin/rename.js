let phraseRename = "";
let isMention = 2;
if (!msg.mentions.users.size){
  isMention = 1;
}
for (isMention; isMention < cmd.length; isMention++)
  phraseRename += cmd[isMention] + " ";
if (msg.mentions.users.size == 1 ){
  msg.guild.member(msg.mentions.users.first()).setNickname(phraseRename);
  msg.channel.send("Done.");
} else if (!msg.mentions.users.size) {
  msg.guild.member(msg.author).setNickname(phraseRename);
  msg.channel.send("Done.");
} else {
  msg.channel.send("Syntax Error, use this : `a!rename [@user] <newName>`");
}
