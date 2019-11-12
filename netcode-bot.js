const Discord = require("discord.js");
const token = process.env.TOKEN;

const client = new Discord.Client();

client.on('ready',()=>{
	console.log('Bot is now connected',token);
	// client.channels.find(x=>x.name === 'test').send('hello im now connected')
})
client.login(token);