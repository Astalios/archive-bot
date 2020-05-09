// Required modules
const fs = require('fs');
const Discord = require('discord.js');

// setting up the client
const client = new Discord.Client();
client.adminCommands = new Discord.Collection();
client.funCommands = new Discord.Collection();

//setting up the admin commands
const adminFiles = fs.readdirSync('./core/admin').filter(file => file.endsWith('.js'));
const funFiles = fs.readdirSync('./core/fun').filter(file => file.endsWith('.js'));
const config = JSON.parse(fs.readFileSync('misc/config.json'));

//preparing the admin commands
for (const file of adminFiles) {
	const admCmd = require(`./core/admin/${file}`);
	client.adminCommands.set(admCmd.name, admCmd);
}

//preparing the fun commands
for(const file of funFiles) {
	const funCmd = require(`./core/fun/${file}`);
	client.funCommands.set(funCmd.name, funCmd);
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildCreate', guild => {
  guild.channels.create("archive-bot-category", {type: "category"}).then( cat => {
    guild.channels.create("logs-ban", {parent: cat, topic: "banList, by who, reason",
      reason: "needed a new channel",position: 1});
    guild.channels.create("logs-warn", {parent: cat, topic: "warnList, by who, reason",
      reason: "needed a new channel", position: 2});
    //guild.channels.create("logs-warn", {parent: cat, topic: "warnList, by who, reason",
    //reason: "needed a new channel"});
  })
});

client.on('message', msg => {
  if (msg.content.startsWith(config.prefix)) {

    const args = msg.content.substr(config.prefix.length,msg.content.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

		switch (cmd) {
			// ping
      case "ping":
        client.adminCommands.get('ping').execute(msg, args);
        break;
      // kick ban
      case "kick":
      case "ban":
        msg.channel.send("This command is actually been reworked in a future update.");
        break;
      // rename
      case "rename":
      	client.adminCommands.get('rename').execute(msg, args);
        break;
			// serverinfo
			case "serverinfo":
			client.adminCommands.get('serverinfo').execute(msg, args);
				break;
      // ty kouine for this command
      case "cbt":
				client.funCommands.get('cbt').execute(msg, args);
        break;
      // ABOUT ME, ABOUT YOU
      case "whois":
        client.adminCommands.get('whois').execute(msg, args);
        break;
      // avatar
      case "avatar":
        client.adminCommands.get('avatar').execute(msg, args);
        break;
      default:
        msg.channel.send("Syntax Error, use is : `a!<command> [args] [...]`");
    }
}
});

client.login(config.token);
