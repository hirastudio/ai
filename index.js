const express = require("express")
const app = express()
app.get('/', (req, res) => {
  res.send("started")
})
app.listen("8000")
//======== Imports ========================//
const { Client, Collection, GatewayIntentBits, AttachmentBuilder, Message } = require('discord.js')
const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('@discordjs/builders')
const { ButtonStyle } = require("discord-api-types/v10");
const db = require("pro.db");
const chalk = require('chalk');
const { createCanvas, loadImage } = require('canvas');
//======== Imports ========================//

const client = new Client({
  intents: 131071,
})

const fs = require('fs')
const internal = require("stream")

client.slashCommands = new Collection();

module.exports = client;
fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)(client);
})


client.on(`ready`, () => {
  console.log(client.user.username)
})

process.on('unhandledRejection', (reason, p) => {
  return;
});
process.on('uncaughtException', (err, origin) => {
  return;
});
process.on('uncaughtExceptionMonitor', (err, origin) => {
  return;

});
process.on('warning', (warning) => {
  return;
});

//============================== UPTIME URLS =====================================//

setInterval(() => {
  let data = db.fetchAll();
  for (const key in data) {
    fetch(data[key].url).catch(() => { });
  }
}, 1000);

//============================== UPTIME URLS =====================================//

client.login('MTIxOTI0MjY0ODQ2MDcyNjM2Mw.GsoxO5.JFvikKLLdQvJ3844RmwYlpRtNuIIFYWS95-ncI')