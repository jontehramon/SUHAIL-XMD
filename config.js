const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_00_10_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgODIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI2LFxuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUwLFxuICAgICAgICA0MixcbiAgICAgICAgNzksXG4gICAgICAgIDk5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY3LFxuICAgICAgICAzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNixcbiAgICAgICAgNzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjYreG1IUHhheCtNWmtFM1hTM1ZHVmYyQWZGQW80c2Voc0xrcGtjdlhJLzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzEzMDc1NjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RkU2MUMwNjlDRUNCRjg4REY1NDY3RTY1NUREMERGM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjg1Njg4MjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibGlHcGQxZXNTSFdQOE5iY09JeHRWQVwiLFxuICBcInBob25lSWRcIjogXCI5NTNhZDA2Mi1iZTIzLTRiZDktOGY4MC1hZDMwMGE0ZWY5MDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMTcyLFxuICAgICAgMjYsXG4gICAgICAyNDksXG4gICAgICAxNzQsXG4gICAgICAxMjUsXG4gICAgICAyNDUsXG4gICAgICAzLFxuICAgICAgMTgxLFxuICAgICAgNTIsXG4gICAgICAxMDksXG4gICAgICAzOCxcbiAgICAgIDY0LFxuICAgICAgNzYsXG4gICAgICAxNTgsXG4gICAgICAyNDgsXG4gICAgICAyNDEsXG4gICAgICA0NCxcbiAgICAgIDE5MCxcbiAgICAgIDE3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICA3NixcbiAgICAgIDE1MCxcbiAgICAgIDE1MCxcbiAgICAgIDIwNSxcbiAgICAgIDE3NyxcbiAgICAgIDIyMSxcbiAgICAgIDIxMSxcbiAgICAgIDIxNixcbiAgICAgIDExMCxcbiAgICAgIDI0OSxcbiAgICAgIDQ0LFxuICAgICAgMTgzLFxuICAgICAgMTAxLFxuICAgICAgMTQ1LFxuICAgICAgOTksXG4gICAgICAxNTAsXG4gICAgICAyNDcsXG4gICAgICAxNjcsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkNXOVkyMUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxMzA3NTYxOTo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ0ODE3OTI1MzkwNTUxOjcxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BDYzVONERFTzY3bjdnR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNkRCME1hTlRmMlZKNnJyN0ozRGF5QlM3dUNEa0RpTU9VSE90aE1TNDdpTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWZEsyZkxsUUJzM0RRK2JvcXFSVWdiWXFBNVpVY2Q3SkF5UEhSOVl2eTlGOTRXWVhxMHVLTXM5MDB2dnk0cEoyMzlpQlMycHNIWHpKeUJQYjJEWE1BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpQTI4SHphOXFiTllqcFV3NlA2L1pnbUI5UmhMY296VjhIZmxwN21mZ1VBRGhuSXJVMTFJdHdlR01nbmlrRGNmWjNqblBYQ2tOTmJxVnNrb1p3dkxEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTMwNzU2MTk6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg1Njg4MTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNQ0lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1DSS5qc29uIjogIntcImtleURhdGFcIjpcImxUakNJY1JKZ0ZoQjNqN0VXVGJHTXlhZUtOampvYmp4WE5UbHR5MU5JeFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwNDA4MDc1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4NTY1MzUyNDMwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "RAMON-MD",
  ownername:process.env.OWNER_NAME|| "RAMON-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
