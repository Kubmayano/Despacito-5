module.exports = {
    meta: {
        operatorOnly: true,
        serverOnly: false,
        description: "Echoes your input",
        alias: null
    },

    execute (client, message, args) {
        message.channel.send(args.join(" "))
    }
}