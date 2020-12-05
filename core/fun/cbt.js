module.exports = {
    name: 'cbt',
    description: '"kinky command" to provoke someone by torturing his genitals',
    execute(msg, args) {
        const msgCBT = "cock and ball torture for you ";
        if(msg.mentions.users.size != 1){
            msg.channel.send("Syntax Error, use this : `a!cbt [@user]`");
        } else {
            msg.channel.send(msgCBT + '<@'+msg.mentions.users.first()+'>' );
        }
    },
};