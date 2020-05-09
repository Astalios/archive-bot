module.exports = {
  name: 'testembed',
  description: 'description',
  execute(msg,args) {

    let nitrobar = "[=1️⃣============2️⃣==>-----------3️⃣]" ;
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
