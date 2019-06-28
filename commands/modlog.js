    const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR" || "MANAGE_CHANNELS" || "MANAGE_SERVER"))
if(!args[0]) return message.channel.send("Provide a channel to set the modlog to")
let modlog = message.guild.channels.find(ch=>ch.name == args[0]);
if(modlog) return message.channel.send(`The new modlog is now ${modlog}`)
.then(await db.set(`guildModLog_${message.guild.id}`, modlog.id))
message.channel.send('There was no channel provided in your message. Rather than mentioning the channel, use the name.');
}
module.exports.config = {
name:"modlog",
aliases: ["sett"],
description:"Set the guild modlog"
}
