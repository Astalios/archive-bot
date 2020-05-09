module.exports = {
  name: 'serverinfo',
  description: 'Affiche les informations relative au serveur.',
  execute(msg,args) {

    let serverName;
    let serverIcon;
    let serverOwner;
    let serverMembersCount;
    let serverRolesCount;
    let serverID;
    let serverCreationDate;
    let serverCategories;
    let serverVoiceChannels;
    let serverWrittenChannels;
    let serverRegion;
    let serverVerificationLevel;
    let serverShard;

    const serverinfoEmbed = {
      color: 'RANDOM',
      author: {
        name: 'SERVER NAME : ' + `${serverName}`,
        icon_url: `${serverIcon}`,
      },




    };
    msg.channel.send({ embed: serverinfoEmbed });
  },
};
