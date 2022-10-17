module.exports = {

    meta: {
        operatorOnly: false,
        serverOnly: false,
        description: "Displays help about commands",
        alias: ["commands", "command"]
    },

    async execute (client, message, args) {

        const fs = require("fs");

        if (args[0] == undefined || args[0] == "") {
            const commands = await fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
            message.channel.send(`**Bot commands:**\n\`\`\`${commands.join(", ").split(".js").join("")}\`\`\``)
            return;
        }

        try {
            let helpFile = require(`../commands/${args[0]}.js`)
            const prefix = require("../config.json").prefix

             message.channel.send(`**${prefix}${args[0]} info**\nOperators only \`${helpFile.meta.operatorOnly}\`\nDescription \`${helpFile.meta.description}\`\nAliases \`${helpFile.meta.alias}\``)
        } catch(err) {
            message.channel.send("This went mega fucky wucky, are you *really* sure that is a real command?")
            return
        }
    }
}