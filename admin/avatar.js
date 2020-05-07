module.exports = {
	name: 'avatar',
	description: 'Displaying someone avatar, you can just call the command without mention to display your avatar.',
	execute(msg, args) {
    if(!msg.mentions.users.size){
      const avatarEmbed = {
      	color: 0x0099ff,
      	title: `Here is your avatar:`,
      	image: {
      		url: `${msg.mentions.users.first().displayAvatarURL({ format: "png", dynamic: true })}`,
      	},
      	timestamp: new Date(),
      };
     } else {
      const avatarEmbed = {
      	color: 0x0099ff,
      	title: `${msg.mentions.users.first().username} avatar:`,
      	image: {
      		url: `${msg.mentions.users.first().displayAvatarURL({ format: "png", dynamic: true })}`,
      	},
      	timestamp: new Date(),
      };
    }
    channel.send({ embed: avatarEmbed });
	},
};
