module.exports = {
  name: 'testembed',
  description: 'description',
  execute(msg,args) {

    let nitrobar = "[=1️⃣============2️⃣==>\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A03️⃣]" ;
    const testembed = {
      fields:
    		{
    			name: 'NITRO TIER - BOOSTERS ' + `LOREM IPSUM`,
          value: `${nitrobar}`,
          inline: false,
    		},
    };
    msg.channel.send({ embed: testembed });
  },
};
