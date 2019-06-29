const db = require("quick.db")
const Discord = require("discord.js")
module.exports.run = async(client, message, args) => {
if(!args[0]) return message.channel.send("Mention a user to warn")
let member = client.guild.members.find(message.mentions.members.first())
if(!member) return message.channel.send("Mention a valid user of the guild")
if(!args[1]) return message.channel.send("Provide a reason")
let warns = db.fetch(`memberWarns_${message.author.id}_${message.guild.id}`)
db.add(`memberWarns_${message.author.id}_${message.guild.id}`, 1)
message.channel.send(`${member.tag} was warned by ${message.author.tag} for ${args.join(" ").split(message.mentions.members.first())}. This user now has ${warns} warns`)
}
module.exports.config = {
name: "warn",
aliases: ["No Alias"],
description: "Warn a user"
}
