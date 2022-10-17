const { EmbedBuilder } = require('discord.js');

module.exports = {
    meta: {
        operatorOnly: true,
        serverOnly: false,
        description: "8ball command",
        alias: null
    },

    execute (client, message, args) {
        if (args[0] == undefined) {
            message.channel.send("You need to ask a question!");
            return;
        }

        const answers = [
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful."
        ]

        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(':sparkles: Magic 8ball :sparkles:')
            .setThumbnail('https://freepngimg.com/thumb/8_ball_pool/26906-7-8-ball-pool-transparent.png')
            .addFields(
                { name: "Question: ", value: `**${args.join(" ")}**`},
                { name: "Answer: ", value: `**${answers[Math.floor(Math.random() * answers.length)]}**`},
            )
    
        message.channel.send({ embeds: [exampleEmbed] });
    }
}