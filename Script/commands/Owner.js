const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "HIMEL CHAT BOT",
  description: "Show Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  
  const info = `
╔═════════════════════ ✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═════════════════════ ✿
║ 👑 𝐍𝐚𝐦𝐞 : 𝐇𝐢𝐦𝐞𝐥
║ 🎂 𝐀𝐠𝐞 : 𝟐𝟑+
║ 💘 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧 : 𝐒𝐢𝐧𝐠𝐥𝐞
║ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : 𝐒𝐡𝐚𝐭𝐤𝐡𝐢𝐫𝐚
╠═════════════════════ ✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═════════════════════ ✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║ fb.com/100083400862567
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :
║ m.me/100083400862567
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :
║ wa.me/01829162372
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :
║ t.me/mrhimel07
╚═════════════════════ ✿

`;

  const images = [
    "https://drive.google.com/file/d/1Py7p4jvU08RaYdABR26y3c2Lrh1BXB_b/view?usp=drivesdk",
    "https://drive.google.com/file/d/1Py7p4jvU08RaYdABR26y3c2Lrh1BXB_b/view?usp=drivesdk",
    "https://drive.google.com/file/d/1Py7p4jvU08RaYdABR26y3c2Lrh1BXB_b/view?usp=drivesdk",
    "https://drive.google.com/file/d/1Py7p4jvU08RaYdABR26y3c2Lrh1BXB_b/view?usp=drivesdk"
  ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  const callback = () => api.sendMessage(
    {
      body: info,
      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
    },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
  );

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
    .on("close", () => callback());
};
