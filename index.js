require("dotenv").config();

const DISCORD = require("discord.js");
const CLIENT = new DISCORD.Client();

CLIENT.on("ready", () => {
    console.log("ready!");
});

CLIENT.on("message", message => {
    if (message.content === "hi") {
        console.log("reply!");
        message.reply("Hello!");
    }
});

CLIENT.login(process.env.BOT_TOKEN);
