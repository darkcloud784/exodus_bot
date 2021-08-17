exports.run = (client, message, args) => {
    //const settings = message.settings = client.getSettings(message.guild);
    const recruitMsg = "We are currently in need of shamans of all specializations as well as caster dps and a couple hunters. Specically we would like to have more warlocks and boomkins. If your interested in joining, please message one of our officers!!";
    //const recruit = recruitMsg.replace("{{user}}", message.user.tag);
    message.reply(recruitMsg);
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