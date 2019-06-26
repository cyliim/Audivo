const Discord = require("discord.js")
const config = require("../config.json")
module.exports.run = async (client, message, args) => {
if(!args[0]) {
    let help = new Discord.RichEmbed()
    .setTitle("Audivo Help Menu")
    .setDescription(`Use ${config.prefix}help [command] for more info on that command\n\n${config.prefix}kick\n${config.prefix}ban${config.prefix}modlog${config.prefix}help`)

}
if(args[0]) {
    let command = args[0];
    if (client.commands.has(command)) {
        command = client.commands.get(command);
        var helpbed = new Discord.RichEmbed()
        .setColor("FFFFFF")
        .setDescription(`\n\n**Command: ** ${command.config.name}\n**Description: ** ${command.config.description || "No Description"}\n**Aliases: ** ${command.config.noalias || command.config.aliases}`)
    message.channel.send(helpbed)
}}}
module.exports.config = {
    name: "help",
    aliases: ["cmds"],
    description: "Displays the full list of commands"
}
