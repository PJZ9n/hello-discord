require("dotenv").config();
const YTDL = require("ytdl-core");
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

CLIENT.on("message", async message => {
    if (!message.guild) return;
    if (message.content === "vc") {
        if (message.member.voice.channel) {
            const CONNECTION = await message.member.voice.channel.join();
            let y = YTDL("https://www.youtube.com/watch?v=9lVPAWLWtWc", {
                filter: "audioonly"
            });
            CONNECTION.play(y);
        } else {
            message.reply("VCに入ってください");
        }
    }
});

CLIENT.login(process.env.BOT_TOKEN);
