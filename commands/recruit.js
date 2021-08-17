exports.run = (client, message, args) => {
    //const settings = message.settings = client.getSettings(message.guild);
    const recruitMsg = "We are currently in need of shamans of all specializations as well as caster dps and a couple hunters. If your interested in joining, please message one of our officers and they should get back to you when they are online.";
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