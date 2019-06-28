const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args, functions) => {
    let prefix = db.fetch(`guildPrefix_${message.guild.id}`)
    let amount = args[0];

    if (args.length <= 0) return message.channel.send("Provide a number of messages to delete")

    try {
        await message.delete()
    let toDelete = await message.channel.fetchMessages({limit: amount});
    message.channel.bulkDelete(toDelete)
  let modlog = db.fetch(`guildModLog_${message.guild.id}`)
  client.channels.find(x => x.id === modlog).send(`${message.author} cleared ${amount} messages in ${message.channel}`)
    return message.channel.send(`Cleared ${amount} messages.`).then(m => m.delete(3000))
    } catch (err) {
        message.channel.send(`I've encountered an error ${err.message}`);
    }
    
}
module.exports.config = {
    name: "purge",
    aliases: ["del"],
    description: "Purges the provided amount of messages"
}
