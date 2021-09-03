module.exports = (messageReactionAdd, (reaction, user) => {

    if (reaction.message.channel.id === '865566305842757632') {
        if (reaction.emoji.name == "Exods") {
            const guildMember = reaction.message.guild.members.get(user.id);
            const memberRole = reaction.message.roles.get('862521361212637224');
            guildMember.addrole(memberRole);
        }
    }
    else if (reaction.message.channel.id === '865566305842757632') {
        if (reaction.emoji.name == "bust_in_silhouette") {
            const guildMember = reaction.message.guild.members.get(user.id);
            const guestRole = reaction.message.roles.get('865656133859540992');
            guildMember.addrole(guestRole);
        }
    }
});