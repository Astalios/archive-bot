module.exports = {
  name: "whois",
  description: "This little thing show a message about who is the mentionned person",
  execute(msg, args){
    msg.channel.send("test embed template \n");
    const exampleEmbed = {
  	color: 'RANDOM',
  	title: 'source bot',
  	url: 'https://github.com/astalios/archive-bot',
  	author: {
  		name: 'astalios',
  		icon_url: 'https://imgur.com/E5Jsbrz',
  		url: 'https://github.com/astalios/',
  	},
  	description: 'La Description',
  	thumbnail: {
  		url: 'https://imgur.com/qiInt18',
  	},
  	fields: [
  		{
  			name: 'field 1',
  			value: 'lorem ipsum',
  		},
  		{
  			name: '\u200b',
  			value: '\u200b',
  			inline: false,
  		},
      {
  			name: 'field 2',
  			value: 'lorem ipsum ooc',
  		},
  		{
  			name: '\u200b',
  			value: '\u200b',
  			inline: false,
  		},
  		{
  			name: 'Inline field 1',
  			value: 'valeur 1',
  			inline: true,
  		},
  		{
  			name: 'Inline field 2',
  			value: 'valeur 2',
  			inline: true,
  		},
  		{
  			name: 'Inline field 3',
  			value: 'valeur 3',
  			inline: true,
  		},
  	],
  	image: {
  		url: `${msg.author.displayAvatarURL({ format: "png", dynamic: true })}`,
  	},
  	footer: {
  		text: 'texte footer',
  		icon_url: 'https://i.imgur.com/wSTFkRM.png',
      timestamp: new Date(),
  	},
  };
  msg.channel.send({ embed: exampleEmbed });

    if (msg.mentions.users.size == 1){
      msg.channel.send(`\nHis username: ${msg.mentions.users.first().username}\nHis ID: ${msg.mentions.users.first().id}`);
    } else if (!msg.mentions.users.size) {
      msg.channel.send(`\nYour username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
    } else {
      msg.channel.send("Syntax Error, use this : `a!about <@user]>`");
    }
  },
};
