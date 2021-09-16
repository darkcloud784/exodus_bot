Discord = require('discord.js');

exports.run = async (client, message, args) => {
    //async execute(message, args, Discord, client) {
        const channel = '865566305842757632';

        const memberRole = message.guild.roles.cache.find(role => role.name == "Members");
        const guestMember = message.guild.roles.cache.find(role => role.name == "Guest");
        console.log("got " + memberRole + " for memberRole");
        console.log("got " + guestMember + " for guestRole");
        const memberEmoji = client.emojis.cache.get('875054307978928239');
        const guestEmoji = '👤';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Are you an Exodús guild member or a Guest of the guild?')
        .setDescription('Please select one of the emojis to retrieve your discord role!\n\n'
        + `${memberEmoji} if your an Exodús member\n` + `${guestEmoji} if your a Guest`);

        let messageEmbed = await message.channel.send({embeds: [embed]})
        messageEmbed.react(memberEmoji);
        messageEmbed.react(guestEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if (reaction.emoji.name === memberEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(memberRole);
                }
                if (reaction.emoji.name == guestEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(guestMember);
                }
            } else {
                return;
            }

        });
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === memberEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(memberRole);
                }
                if (reaction.emoji.name == guestEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(guestMember);
                }
            } else {
                return;
            }

        });

    }

    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["reactionrole", "reaction", "reactionroles"],
        permLevel: "User"
      };
      exports.help = {
        name: "reactionrole",
        category: "Guild",
        description: "reaction role message.",
        usage: "?reactionrole"
};

