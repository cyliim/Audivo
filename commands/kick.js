const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR" || "MANAGE_SERVER"))
    return message.channel.send("Sorry, you don't have permissions to use this!");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
    return message.channel.send("Please mention a valid member of this server");
  if(!member.kickable) 
    return message.channel.send("I cannot kick this user!");
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  if(member.user.bot) await member.kick(reason)
  .then(message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`))
  await member.send(`You've been kicked from ${message.guild} by ${message.author.tag} for ${reason}`)
  await member.kick(reason)
    .catch(error => message.channel.send(`Sorry ${message.author} I couldn't kick because of : ${error}`));
  message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
}
module.exports.config = {
    name: "kick",
    aliases: ["No Alias"],
    description: "Kicks a member from the guild\nRequires the Kick Members permission"
}
