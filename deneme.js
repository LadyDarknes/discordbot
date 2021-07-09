const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require('./işaret.json');

var prefix = işaret.prefix

client.on('ready', () => {
	console.log(`bot açıldı ${client.user.tag}!`);
  client.user.setActivity('doruk ve Thelordun kanalarını takip ediniz kanları bulmak için !youtube yazabilirsiniz', { type: 'PLAYING' })
.then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`))
.catch(console.error);
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'sa') {
		msg.reply('as');
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'selam') {
		msg.reply('as');
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'naber') {
		msg.reply('iyi sen?');
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'youtube') {
		msg.reply('');
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'merhaba') {
		msg.reply('selam');
 }
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'malmısın amk') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'ya malmısın') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});


client.on('message', msg => {
	if (msg.content.toLowerCase() === 'ananı sikerim') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});


client.on('message', msg => {
	if (msg.content.toLowerCase() === 'sg') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});


client.on('message', msg => {
	if (msg.content.toLowerCase() === 'siktir') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});


client.on('message', msg => {
	if (msg.content.toLowerCase() === 'sikerim') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});


client.on('message', msg => {
	if (msg.content.toLowerCase() === 'oç') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});


client.on('message', msg => {
	if (msg.content.toLowerCase() === 'amk') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});


client.on('message', msg => {
	if (msg.content.toLowerCase() === 'piç') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});


client.on('message', msg => {
	if (msg.content.toLowerCase() === 'salak') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});


client.on('message', msg => {
	if (msg.content.toLowerCase() === 'piç') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'adam') {
   msg.react('🥰')
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'adamsın') {
   msg.react('🥰')
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'mal') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'nasılsın') {
		msg.reply('iyiyim sen?');
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'gerizekalı') {
   msg.delete()
   msg.reply('Burda küfür yasaktır!');
	}
});


client.on('message', msg => {
	if (msg.content.toLowerCase() === 'ben geldim') {
  	msg.reply('hoş geldin');
	}
});

client.login('ODYzMDQxMzA2Mzg4ODU2ODMy.YOhH2Q.HCe37bPkJCfnRdKEEnLwLSWccxA');
