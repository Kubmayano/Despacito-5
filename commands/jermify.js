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
        const canvas = createCanvas(200, 200)
        const ctx = canvas.getContext('2d')

        const pfp = await loadImage(message.author.displayAvatarURL())
        ctx.drawImage(pfp, 0, 0, 200, 200)

        const buffer = canvas.toBuffer("image/png")
        fs.writeFileSync(`./Files/Images/${message.author.id}.png`, buffer)
        

        
    }
}