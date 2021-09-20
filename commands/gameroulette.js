const fs = require('fs');
const configPath = '../games.json';
const rawdata = fs.readFileSync(configPath);
const games = JSON.parse(rawdata);
async function writeConfig(games) {
  fs.writeFile(configPath, JSON.stringify(games));
}
exports.run = (client, message, args) => {
  if (typeof games.random === 'undefined') games.random = {};
  if (parts.length >= 2) {
    if (parts[1] === 'add') {
      let key = parts[2];
      let values = parts.slice(3);
      if (typeof key === 'undefined' || values.length === 0) {
        message.reply('Command Syntax ```!rand add <group> <value>```');
      }
      else {
        let value = values.join(' ');
        if (typeof games.random[key] === 'undefined') games.random[key] = [];

        games.random[key].push(value);
        writeConfig(games);
        message.reply(`I have added '${value}' to randomizer named '${key}'.`);
      }
    }
    else if (parts[1] === 'remove') {
      let key = parts[2];
      let values = parts.slice(3);
      if (typeof key === 'undefined' || values.length === 0) {
        message.reply('Command Syntax ```!rand remove <group> <value>```');
      }
      else {
        let value = values.join(' ');

        if (typeof games.random[key] === 'undefined') {
          message.reply(`Randomizer named '${key}' does not exist. \`\`\`!rand remove <group> <value>\`\`\``);
          return;
        }
        let index = games.random[key].findIndex(x => x === value);
        if (index >= 0) {
          games.random[key].slice(index, ++index);
          writeConfig();
          message.reply(`I have removed '${value}' from randomizer named '${key}'.`);
        }
        else {
          message.reply(`Value '${value}' does not exist in randomizer named '${key}'.`);
        }
      }

    }
    else {
      let key = parts[1];

      if (typeof games.random[key] === 'undefined') {
        message.reply(`Randomizer named '${key}' does not exist. \`\`\`!rand <group>\`\`\``);
        return;
      }

      let array = games.random[key];
      message.reply(`I have selected a random ${key} \`\`\`${array[Math.floor(Math.random() * array.length)]}\`\`\``);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [rand, random, randomgame, gameroulette],
  permLevel: "User"
};

exports.help = {
  name: "rand",
  category: "Miscellaneous",
  description: "Random game picker for the indecisive.",
  usage: "rand"
};
