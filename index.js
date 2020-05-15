const Discord = require("discord.js");
const client = new Discord.Client();

const TOKEN = "";
const MESSAGE_ID = "";
const ROLE_ID = "";
const EMOJI_ID = "";
const CHANNEL_ID = "";
const GUILD_ID = "";
let GUILD;

client.on("ready", () => {
    GUILD = client.guilds.cache.get(GUILD_ID);
    let msg = GUILD.channels.cache.get(CHANNEL_ID).messages.fetch(MESSAGE_ID); 
    console.log("Verifier online");
})

client.on("messageReactionAdd", (reaction, user) => {
    if(reaction.emoji.id == EMOJI_ID && reaction.message.id == MESSAGE_ID){
        let member = GUILD.members.cache.get(user.id);
        member.roles.add(ROLE_ID);
    }
})

client.on("messageReactionRemove", (reaction, user) => {
    if(reaction.emoji.id == EMOJI_ID && reaction.message.id == MESSAGE_ID){
        let member = GUILD.members.cache.get(user.id);
        member.roles.remove(ROLE_ID);
    }
})

client.login(TOKEN);