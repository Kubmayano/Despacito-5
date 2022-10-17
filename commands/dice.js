module.exports = {
    meta: {
        operatorOnly: false,
        serverOnly: false,
        description: "Rolls a dice with the specified number of sides",
        alias: ["roll", "d"]
    },

    execute (client, message, args) {
        if (args[0] == undefined || args[0] == "") {
            message.channel.send(`Specify a number of sides to roll a dice`)
            return
        }

        if (isNaN(args[0])) {
            message.channel.send(`Specify a number of sides to roll a dice`)
            return
        }

        let roll = Math.floor(Math.random() * args[0]) + 1
        message.channel.send(`You rolled a ${roll}`)
    }
}