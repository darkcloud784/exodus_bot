exports.run = (message, member) => {
    if (message.author.bot) return;
    //const settings = message.settings = client.getSettings(message.guild);
    const recruitMsg = "Hello {{user}}, I see your interested in what we are currently recruiting! We are in need of shamans of all specializations as well as caster dps and a couple hunters. Specically we would like to have more warlocks and boomkins. If your interested in joining, please message one of our officers!!";
    const recruit = recruitMsg.replace("{{user}}", member.user.tag);
    message.channel.send(recruit);
};