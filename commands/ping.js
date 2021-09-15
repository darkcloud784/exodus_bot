module.exports = {
    name: 'ping',
    description: "Ping command",
    execute(client, message, args){
        message.channel.send('Pong!');

    }
}