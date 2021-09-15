//check node version and throw error if we're not on 16+
if (Number(process.version.slice(1).split(".")[0]) < 16) throw new Error("Node 16.x or higher is required. Update Node on your system.");

try {
  require("./config.js");
} catch (e) {
  console.log("Need the config.js dummy.");
}

//const Discord = require('discord.js');
//const partial = ["USER","CHANNEL","GUILD_MEMBER","MESSAGE","REACTION"];
//const intent = ["GUILDS","GUILD_MESSAGES","DIRECT_MESSAGES","GUILD_BANS","GUILD_EMOJIS_AND_STICKERS","GUILD_INTEGRATIONS","GUILD_WEBHOOKS","GUILD_INVITES","GUILD_VOICE_STATES","GUILD_MESSAGE_REACTIONS","GUILD_MESSAGE_TYPING","DIRECT_MESSAGE_REACTIONS","DIRECT_MESSAGE_TYPING","GUILD_PRESENCES","GUILD_MEMBERS"];
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const Enmap = require("enmap");
const config = require("./config.js");
const client = new Client({
  intents: config.intents,
  partials: config.partials
});
client.config = config;
client.owners = [];
require("./modules/functions.js")(client);
//const client = new Discord.Client({partials: partial, intents: intent });
client.commands = new Collection();
client.events = new Collection();
const Discord = new Collection();
client.settings = new Enmap({ name: "settings" });



const init = async () => {


['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
})

client.levelCache = {};
for (let i = 0; i < client.config.permLevels.length; i++) {
  const thisLevel = client.config.permLevels[i];
  client.levelCache[thisLevel.name] = thisLevel.level;
}

client.on("threadCreate", (thread) => thread.join());

// Here we login the client.
client.login(client.config.token);

};

init();