const Discord = require("discord.js");
const token = process.env.TOKEN;

const client = new Discord.Client();

console.log("HEllo")
client.on('ready',()=>{
	console.log('Bot is now connected');
	// client.channels.find(x=>x.name === 'test').send('hello im now connected')
})
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the NetCode server😁, ${member}`);
});
client.on('message', (msg)=>{
	console.log(msg)
});
client.login(token);