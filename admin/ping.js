module.exports = {
	name: 'ping',
	description: 'Send ping and answers in ms',
  execute(msg, args){
  msg.channel.send("Pong! `" + (Date.now() - msg.createdTimestamp) + " ms`");
  },
};
