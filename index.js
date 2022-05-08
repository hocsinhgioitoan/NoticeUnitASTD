const {
    Client,
    WebhookClient
} = require('discord.js-selfbot-v13');
const client = new Client();
console.log("hello")
client.on('ready', async () => {
    console.log(`
███╗░░██╗░█████╗░████████╗██╗░█████╗░███████╗██████╗░  ██╗░░░██╗███╗░░██╗██╗████████╗
████╗░██║██╔══██╗╚══██╔══╝██║██╔══██╗██╔════╝██╔══██╗  ██║░░░██║████╗░██║██║╚══██╔══╝
██╔██╗██║██║░░██║░░░██║░░░██║██║░░╚═╝█████╗░░██████╔╝  ██║░░░██║██╔██╗██║██║░░░██║░░░
██║╚████║██║░░██║░░░██║░░░██║██║░░██╗██╔══╝░░██╔══██╗  ██║░░░██║██║╚████║██║░░░██║░░░
██║░╚███║╚█████╔╝░░░██║░░░██║╚█████╔╝███████╗██║░░██║  ╚██████╔╝██║░╚███║██║░░░██║░░░
╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░╚═╝░╚════╝░╚══════╝╚═╝░░╚═╝  ░╚═════╝░╚═╝░░╚══╝╚═╝░░░╚═╝░░░
Made by hocsinhgioitoan https://github.com/hocsinhgioitoan | Free
    `)
    if (!client.guilds.cache.get("710745950380884009")) return console.log("Error: You are not in All Star discord server https://discord.com/invite/allstar")
    if (!client.channels.cache.get("793929630234312735")) return console.log("Error: You are not verify in All Star discord server")
    console.log(`${client.user.username} is ready!`);
})
const config = require("./config.js")
const item = config.unit
client.on("messageCreate", async message => {
    if (!message.guild) return
    if (message.guild.id !== "710745950380884009") return
    if (message.channel.id !== "793929630234312735") return
    const webhookClient = new WebhookClient({
        url: process.env["wh"]
    });
    if (message.webhookId) {
        let sum
        for (const element of item) {
            const content = message.content.toLowerCase()
            const e = element.toLowerCase()
            sum = content.includes(e)
            if (sum == true) {
                webhookClient.send(`🔍 Notice: __**${e}**__ is selling. <@${config.userID}> `)
            }
        }
    }
})
//console.log(process.env["token"])
client.login(process.env["token"]);
const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send("Halou")
})
app.listen(3000, () => {
    console.log('server started');
});