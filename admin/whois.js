module.exports = {
  name: "whois",
  description: "This little thing show a message about who is the mentionned person",
  execute(msg, args){

    if (msg.mentions.users.size == 1){
      msg.channel.send(`His username: ${msg.mentions.users.first().username}\nHis ID: ${msg.mentions.users.first().id}`);
    } else if (!msg.mentions.users.size) {
      msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
    } else {
      msg.channel.send("Syntax Error, use this : `a!about <@user]>`");
    }
  },
};
