const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')


var prefix = ayarlar.prefix

client.on('ready', () => {
  console.log(`Hey, ${client.user.tag} Hoşgeldin!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Sa') {
    msg.channel.sendMessage('Aleyküm Selam ');
  }
  if (msg.content === 'sa') {
    msg.channel.sendMessage('Aleyküm Selam ');
  }
  if (msg.content === 'sA') {
    msg.channel.sendMessage('Aleyküm Selam ');
  }
  if (msg.content === 'SA') {
    msg.channel.sendMessage('Aleyküm Selam ');
  }
  if (msg.content === 'Selam') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
  if (msg.content === 'selam') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
  if (msg.content === 'SELAM') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
  if (msg.content === 'Deniz') {
    msg.reply('G*tüne girsin kereviz');
  }
  if (msg.content === 'bot mal') {
    msg.reply('Koyumda doMALL');
  }
  if (msg.content === 'Ayı') {
    msg.reply('G*tüne girsin keman yayı');
  }
  if (msg.content === 'Şişe') {
    msg.reply('Git duvara işe');
  }
  if (msg.content === 'Ersin') {
    msg.reply('Sınava çalışmazsan b*ku yersin');
  }
  if (msg.content === '10') {
    msg.reply('Kırmızı don');
  }
  if (msg.content === 'On') {
    msg.reply('Kırmızı don');
  }
  //KODLAR BURADA BAŞLIYOR
  //1.avatar gösterici
  if (msg.content === prefix + 'avatarım') {
    msg.channel.sendMessage(msg.author.avatarURL);
  }

  //2.yardım menüsü açıcı
  if (msg.content === prefix + 'yardım') {
     msg.channel.sendMessage('rtb?yardım : Bu menüyü açar :smile: .');
     msg.channel.sendMessage('rtb?avatarım : Profil resminizi gösterir.');
     msg.channel.sendMessage('rtb?temizle <sayı(MAX:5000)> : Komuttan sonraki rakam kadar mesaj siler.(DAHA HAZIR DEĞİL)');
     msg.channel.sendMessage('rtb?söv : Size söver.');
     msg.channel.sendMessage('rtb?prefix : Prefixi gösterir ama bu komutu yazabiliyorsanız zaten biliyorsunuzdur :smile: .');
     msg.channel.sendMessage('rtb?bb : Size görüşürüz der.')
     msg.channel.sendMessage('rtb?yapımcı : Yapımcıyı gösterir.')
  }
  //3. sohbet temizleyici
  if (msg.content === prefix + "temizle") {

  }
  //4. sövücü
  if(msg.content === prefix + "söv") {
    msg.reply('Senin sikerim ulan sonunda bana kendine sövdürttün amk sikerim senin belanı ulan!');
  }
  //5. prefix gösterici
  if(msg.content === prefix + "prefix") {
    msg.channel.sendMessage(prefix);
  }
  //6. para gösterici
  if(msg.content === prefix + "para") {
    economy.fetchBalance(msg.author.id).then(i => {
      msg.reply('Paranız :' + i.money + 'TL');
    })
  }
  //7. görüşürüz diyici
  if(msg.content === prefix + "bb") {
    msg.reply('Görüşürüz canım.');
  }
  if(msg.content === prefix + "yapımcı") {
    msg.channel.sendMessage(ayarlar.author);
  }
});
client.on('guildBanAdd' , (guild , user) => {
  let üyeler = guild.channels.find('name' , 'genel');
  if(!üyeler) return;
  üyeler.send('Kullanıcı ' + user.username + 'artık sunucumuzdan banlandı.')
});

client.login(process.env.BOT_ADD);
