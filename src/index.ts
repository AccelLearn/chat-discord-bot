import { Client } from "discord.js";

import dotenv from "dotenv";

// load .env file to process.env
dotenv.config();

const client = new Client({
  // intents: 表示监听哪些事件，下面这两个表示监听频道信息
  intents: [
    "Guilds",
    "GuildMessages",
  ],
  // presence: 表示机器人的状态
  presence: { status: "online" },
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("message", (message) => {
  if (message.content === "ping")
    message.reply("pong");
});

client.login(process.env.BOTTOKEN);
