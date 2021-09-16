exports.run = (client, message, args) => {
    
    const settings = message.settings;
    const recruitMsg = settings.get("recruitMessage");
    //const recruit = recruitMsg.replace("{{user}}", message.user.tag);
    message.channel.send(recruitMsg).catch(console.error);
};
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["recruiting", "apply"],
        permLevel: "User"
      };
      exports.help = {
        name: "recruit",
        category: "Guild",
        description: "Find out what we are currently looking for!",
        usage: "?recruit"
};