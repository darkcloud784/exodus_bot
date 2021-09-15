module.exports = {
    name: 'mylevel',
    description: "Provides permission information about yourself.",
    execute(client, message, args, level) {
        const friendly = client.config.permLevels.find(l => l.level === level).name;
        const replying = client.settings.ensure(message.guild.id, client.config.defaultSettings).commandReply;
        message.reply({ content: `Your permission level is: ${level} - ${friendly}`, allowedMentions: { repliedUser: (replying === "true") } });
    }
}