const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR" || "MANAGE_CHANNELS" || "MANAGE_MESSAGES"))
  let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!toMute) return message.channel.send("Missing argument `<user>`, `<time>` and `<reason>`.");
  let muteReason = args.slice(2).join(" ");
  if(!muteReason) return message.channel.send("Please provide a reason")
  if (toMute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cannot mute that user.");
  let muteRole = message.guild.roles.find(`name`, "Muted");
  if(!muteRole){
    try{
      muteRole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muteRole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let muteTime = args[1];
  if (!muteTime) return message.channel.send("Missing argument `<time>`.");

  await(toMute.addRole(muteRole.id));
  const db = require("quick.db")
  let mod = db.fetch(`guildModLog_${message.guild.id}`)
  client.channels.find(ch => ch.id === modlog).send(`${toMute.user} was muted by ${message.author.tag} for ${ms(ms(muteTime))} with the reason ${muteReason}`)
  message.channel.send(`Muted ${toMute.user} for ${ms(ms(muteTime))}, with reason ${muteReason}.`);

  setTimeout(function(){
    toMute.removeRole(muteRole.id);
  mod.send(`${toMute.user}'s mute for ${ms(ms(muteTime))} has expired`)
    message.channel.send(`${toMute.user}'s mute has expired.`);
  }, ms(muteTime));


}

module.exports.help = {
    name: "tempmute"
}

module.exports.permissionLevel = 1
