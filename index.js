const { Client, IntentsBitField } = require('discord.js');
const fs = require("fs");
const token = require("./config.json").token;
const prefix = require("./config.json").prefix;

const myIntents = new IntentsBitField();
myIntents.add(IntentsBitField.Flags.GuildPresences, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.MessageContent, 
    IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.Guilds);

const client = new Client({intents: myIntents});


client.once("ready", () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    console.log(`Serving ${client.guilds.cache.size} servers`);
});

client.on("messageCreate", async message => {
    if (!message.toString().startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    if (message.author.bot) return;

    const commandFiles = await fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    
    for (file in commandFiles) {
        let testFile = require(`./commands/${commandFiles[file]}`)
        if (testFile.meta.alias == null) continue
        if (testFile.meta.alias.includes(command)) command = commandFiles[file].split(".")[0]
    }
    
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.execute(client, message, args);
        console.log(`${new Date()}\n${message.author.tag} used ${command}`);
    } catch(err) {
        console.log(err);
    }
});

client.login(token);