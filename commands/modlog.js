const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
if(!args[0]) return message.channel.send("Provide a channel to set the modlog to")
let channel = args[0]
let found = client.guild.channels.find(ch => ch.name === channel)
if(!found) {
message.channel.send("Provide a channel name **without** mentioning it.")
} else {
 db.set(`guildModLog_${message.guild.id}`, found.id)
 message.channel.send(`The new modlog for ${message.guild.id} has been set to ${found}`)
}
module.exports.config = {
 "name":"modlog",
  "aliases": ["sett"],
  "description":"Set the guild modlog"
}
