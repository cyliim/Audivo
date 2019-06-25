const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR" || "MANAGE_SERVER"))
    return message.channel.send("Sorry, you don't have permissions to use this!");
  
  let member = message.mentions.members.first();
  if(!member)
    return message.channel.send("Please mention a valid member of this server");
  if(!member.bannable) 
    return message.channel.send("I cannot ban this user!");

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  if(member.user.bot) await member.ban(reason)
  .then(message.channel.send(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`))
  await member.send(`You've been banned from ${message.guild} by ${message.author.tag} for ${reason}`)
  await member.ban(reason)
    .catch(error => message.channel.send(`Sorry ${message.author}, I couldn't ban ${member} because of ${error}`));
  message.channel.send(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
}
module.exports.config = {
    name: "ban",
    aliases: ["No Alias"],
    description: "Bans a member from the guild\nRequires the Ban Members permission"
}
