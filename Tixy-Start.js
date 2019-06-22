const commando = require('discord.js-commando');
const config = require('./config/config.json');
const client = new commando.Client({
	commandPrefix: '!',
	owner: '169868696427167744'
});

client.once('ready', () => {
	console.log('I am Alive!')
});

client.on('guildCreate', guild => {
	// This event triggers when the bot joins a guild.
	console.log(`New guild joined: ${ guild.name } (id: ${ guild.id }). This guild has ${ guild.memberCount } members!`);
});
client.on('guildDelete', guild => {
	// this event triggers when the bot is removed from a guild.
	console.log(`I have been removed from: ${ guild.name } (id: ${ guild.id })`);
});
client.login(config.token);