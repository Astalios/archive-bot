module.exports = {
  name: "whois",
  description: "This little thing show a message about who is the mentionned person",
  execute(msg, args){

    // user related data
    let whoamiUserNickname;
    let whoamiUserMention;
    let whoamiUserTag;
    let whoamiUserID;
    let whoamiUserAvatar;
    let whoamiUserCreationDate;
    let whoamiUserJoinedDate;
    // user related roles
    let rolesColor;
    let rolesList;
    let rolesCount;

    // dynamic whoami

    if (msg.mentions.users.size == 1){
      whoamiUserMention = msg.mentions.users.first();
    } else if (!msg.mentions.users.size) {
      whoamiUserMention = msg.author;
    } else {
      msg.channel.send("Syntax Error, use this : `a!about <@user]>`");
    }

    rolesList = msg.guild.member(whoamiUserMention).roles.cache.array();
    rolesList = rolesList.slice(0, rolesList.length-1);
    rolesCount = rolesList.length;
    rolesList = rolesList.join(' ');
    rolesColor = msg.guild.member(whoamiUserMention).displayHexColor;
    whoamiUserJoinedDate = msg.guild.member(whoamiUserMention).joinedAt.toDateString();
    whoamiUserName = whoamiUserMention.username;
    whoamiUserCreationDate = whoamiUserMention.createdAt.toDateString();
    whoamiUserAvatar = whoamiUserMention.displayAvatarURL({ format: "png", dynamic: true });
    whoamiUserTag = whoamiUserMention.tag;
    whoamiUserID = whoamiUserMention.id;

    const whoisEmbed = {
  	color: `${rolesColor}`,
  	author: {
  		name: "USER : " + `${whoamiUserName}`,
  		icon_url: `${whoamiUserAvatar}`,
  	},
    description: `${whoamiUserMention}`,
  	thumbnail: {
  		url: `${whoamiUserAvatar}`,
  	},
  	fields: [
  		{
  			name: 'ROLE LIST - ' + `${rolesCount}`,
        value: `${rolesList}`,
        inline: false,
  		},
      {
        name: 'USER ID',
        value: `${whoamiUserID}`,
        inline: false,
      },
      {
        name: 'Created',
        value: `${whoamiUserCreationDate}`,
        inline: true,
      },
      {
        name: 'Joined',
        value: `${whoamiUserJoinedDate}`,
        inline: true,
      },
  	],
  	footer: {
      text: 'whois - archive-bot - ' + `${whoamiUserTag}`,
  		url: 'https://github.com/astalios/archive-bot',
  	},
    timestamp: new Date(),
  };
  msg.channel.send({ embed: whoisEmbed });
  },
};
