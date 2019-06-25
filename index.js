const Discord = require("discord.js")
const client = new Discord.Client()
const fs = require("fs")
const config = require("./config.json")

client.commands = new Discord.Collection;
client.aliases = new Discord.Collection;
fs.readdir("./commands/", (err, files) =>{
if(err) console.error(err)
let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0) {
   return console.error("Commands not found. Check command file.");
}
jsfile.forEach((f, i) =>{
    let pull = require(`./commands/${f}`);
    client.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias =>{
        client.aliases.set(alias, pull.config.name);
    })})});

client.on("ready", () => {
    console.log(`${client.user.tag} is running!`)
}) 

    client.on("message", message => {
    if(message.author.bot || message.channel.type === "dm" || !message.content.startsWith(config.prefix)) return 
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(config.prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(config.prefix.length)))
    if(commandfile) commandfile.run(client, message, args)
    })

    client.login(config.token)
