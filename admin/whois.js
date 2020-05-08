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
    let rolesCount = 0;

    // dynamic whoami

    if (msg.mentions.users.size == 1){
      whoamiUserMention = msg.mentions.users.first();
    } else if (!msg.mentions.users.size) {
      whoamiUserMention = msg.author;
    } else {
      msg.channel.send("Syntax Error, use this : `a!about <@user]>`");
    }

//    whoamiUserJoinedDate = msg.guild.member(whoamiUserMention).joinedTimestamp;
    whoamiUserNickname = `${whoamiUserMention.nickname}`;
    whoamiUserCreationDate = `${whoamiUserMention.createdAt}`;
    whoamiUserAvatar = `${whoamiUserMention.displayAvatarURL({ format: "png", dynamic: true })}`;
    whoamiUserTag = `${whoamiUserMention.tag}`;
    whoamiUserID = `${whoamiUserMention.id}`;

    const exampleEmbed = {
  	color: 'RANDOM',
  	title: `<@${whoamiUserMention}>`,
  	author: {
  		name: "USER : " + whoamiUserNickname,
  		icon_url: whoamiUserAvatar,
  	},
  	thumbnail: {
  		url: whoamiUserAvatar,
  	},
  	fields: [
  		/*{
  			name: 'f',
        value: "ouais ouais le lorem",
  		},
  		{
  			name: ' field 1.1 bien voyons monsieur l_arbitre',
  			value: "oui c'est quoi ça ",
        inline: true,
  		},
      {
  			name: 'field 2',
  			value: 'lorem ipsum ooc',
        inline: true,
  		},*/
  	/*	{
  			name: 'ROLE LIST - ' + rolesCount,
        value: rolesList,
        inline: false,
  		},*/
  		{
  			name: 'Created',
  			value: whoamiUserCreationDate,
  			inline: true,
  		},
  		{
  			name: 'Joined',
  //			value: whoamiUserJoinedDate,
  			inline: true,
  		},
  		{
  			name: 'USER ID',
  			value: whoamiUserID,
  			inline: true,
  		},
  	],
  	footer: {
      text: 'whoami - archive-bot' + whoamiUserTag,
  		url: 'https://github.com/astalios/archive-bot',
      timestamp: new Date(),
  	},
    timestamp: new Date(),
  };
  msg.channel.send({ embed: exampleEmbed });
  },
};
