const fetch = require('node-fetch');
exports.run = (client, message, args) => { 
    function checkStatus(res) {
        if (res.ok) {
          message.reply("Server is up!")
          return res;
        } else {
          message.reply("Server is not responding or there was an error!")
          throw serverDown(res.statusText);
        }
      }
        fetch('https://valheim.nautiluslab.host/status.json')
        .then(checkStatus)
        .then(res => console.log('stuffbrokeyo'))
        fetch('https://valheim.nautiluslab.host/status.json')
        .then(res => res.json())
        .then(json => message.reply(json.player_count + " people are on the server currently."))
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [valheim, valheimstatus],
    permLevel: "User"
  };
  
  exports.help = {
    name: "valheim",
    category: "Miscellaneous",
    description: "Gives info on the valhiem serrver",
    usage: "valheim"
  };
  