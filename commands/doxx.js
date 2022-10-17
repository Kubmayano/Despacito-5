const fs = require("fs");
const { EmbedBuilder, ThreadAutoArchiveDuration } = require("discord.js");

module.exports = {
    meta: {
        operatorOnly: true,
        serverOnly: false,
        description: "Doxxes a person of your choice ;)",
        alias: null,
    },

    execute (client, message, args) {
        function Next(seed) {
            var m = 2**35 - 31;
            var a = 185852;
            var s = seed % m;

            return ((s = s * a % m) / m) * 1000;
        }

        const colors = [
            "#FF0000",
            "#FF7F00",
            "#FFFF00",
            "#00FF00",
            "#0000FF",
            "#4B0082",
            "#8B00FF",
            "#A52A2A",
            "#FF69B4",
            "#FF1493",
            "#FF4500",
            "#FFD700",
        ]

        let user = message.mentions.users.first();

        if (user == undefined) {
            user = message.author;
        }
        let names = fs.readFileSync("Files/names.txt", "utf-8").split("\r").join(" ").split("\n");
        let cardNumbers = fs.readFileSync("Files/cardNumbers.txt", "utf-8").split("\n");

        let year = new Date().getFullYear();
        let age = Math.floor(Next(user.id) + 1) % 100 + (year - 2022);
        let name = names[Math.floor(Next(user.id))].trim() + " " + names[Math.floor(Next(user.id) + 1)].trim();
        let email = name.split(" ").join(".").toLowerCase() + (year - age).toString().substring(2, 4) + "@gmail.com";
        let address = Math.floor(Next(user.id) + 1) + " " + names[Math.floor(Next(user.id) + 2)].trim() + " St, " + names[Math.floor(Next(user.id) + 3)].trim() + ", " + Math.floor(Next(user.id) + Math.floor(Next(user.id) * 10) + 1);
        let cardNumber = cardNumbers[Math.floor(Next(user.id) + 1)];
        let cvv = Math.floor(Next(user.id) + 16) % 1000;
        let expirationDate = Math.floor(Next(user.id) + 1) % 12 + 1 + "/" + (year + Math.floor(Next(user.id) + 1) % 8);
        let month = expirationDate.split("/")[0];
        let relationshipStatus = Math.floor(Next(user.id) + 1) % 2 == 0 ? "Single" : "Married";

        if (month < 10) {
            month = "0" + month;
        }

        expirationDate = month + "/" + expirationDate.split("/")[1];

        let cardNumber1 = cardNumber.substring(0, 4);
        let cardNumber2 = cardNumber.substring(4, 8);
        let cardNumber3 = cardNumber.substring(8, 12);
        let cardNumber4 = cardNumber.substring(12, 16);

        cardNumber = cardNumber1 + " " + cardNumber2 + " " + cardNumber3 + " " + cardNumber4;

        const embed = new EmbedBuilder()
            .setAuthor({name: message.author.tag, iconURL: message.author.displayAvatarURL()})
            .setTitle(`Doxxed 😱😱😱`)
            .setColor(colors[Math.floor(Next(user.id) + 2) % 7])
            .setThumbnail(user.displayAvatarURL())
            .setDescription(`**Here is the personal information for ${user.tag}**`)
            .addFields(
                {name: "Name: ", value: name, inline: false},
                {name: "Age: ", value: age.toString(), inline: false},
                {name: "Email: ", value: email, inline: false},
                {name: "Address: ", value: `[${address}](https://duckduckgo.com/?q=${address.trim().split(" ").join("+")}&t=h_&ia=web)`, inline: false},
                {name: "Card Number: ", value: cardNumber, inline: true},
                {name: "CVV: ", value: cvv.toString(), inline: true},
                {name: "Expiration Date: ", value: expirationDate, inline: true},
                {name: "Relationship Status: ", value: relationshipStatus, inline: false},
            )

        message.channel.send({embeds: [embed]});
    }
}