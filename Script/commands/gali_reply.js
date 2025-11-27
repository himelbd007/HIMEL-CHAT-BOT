const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐇𝐢𝐦𝐞𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Himel Bokasoda")==0 || event.body.indexOf("Himel mc")==0 || event.body.indexOf("chod")==0 || event.body.indexOf("Himel nodir pola")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("Himel re chudi")==0 || event.body.indexOf("himel re chod")==0 || event.body.indexOf("Himel Abal")==0 || event.body.indexOf("Himel Boakachoda")==0 || event.body.indexOf("Himel madarchod")==0 || event.body.indexOf("Himel re chudi")==0 || event.body.indexOf("Himel Bokachoda")==0) {
		var msg = {
				body: "তোর মতো বোকাচোদা রে আমার বস হিমেল চু*দা বাদ দিছে🤣\nসাহু এখন আর hetars চুষে না🥱😈",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
