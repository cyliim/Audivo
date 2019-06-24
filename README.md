# Audivo

## A moderation bot built for Discord Hack Week
Due to the projects having to be **open-source**, I'm providing a guide on how to clone the bot using Git and hosting it locally.<br>

## Cloning
First, Install [Git](https://git-scm.com) and [NodeJS](https://nodejs.org)<br>
If not already, go to the [Github Repo](https://github.com/cyliim/DiscordHackWeek). Clone the repo by opening your terminal of choice, and use 
```
$ git clone https://github.com/cyliim/DiscordHackWeek
```
Once installed, navigate to the folder where the repo was cloned to, and move on to configuration
## Configuring
Open the `config.json` file found within the folder where the repo was cloned to, and open it in the editor of your choice.<br>
First, edit the `prefix` parameter with the prefix of your choice. <br>**Note: Here and in the bot, '.' is the default prefix**<br>
Secondly, edit the `colour` parameter with the hex color of your choice.<br>**Note: It MUST be a hex colour. Find conversions [here](https://convertingcolors.com)**
## Hosting
If you haven't already, create a [Discord Account](https://discordapp.com/).<br>
Go to [discordapp.com/developers/applications](https://discordapp.com/developers/applications) and create a new application. Name it whatever you want, and add whatever picture you want to it.<br>
**Note: This is not a guide on how to host 24/7**<br>
Create a bot user on the application by using the side bar to navigate to bot. Your bot will take the same name and icon of your app, but you can change both seperately.
<br>Copy the token from the page into the `config.json` file mentioned earlier, under the `token` parameter. After you've done this, navigate to the folder in your terminal.<br>
Use the command 
```
$ node .
```
and your bot should show up online once you've invited it to servers. If you need any support in this, see the bottom of this document.
## Commands
Banning members: **.ban <@user> [reason]**<br>
Kicking members: **.kick <@user> [reason]**<br>
Warning members: **.warn <@user> [reason]**<br>
Muting members: **.mute <@user> &lt;time&gt; [reason]**<br>
Purging messages: **.purge <2 - 100>**<br>
Setting modlog: **.modlog &lt;channel name>**<br>
Locking down channels: **.lockdown &lt;channel name>**<br>
Unlocking locked down channels: **.unlock &lt;locked channel name>**<br>

## Permissions

All commands can be used with the `ADMINISTRATOR` and `MANAGE SERVER` permissions<br>
.ban requires `BAN MEMBERS`<br>
.kick requires `KICK MEMBERS`<br>
.warn requires `MANAGE MESSAGES`<br>
.mute requires `MANAGE MESSAGES`<br>
.purge requires `MANAGE MESSAGES`<br>
.modlog requires `MANAGE CHANNELS`<br>
.lockdown requires `MANAGE CHANNELS`<br>
.unlock requires `MANAGE CHANNELS`<br>

## Support

If you have any problems at all with Audivo, message me on Discord @ cyliim#4669, or send me an email at [cyliimdev@gmail.com](mailto:cyliimdev@gmail.com)
