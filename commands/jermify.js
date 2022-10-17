const { discordSort } = require('discord.js')
const { disconnect } = require('process')

module.exports = {

    meta: {
        operatorOnly: true,
        serverOnly: false,
        description: "Jerma laughs at your goofy ah ah ass",
        alias: null
    },

    async execute (client, message, args) {
        
        const { createCanvas, loadImage } = require('canvas')
        const fs = require('fs')
        const canvas = createCanvas(1920, 1080)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = "#fff"

        const pfp = await loadImage("https://media.discordapp.net/attachments/457464958976917504/1031597620944175205/hEAD.png?width=442&height=676")
        ctx.drawImage(pfp, 0, 0, 200, 200)

        const buffer = canvas.toBuffer();
        fs.writeFileSync(`./images.png`, buffer);
       
    }
}