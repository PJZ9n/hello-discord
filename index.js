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
    //TODO コマンドの例外処理
    let command = message.content.split(" ");
    if (command[0] === "vc") {
        if (message.member.voice.channel) {
            let url = command[1];
            const CONNECTION = await message.member.voice.channel.join();
            let y = YTDL(url, {
                filter: "audioonly"
            });
            CONNECTION.play(y);
            message.reply("Now playing!");
        } else {
            message.reply("VCに入ってください");
        }
    }
});

CLIENT.login(process.env.BOT_TOKEN);
