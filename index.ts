import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import 'dotenv/config'

// const DiscordJS = require('discord.js')
// const { Intents } = DiscordJS
// const WOKCommands = require('wokcommands')
// const path = require('path')
// require('dotenv/config')

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
})

client.on('ready', () => {
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, 'features'),
    typeScript: true,
    testServers: ['879296318395277352'],
    botOwners: ['251120969320497152'],
    mongoUri: process.env.MONGO_URI,
  })
})

client.login(process.env.TOKEN)
