module.exports = {
  name: 'serverinfo',
  description: 'Affiche les informations relatives au serveur.',
  execute(msg,args) {

    // server Vars for embedding - 15 vars
    let serverName;
    let serverIcon;
    let serverOwner;
    let serverOwnerID;
    let serverCreationDate;
    let serverMembersCount;
    let serverRolesCount;
    let serverID;
    let serverCategories;
    let serverVoiceChannels;
    let serverWrittenChannels;
    let serverRegion;
    let serverVerificationLevel;
    let serverShard;
    let serverBoosterCount;
    let serverBoostProgression;
    let serverBoostTier;

    if (msg.guild.avalible) {
      const server = msg.guild;

      serverName = server.name;
      serverIcon = server.iconURL({ format: "png", dynamic: true, size: 256 });
      console.log(serverIcon);
      serverOwner = server.owner;
      serverOwnerID = server.ownerID;
      serverCreationDate = server.createdAt.toDateString();
      serverMembersCount = server.memberCount;
      serverID = server.id;
      serverRegion = server.region;
      serverShard = server.shard;
      serverVerificationLevel = server.verificationLevel;
      serverWrittenChannels = server.channels.cache.array().length;
      serverBoosterCount = server.premiumSubscriptionCount;
      serverBoostTier = server.premiumTier;

    }

    const serverinfoEmbed = {
      color: 'RANDOM',
      author: {
        name: 'SERVER NAME : ' + `${serverName}`,
        icon_url: `${serverIcon}`,
      },
      fields: [
        {
          name: 'OWNER',
          value: `${serverOwner} - ID ${serverOwnerID}`,
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
          inline: false,
        },
        {
          name: 'SERVER SHARD',
          value: `${serverShard}`,
          inline: true,
        },
        {
          name: 'SERVER VERIFICATION LEVEL',
          value: `${serverVerificationLevel}`,
          inline: true,
        },
        {
          name: 'SERVER TIER',
          value: `${serverBoostTier}`,
          inline: false,
        },
        {
          name: 'SERVER BOOSTERS',
          value: `${serverBoosterCount}`,
          inline: true,
        },
        {
          name: 'SERVER BOOST PROGRESSION',
          value: `placeHolder`,
          inline: false,
        },
      ],
      footer: {
          value: `whois - archive-bot - ${msg.author.tag}`,
          url: 'https://github.com/astalios/archive-bot',
      },
      timestamp: new Date(),
    };
    msg.channel.send({ embed: serverinfoEmbed });
  },
};
