const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require('./işaret.json');
const hedefimiz = require('./hedef.json');
const { Client, MessageEmbed } = require('discord.js')


var prefix = işaret.prefix
var hedef = hedefimiz.hedef

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

client.on('guildMemberAdd', member => {
  const girişçıkış = member.guild.channels.cache.find(channel => channel.name === '🖐gelen-giden');
  girişçıkış.send(`Aramıza hoşgeldin, ${member}`);
});

client.on("message", message => {
  if (message.content.startsWith('!rolver')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    let role = message.mentions.roles.first();
    let member = message.mentions.members.first();
    member.roles.add(role)
  }
});

client.on("guildMemberAdd", member => {
  try {
  let role = member.guild.roles.cache.find(role => role.name === '👦| Üye')
  member.roles.add(role);
} catch(e) {
  console.log(e)
}
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!at')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === '📌sunucu-log')
           log.send(`${user.tag} kişisi atılmıştır`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Atılacak kişiyi yazmadın");
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;
if (message.content.startsWith('!banla')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın çünkü yetkin yok brom')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
           log.send(`${user.tag} kişisi banlanmıştır.`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Yasaklanacak kişiyi yazmadın.");
    }
  }
});

client.on('guildMemberAdd', member => {
try {
const Sayaç = member.guild;
Sayaç.setName(`Drkurganci (${member.guild.memberCount}/${hedef}`);
}
catch (e) {
console.log(e);
}
}); 

client.on('guildMemberRemove', member => {
try {
const Sayaç = member.guild;
Sayaç.setName(`Drkurganci (${member.guild.memberCount}/${hedef}`);
}
catch (e) {
console.log(e);
}
}); 


client.on('guildMemberRemove', member => {
  const girişçıkış = member.guild.channels.cache.find(channel => channel.name === '🖐gelen-giden');
  girişçıkış.send(`Görüşürüz üzüldüm, ${member}`);
});

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'youtube') {
    const kanal = new MessageEmbed()

    .setTitle('Thelord')
    .setDescription('https://www.youtube.com/channel/UChZpaiKDa7Ltg2g60bgB3Rw')
    .setAuthor('TheLord')
    .setColor("RANDOM")
    .setThumbnail('https://discord.com/channels/863000661732622366/863001841314037770/863446227672891392')
    .addField('Doruk', 'Bilinmiyor!');
    message.channel.send(kanal);
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
