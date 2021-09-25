Discord = require('discord.js');


module.exports = async (client, message, args) => {
  if (message.author.bot) return;
  const attachment = new Discord.MessageAttachment('../images/ayy.jpg', 'ayy.jpg');
  const embed = new Discord.MessageEmbed()
    .setTitle('Ayy lmao')
    .attachFiles(attachment)
    .setImage('attachment://ayy.jpg');
  if (message.content.includes('ayy') || message.content.includes('Ayy')) {
    console.log("well we can see ayy.")
    var lmaos = [
      'ayy lmao! :alien:',
      'remember the ayylmao! :alien: :face_with_cowboy_hat:',
      ('Your new name is ' + "@" + message.author.username + 'ayy Lmao! :alien:'),
      ('Ayy lmao' + message.channel.send({ embed }))
    ];
    var lmao = lmaos[Math.floor(Math.random() * lmaos.length)];
    message.reply(lmao);
  }
};