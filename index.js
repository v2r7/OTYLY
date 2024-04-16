///coded by : 
const express = require("express");
const app = express();

app.listen(() => console.log("Tax bot By Ra3d"));

///coded by : 
const Discord = require('discord.js');
const client = new Discord.Client();
///coded by : 
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(">| Stats :-");
  console.log(`Servers : > " ${client.guilds.cache.size} " `);
  console.log(`Users : > " ${client.users.cache.size} " `);
  console.log(`channels : > " ${client.channels.cache.size} " `);
  console.log(">| Date :");
  console.log(`> ${new Date()}`);
  console.log(">| Name :");
  console.log(`> ${client.user.username}`);
  client.user.setActivity('#tax || #wa ', ({type: "WATCHING"})) //حط قيم الي تبيها
});
 
 
client.on("message", async message => {
///coded by : 

   
const prefix = "+";//برفكس حقك
const devs = "762429683483672647";//اي دي حقك
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
///coded by : Ra
  if (message.content.toLowerCase().startsWith(prefix + "+help".toLowerCase())) { 
    let help = new Discord.MessageEmbed()
      .setColor("0x5016f3")
      .setDescription(`**( Probot Taxs . :rocket: )
      
        --------------------------------------------------
                
               Probot Commands :
                
               1-  ${prefix}tax 
معلومة اذا تبي تكتب الضريبه اكتب 500000 لاتكتب 500k !!!
        --------------------------------------------------
        Developers : <@1114863041058713680>
            **`);
    message.channel.send(help);
  }
///coded 
  if (message.content.toLowerCase().startsWith(prefix + "".toLowerCase())) { 
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    let errorembed3 = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**It Must be a number**`)
    .setFooter(`${client.user.username}`);
    if (!args2) return message.channel.send(errorembed3);
    let errorembed2 = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**Must Be A Number**`)
    .setFooter(`${client.user.username}`);
    if (isNaN(args2)) return message.channel.send(errorembed2);
    let errorembed = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**Must The Number Larger 1**`)
    .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.channel.send(errorembed);
    let embed3 = new Discord.MessageEmbed()
    .setTitle(`**:notes: The Final Cost Is :**`)
    .setColor("#43b581")
    .setDescription(`1`)
    .setFooter(`${client.user.username}`);
    if (args2 == 1) return message.channel.send(embed3);
    let embed = new Discord.MessageEmbed()
    .setTitle(`**:notes: The Final Cost Is :**`)
    .setColor("#43b581")
    .setDescription(`**ضريبه الوسيط** : **${tax2}**
                      **ضريبة التحويل** : **${tax3}**
                      **المبلغ المطلوب تحويله** : **${tax4}**`)
    .setFooter(`${client.user.username}`);
    message.channel.send(embed);
  }



///coded by : 
  if (message.content.toLowerCase().startsWith("tax".toLowerCase())) { 
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let errorembed3 = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**It Must be a number**`)
    .setFooter(`${client.user.username}`);
    if (!args2) return message.channel.send(errorembed3);
    let errorembed2 = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**Must Be A Number**`)
    .setFooter(`${client.user.username}`);
    if (isNaN(args2)) return message.channel.send(errorembed2);
    let errorembed = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**Must The Number Larger 1**`)
    .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.channel.send(errorembed);
    let embed3 = new Discord.MessageEmbed()
    .setTitle(`**:notes: The Final Cost Is :**`)
    .setColor("#43b581")
    .setDescription(`1`)
    .setFooter(`${client.user.username}`);
    if (args2 == 1) return message.channel.send(embed3);
    let embed = new Discord.MessageEmbed()
       .setFooter(`Developer Development For Old Host`)
      .setThumbnail(`https://cdn.discordapp.com/icons/870478765455732736/a_16d3dc47d2844892f4097b6e8b17112c.gif?size=1024`)
    .setColor("#43b581")
    .setTitle(`**ضريبة المبلغ : ${tax}
    يرجى التحويل في روم <#>**`);
    message.channel.send('||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ @here', {embed: embed});
  }

  

///coded by : Ra3d🍁#9999 - AbdulElah#0437 - Ln,Muziky#8956
 
  
let ac = ["listening", "watching", "playing", "streaming","default"];
let ac2 = ["online", "idle", "invisible", "dnd","default"];

 let args0 = message.content.split(" ");
  if (args0[0] === (prefix + 'settings')) {
   if (!devs.includes(message.author.id)) return;
    if (args0[1] === 'setname') {
      if (!args0[2]) return message.channel.send('**:x: Please input a new name.**');
      await client.user.setUsername(args0.slice(2).join(" "));
 let changedname = new Discord.MessageEmbed()
  .setTimestamp().setColor("GREEN").setAuthor(message.author.username, message.author.displayAvatarURL()).setFooter(client.user.username,client.user.displayAvatarURL()).setThumbnail(message.guild.iconURL())
  .setDescription(`**✅ Done , The bot name changed to : ${args0.slice(2).join(" ")}**`)
  message.channel.send(changedname)
       message.react('✅');
    } else if (args0[1] === 'setavatar') {
      if (!args0[2]) return message.channel.send('**:x: Please input an avatar URL.**');
      await client.user.setAvatar(args0.slice(2).join(" "));
 let changedavatar = new Discord.MessageEmbed()
  .setTimestamp().setImage(args0.slice(2).join(" ")).setColor("GREEN").setAuthor(message.author.username, message.author.displayAvatarURL()).setFooter(client.user.username,client.user.displayAvatarURL()).setThumbnail(message.guild.iconURL())
  .setDescription(`**✅ The bot avatar was changed to :**`)
  message.channel.send(changedavatar)
       message.react('✅');
    } else { 
       message.channel.send(`> **:bulb: Usage**: ${prefix}settings [ \`setname\` - \`setavatar\` - ]`);
       message.react('ℹ️');
    }
  }

///coded by : 6  
  
      if (message.content === prefix + "ping") {
        const betha = new Discord.MessageEmbed()
        .setTitle('Your PING')
        .setColor("RANDOM")
        .addField([`${Date.now() - message.createdTimestamp}` + "MS"])
        .setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true }))
      message.channel.send(betha)
      }
});


///coded by :

client.login(process.env.token); //توكن بوتك هنا
