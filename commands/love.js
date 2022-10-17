const axios = require("axios")

module.exports = {
    meta: {
        operatorOnly: false,
        serverOnly: false,
        description: "Checks love compatibility between two people",
        alias: null
    },

    execute (client, message, args) {
        let fName = message.author.username;

        if (message.mentions.users.first() == undefined) {
            message.channel.send("You need to mention someone to check their love compatibility with you!");
            return;
        }
        
        let sName = message.mentions.users.first().username;

        const options = {
            method: 'GET',
            url: 'https://love-calculator.p.rapidapi.com/getPercentage',
            params: {fname: fName, sname: sName},
            headers: {
                'X-RapidAPI-Key': '8e90df08f6msh47757d281280111p17e8d7jsnb21ab66a8446',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            message.channel.send("You are " + response.data.percentage + "% compatible with " + sName + "!\n" + response.data.result);
        }

        ).catch(function (error) {
            console.error(error);
        });
    }
}