const axios = require("axios")

module.exports = {
    meta: {
        operatorOnly: true,
        serverOnly: false,
        description: "Geoguessr cheat command",
        alias: null
    },

    async execute (client, message, args) {
        function getCountry(gameToken) {
            const options = {
                method: 'GET',
                url: "https://www.geoguessr.com/api/v3/games/" + gameToken,


            };

            axios.request(options).then(function (response) {
                message.channel.send(response.data.rounds[response.data.rounds.length - 1].streakLocationCode);
            }).catch(function (error) {
                console.error(error);
            });
        }

        if (args[0] == undefined) {
            message.channel.send("You need to provide a game token!");
            return;
        }

        getCountry(args[0])
    }
}