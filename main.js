// Required modules
const fs = require('fs');
const Discord = require('discord.js');

// setting up the client
const client = new Discord.Client();
//client.adminCommands = new Discord.Collection();
//client.funCommands = new Discord.Collection();
client.commands = new Discord.Collection();

//setting up the admin, fun and conf commands
const adminFiles = fs.readdirSync('./core/admin').filter(file => file.endsWith('.js'));
const funFiles = fs.readdirSync('./core/fun').filter(file => file.endsWith('.js'));
const musicFiles = fs.readdirSync('./core/music').filter(file => file.endsWith('.js'));
const config = JSON.parse(fs.readFileSync('misc/config.json'));

//preparing the admin commands
for (const file of adminFiles) {
	const admCmd = require(`./core/admin/${file}`);
	//client.adminCommands.set(admCmd.name, admCmd);
	client.commands.set(admCmd.name, admCmd);
}


//preparing the music commands
for(const file of musicFiles){
	const musicCmd = require(`./core/music/${file}`);
	client.commands.set(musicCmd.name, musicCmd);
}


//preparing the fun commands
for(const file of funFiles) {
	const funCmd = require(`./core/fun/${file}`);
	//client.funCommands.set(funCmd.name, funCmd);
	client.commands.set(funCmd.name, funCmd);
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
// TODO: Faire une vérification de si ces channels existent déjà. Si oui alors ne pas les créer et faire en sorte que le bot écrive dedans chaque action,
// TODO: plus tard, penser a faire en sorte de configurer le bot en fonction des envies des admins, donc ça nécessite de gérer les permissions, ce qui devrait arriver assez tôt
client.on('guildCreate', guild => {
  guild.channels.create("archive-bot-logs", {type: "category"}).then( cat => {
    guild.channels.create("logs-kick-ban", {parent: cat, topic: "banList, by who, reason, also logs kicks",
      reason: "needed a new channel",position: 1});
    guild.channels.create("logs-warn", {parent: cat, topic: "warnList, by who, reason",
      reason: "needed a new channel", position: 2});
    guild.channels.create("logs-new-user", {parent: cat, topic: "Tracks users entry",
    	reason: "needed a new channel", position: 3});
    guild.channels.create("logs-deleted-messages", {parent: cat, topic: "Tracks deleted messages",
	   	reason: "needed a new channel", position: 4});
		//guild.channels.create("channelName", {parent: cat, topic: "setTopic Here",
    //reason: "needed a new channel"});
  })
});

client.on('message', msg => {
  if (msg.guild && msg.content.startsWith(config.prefix)) {

    const args = msg.content.substr(config.prefix.length,msg.content.length).split(/ +/);
    const cmdName = args.shift().toLowerCase();

	// replacing the actual switch case method to add a dynamic command management
	if (!client.commands.has(cmdName)) return;
	const cmd = client.commands.get(cmdName);

	try {
		client.commands.get(cmd.execute(msg, args));
	} catch (error){
		console.error(error);
		msg.reply("Il y'a eu une difficulté à executer la commande, erreur : " + error);
	}
  }
});

client.login(config.token);
