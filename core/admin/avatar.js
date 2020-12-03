module.exports = {
	name: 'avatar',
	description: 'Displaying someone avatar, you can just call the command without mention to display your avatar.',
	execute(msg, args) {
    let avatarTitle = "";
    let avatarURL = "";
    if(!msg.mentions.users.size){
      avatarTitle = `Here is your avatar:`;
      avatarURL = msg.author.displayAvatarURL({ format: "png", dynamic: true });
    } else {
    	avatarTitle = `${msg.mentions.users.first().username} avatar`;
    	avatarURL = msg.mentions.users.first().displayAvatarURL({ format: "png", dynamic: true, size: 1024 });
    }
    const avatarEmbed = {
      color: 0x0099ff,
      title: avatarTitle,
      image: {
        url: avatarURL,
      },
      timestamp: new Date(),
    };
    msg.channel.send({ embed: avatarEmbed });
	},
};
