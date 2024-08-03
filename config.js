const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="bilalawanzada228@gmail.com"
global.location="Dubai,UAE."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/DUBAI";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaRJYnw9Bb62DfrGXw3h";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaRJYnw9Bb62DfrGXw3h" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/003f81e23f20cc7c7b855.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bilal-awanzada" 


global.devs = "971558510406" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "971558510406";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "https://telegra.ph/file/003f81e23f20cc7c7b855.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,989021450517";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "989021450517,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_05_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDg3LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjksXG4gICAgICAgIDk3LFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICA4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgODUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE0LFxuICAgICAgICA4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcyLFxuICAgICAgICA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6R1p6QlRQcGxIWjdiSHZ1b1RrRjdudnBYVUVsZ3ZEQ2NCcVppREY3ZWR3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvQWhRUFVBc1RiMnZTN3ZkQldSek13XCIsXG4gIFwicGhvbmVJZFwiOiBcIjU5YTY4MjU2LTcxNGMtNGQ4Zi1hYWFlLWM4ZTI1NmQ2ZmE1MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAxNDEsXG4gICAgICAzNixcbiAgICAgIDEzMyxcbiAgICAgIDI0OSxcbiAgICAgIDEzOSxcbiAgICAgIDgsXG4gICAgICA5MCxcbiAgICAgIDE1NCxcbiAgICAgIDYyLFxuICAgICAgNjAsXG4gICAgICAzNyxcbiAgICAgIDI5LFxuICAgICAgMTY0LFxuICAgICAgMTQ5LFxuICAgICAgMTEzLFxuICAgICAgMTY4LFxuICAgICAgMTY4LFxuICAgICAgMTM3LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDE5LFxuICAgICAgODksXG4gICAgICAxNCxcbiAgICAgIDE2NyxcbiAgICAgIDkxLFxuICAgICAgMTcxLFxuICAgICAgNDMsXG4gICAgICA5OCxcbiAgICAgIDIwOSxcbiAgICAgIDQ3LFxuICAgICAgMTA0LFxuICAgICAgMzQsXG4gICAgICAxMjYsXG4gICAgICAzNixcbiAgICAgIDI1MyxcbiAgICAgIDUwLFxuICAgICAgMTIxLFxuICAgICAgNDIsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pIMHorWUJFTTNpdWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVVlib2pzNGF4ZU9xR1lqOTBLYXpKcG03TnRWWnFKTFVOTTdDdURQVDhTYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjbjlFViszVWFZcHBYcG55OU9MRjIvTGQyREZGbEJwVjUyNUpIOGdod1F0bkE3dzl1YVRhY3VidzZFOTc2RnVaQjRaVC9qUWZ5V0ZlbmFmZUJjSUdCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuc1ZtSEVUZitkQWFDQ3hSWVVGOCtubnMzQXBLZmNiVENZZ2srajdWcWw1NnlXNzZUenF3Vy9YZVRQa2VaZ0V0eDVqeFZrajhZWEpINWlWc2c1UEhoUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk3MTU4ODEwMTc2MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWVlbmFcIixcbiAgICBcImxpZFwiOiBcIjI2MTI4NDgyMjAwMzc2MzoxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTcxNTg4MTAxNzYwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3MDgzMDVcbn0iCn0="  // PUT your SESSION_ID
module.exports = {
  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bilal²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝄟✮͢🦋⃟≛⃝ вιℓαℓ αωαиzα∂α𝄟-+971558510406",
  packname: process.env.PACK_NAME || "message me for join the group",
  botname : process.env.BOT_NAME  || "𝄟✮͢🦋⃟≛⃝ вιℓαℓ αωαиzα∂α𝄟",
  ownername:process.env.OWNER_NAME|| "Bilal-Awanzada",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "...6f63";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://telegra.ph/file/003f81e23f20cc7c7b855.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "...6f63",
