// Required modules
const fs = require('fs');
const Discord = require('discord.js');

// setting up the client
const client = new Discord.Client();
client.adminCommands = new Discord.Collection();

//setting up the commands
const adminFiles = fs.readdirSync('./admin').filter(file => file.endsWith('.js'));
const config = JSON.parse(fs.readFileSync('misc/config.json'));

//preparing the admin commands
for (const file of adminFiles) {
	const admCmd = require(`./admin/${file}`);
	client.adminCommands.set(admCmd.name, admCmd);
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
    //ping
    switch (cmd) {
      case "ping":
        client.adminCommands.get('ping').execute(msg, args);
        break;
      //kick ban
      case "kick":
      case "ban":
      msg.channel.send("This command is actually been reworked in a future update.");
        break;
      //rename
      case "rename":
        let phraseRename = "";
        let isMention = 2;
        if (!msg.mentions.users.size){
          isMention = 1;
        }
        for (isMention; isMention < cmd.length; isMention++)
          phraseRename += msg[isMention] + " ";
        if (msg.mentions.users.size == 1 ){
          msg.guild.member(msg.mentions.users.first()).setNickname(phraseRename);
          msg.channel.send("Done.");
        } else if (!msg.mentions.users.size) {
          msg.guild.member(msg.author).setNickname(phraseRename);
          msg.channel.send("Done.");
        } else {
          msg.channel.send("Syntax Error, use this : `a!rename [@user] <newName>`");
        }
      //  client.adminCommands.get('rename').execute(msg, args);
        break;
      //ty kouine for this command
      case "cbt":
        const msgCBT = "cock and ball torture for you ";
        if(msg.mentions.users.size != 1){
          msg.channel.send("Syntax Error, use this : `a!cbt [@user]`");
        } else {
          msg.channel.send(msgCBT + '<@'+msg.mentions.users.first()+'>' );
        }
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
