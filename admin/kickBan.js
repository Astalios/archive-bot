cmd.forEach((element, i, array) => {
  if (element.startsWith('-')) {
      const action = element.split('')[1];
      switch (action) {
          case 'r':
              let str = '';
              let j = i + 1;
              while ((array.length >  j ) && !array[j].startsWith('-')) {
                  str += array[j] + " ";
                  j++;
              }
              msg.mentions.users.forEach(usr => {
                if (cmd[0] == "ban"){
                  msg.guild.member(usr).ban({ reason: str });
                  msg.channel.send("Done.");
                } else {
                  msg.guild.member(usr).kick({ reason: str });
                  msg.channel.send("Done.");
                }
              });
              break;
          default:
              msg.reply("error.");
              break;
        }
  }
});
