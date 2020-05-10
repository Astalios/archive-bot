module.exports = {
  name: 'serverinfo',
  description: 'Affiche les informations relatives au serveur.',
  execute(msg, args) {

    // needing to call discord.js once again
    const Discord = require('discord.js');

    // server Vars for embedding - 12 vars
    let serverName;
    let serverIcon;
    let serverOwner;
    let serverOwnerID;
    let serverCreationDate;
    let serverMembersCount;
    let serverRolesCount;
    let serverID;
    let serverRegion;
    let serverBoosterCount;
    let serverBoostProgression = [];
    let serverBoostTier;

    if (!msg.guild.avalible) {
      const server = msg.guild;

      serverName = server.name;
      serverIcon = server.iconURL({ format: "png", dynamic: true });
      serverOwner = server.owner;
      serverOwnerID = server.ownerID;
      serverCreationDate = server.createdAt.toDateString();
      serverMembersCount = server.memberCount;
      serverID = server.id;
      serverRegion = server.region;
      serverVerificationLevel = server.verificationLevel;
      serverBoosterCount = server.premiumSubscriptionCount;
      serverBoostTier = server.premiumTier;

      serverBoostProgression.push("[");
      for (let i = 1; i < 31; i++)  {

        if ( i == 30){
          serverBoostProgression.push("3️⃣");
        } else if (i == 15) {
          serverBoostProgression.push("2️⃣");
        } else if (i == 2) {
          serverBoostProgression.push("1️⃣");
        } else if ((i == serverBoosterCount) && (i != 0)) {
          serverBoostProgression.push(">");
        } else if ((i < serverBoosterCount) && (i != 0)) {
          serverBoostProgression.push("=");
        } else {
          serverBoostProgression.push("-");
        }
      }
      serverBoostProgression.push("]");
      serverBoostProgression = serverBoostProgression.join('');
    }

    const serverinfoEmbed = new Discord.MessageEmbed()
      .setColor('#31B404')
      .setAuthor('SERVER ID : ' + `${serverID}`, `${serverIcon}`)
      .setTitle( 'SERVER NAME : ' + `${serverName}`)
      .addFields(
        {
          name: 'OWNER',
          value: `${serverOwner} \n ownerID : ${serverOwnerID}`,
          inline: true,
        },
        {
          name: 'MEMBER COUNT',
          value: `${serverMembersCount}`,
          inline: true,
        },
        {
          name: 'SERVER REGION',
          value: `${serverRegion}`,
          inline: true,
        },
      )
    .addFields(
        {
          name: 'SERVER VERIFICATION LEVEL',
          value: `${serverVerificationLevel}`,
          inline: true,
        },
        {
          name: 'SERVER CREATION DATE',
          value: `${serverCreationDate}`,
          inline: true,
        },
      )
      .addFields(
        {
          name: 'SERVER TIER',
          value: `${serverBoostTier}`,
          inline: true,
        },
        {
          name: 'SERVER BOOSTS',
          value: `${serverBoosterCount}`,
          inline: true,
        },
        {
          name: 'SERVER BOOST PROGRESSION',
          value: `${serverBoostProgression}`,
          inline: false,
        },
      )
      .setFooter(`serverinfo - archive-bot - ${msg.author.tag}`)
      .setTimestamp();
    msg.channel.send(serverinfoEmbed);
  },
};
