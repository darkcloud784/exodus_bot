module.exports = (client, message, member) => {

    const settings = client.getSettings(member.guild);
    const newUserMessage = settings.newUserMessage.replace("{{user}}", member.newUserMessage.tag);

    member.send(newUserMessage).catch(console.error);

    if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y' || message.content.toUpperCase() == 'YEP') {
        message.channel.send(`Thanks! I have put you in the members role. You should now be able to see the appropriate channels!`)
        var membersRole = member.guild.roles.find(role => role.name === "Members");
        message.member.addRole(membersRole);


    } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N' || message.content.toUpperCase() == 'NOPE') {
        message.channel.send(`Thanks! I have put you in the Guests role. You should now be able to see the appropriate channels!`)
        var membersRole = member.guild.roles.find(role => role.name === "Guests");
        message.member.addRole(guestRole);
    }

};