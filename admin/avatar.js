if(!msg.mentions.users.size){
    msg.channel.send(`Here is your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
} else {
  msg.channel.send(`${msg.mentions.users.first().username} avatar: <${msg.mentions.users.first().displayAvatarURL({ format: "png", dynamic: true })}>`);
}
