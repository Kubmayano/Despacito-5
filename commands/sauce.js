module.exports = {
    meta: {
        operatorOnly: false,
        serverOnly: false,
        description: "sauce code for sauce :33",
        alias: null
    },

    execute (client, message, args) {

        const fs = require("fs")
        const sauce = fs.readFileSync("./commands/sauce.js", "utf-8")
        message.channel.send(`\`\`\`js\n${sauce.toString()} \`\`\``)

    }
}