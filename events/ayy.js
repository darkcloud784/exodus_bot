Discord = require('discord.js');


module.exports = (client, message) => {
  if (message.author.bot) return;
  const embed = new Discord.MessageEmbed()
    .setTitle('ayy')
    .attachFiles('../images/ayy.jpg')
    .setImage('attachment://ayy.jpg');
  if (message.content.includes('ayy') || message.content.includes('Ayy')) {
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