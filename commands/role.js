module.exports = {
    name: 'reactionrole',
    description: 'reaction role message.',
    async execute(message, args, Discord, client) {
        const channel = '865566305842757632';
        const memberRole = message.guild.roles.cache.find(role => role.name == "Members");
        const guestMember = message.guild.role.cache.find(role => role.name == "Guest");

        const memberEmoji = ':Exods:';
        const guestEmoji = ':bust_in_silhouette:';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Are you an Exodús guild member or a Guest of the guild?')
        .setDescription('Please select one of the emojis to retrieve your discord role!\n\n'
        + `${memberEmoji} if your an Exodús member\n`
        + `${guestEmoji} if your a Guest`);

        let messageEmbed = await message.channel.send(embed);
    }

}