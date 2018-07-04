const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
var moment = require('moment-timezone');
var cTime = new Date(),
hours = cTime.getHours(),
minutes = cTime.getMinutes();

if(minutes < 10){
  minutes = "0" + minutes;
}


client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", async message => {

    if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if(cmd === "us"){
    hours = cTime.getHours(),
    minutes = cTime.getMinutes();

    let role = message.guild.roles.find("name", "US");
    let member = message.member;

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    var suffix = "AM";
    if(hours >= 12){
      suffix = "PM";
      hours = hours - 12;
    }
    if(hours == 0){
      hours = 12;
    }

    message.channel.send("The current time in EST (US) is "+hours+":"+minutes+" "+suffix);

    if(message.member.roles.find("name", "EU") || message.member.roles.find("name", "US")){return message.channel.send("You already have a timezone related role.")}

    member.addRole(role);

    message.channel.send("Additionally, you have been gifted the US role.")
  }
  if(cmd === "eu"){
    hours = cTime.getHours(),
    minutes = cTime.getMinutes();

    let role = message.guild.roles.find("name", "EU");
    let member = message.member;

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    hours = hours + 8;

    var suffix = "AM";
    if(hours >= 12){
      suffix = "PM";
      hours = hours - 12;
    }
    if(hours == 0){
      hours = 12;
    }

    message.channel.send("The current time in GMT+1 (EU) is "+hours+":"+minutes+" "+suffix);

    if(message.member.roles.find("name", "EU") || message.member.roles.find("name", "US")){return message.channel.send("You already have a timezone related role.")}

    member.addRole(role);

    message.channel.send("Additionally, you have been gifted the EU role.")
  }

  if(cmd === "aus"){
    hours = cTime.getHours(),
    minutes = cTime.getMinutes();

    let role = message.guild.roles.find("name", "AUS");
    let member = message.member;

    

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    hours = hours + 3;

    var suffix = "PM";
    if(hours >= 12){
      suffix = "AM";
      hours = hours - 12;
    }
    if(hours == 0){
      hours = 12;
    }

    message.channel.send("The current time in GMT+8 (AUS) is "+hours+":"+minutes+" "+suffix);

    if(message.member.roles.find("name", "EU") || message.member.roles.find("name", "US")){return message.channel.send("You already have a timezone related role.")}
    member.addRole(role);

    message.channel.send("Additionally, you have been gifted the AUS role.")
  }

  if(message.content.startsWith(`${prefix}timezone`)){
    const tEmbed = new Discord.RichEmbed()
    .setTitle("**Timezones**")
    .setThumbnail("https://cdn.discordapp.com/attachments/463839798596075520/464134567406731291/1.png")
    .setColor("305252")
    .addField("!US", "Shows time for US", true) //EST
    .addField("!EU", "Shows time for EU", true) //GMT+1
    .addField("!AUS", "Shows time for AUS", true) //GMT+8

    message.channel.send(tEmbed);
  }

});

client.login("NDY0MTMwOTkyMjExMzYxNzky.Dh6fMA.p1LV8PtEOUzfllYhaGKv3P656J4");