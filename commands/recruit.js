module.exports ={
    name: 'Recruit',
    description: "What the guild is currently recruiting.",
    execute(client, message, args){
    const recruitMsg = "We are currently in need of shamans of all specializations as well as caster dps, Priest Healers, and a couple hunters. If your interested in joining, please message one of our officers and they should get back to you when they are online.";
    message.reply(recruitMsg);
    }
}