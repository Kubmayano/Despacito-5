module.exports = {

    meta: {
        operatorOnly: true,
        serverOnly: false,
        description: "Reloads your stupid ass commands 5head",
        alias: ["r", "bitchfinnawork"]
    },

    execute (client, message, args) {
        try {
            delete require.cache[require.resolve(`../commands/${args[0]}.js`)];
            message.channel.send(`✅ The \`${args[0]}\` command was reloaded!`);
        } catch(err) {
            message.channel.send("Something went fucky wucky, are you sure that is a real command?")
        }
    }
}