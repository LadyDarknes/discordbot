const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require('./işaret.json');
const hedefimiz = require('./hedef.json');
const { Client, MessageEmbed } = require('discord.js')


var prefix = işaret.prefix
var hedef = hedefimiz.hedef

client.on('ready', () => {
	console.log(`bot açıldı ${client.user.tag}!`);
  client.user.setActivity('naber oçlar', { type: 'PLAYING' })
.then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`))
.catch(console.error);
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'oç) {
		msg.reply('sensin oç');
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'ben ne kadar oçum') {
		msg.reply('sen dünyanın en iyi oçusun');
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'sa') {
		msg.reply('as');
	}
});

client.login('ODYzMDQxMzA2Mzg4ODU2ODMy.YOhH2Q.HCe37bPkJCfnRdKEEnLwLSWccxA');
