const { EmbedBuilder, Colors } = require("discord.js");

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

        const embed = new EmbedBuilder()
            .setTitle("8ball")
            .setAuthor({iconURL: "https://icon2.cleanpng.com/20180328/gow/kisspng-magic-8-ball-8-ball-pool-eight-ball-crystal-ball-8-5abc1c23993766.8476711715222774116276.jpg"})
            .addFields(
                {name: "Q: ", value: args, inline: false},
                {name: "A: ", value: answers[Math.floor(Math.random() * answers.length)], inline: false},
            )

        message.channel.send({emebds: [embed]});
    }
}