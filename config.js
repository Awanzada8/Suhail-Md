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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_19_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgOSxcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTU5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDk5LFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExLFxuICAgICAgICA3MixcbiAgICAgICAgMTIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg0LFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMixcbiAgICAgICAgMjEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg3LFxuICAgICAgICA1NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1LFxuICAgICAgICA3MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhQUjQrTlpiUnl0Zll2VnMzUjY0SUxNYlpHMkw1UWpXVHUyank0ZDA4cnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllBcEp2bnpyVG82eDBpLXFZZzdPUWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmUyYjU2N2UtYzBhMS00MjgzLWJlYzItN2Y2OTM5ZjA2NWUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMTcyLFxuICAgICAgNTAsXG4gICAgICAxNzIsXG4gICAgICA1NSxcbiAgICAgIDI2LFxuICAgICAgMjM4LFxuICAgICAgMjQ3LFxuICAgICAgMTc3LFxuICAgICAgMjE5LFxuICAgICAgMTk1LFxuICAgICAgMjA2LFxuICAgICAgMzQsXG4gICAgICAxMzksXG4gICAgICAxNDAsXG4gICAgICAxMTEsXG4gICAgICAxNzUsXG4gICAgICAxMTcsXG4gICAgICAyMTAsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ0LFxuICAgICAgMTIyLFxuICAgICAgMzksXG4gICAgICAyMDIsXG4gICAgICAyMDgsXG4gICAgICAzNSxcbiAgICAgIDI1NCxcbiAgICAgIDEyNSxcbiAgICAgIDE1NCxcbiAgICAgIDEzLFxuICAgICAgNCxcbiAgICAgIDkwLFxuICAgICAgMjE4LFxuICAgICAgMTY0LFxuICAgICAgMyxcbiAgICAgIDE0NixcbiAgICAgIDE0NCxcbiAgICAgIDE5LFxuICAgICAgNTcsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDMTRMZ0NFSkw0bTdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicVNSeXpxZUc4UW1pTDZuUjJQSXM4YWRUclZtbllEVU9JVUplSmRvK3VWRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHNUVqUDZlcHkyTUk5UkJlek4zejYxeGdiSEI3aWFVeVZLRjVSZHFIcHkvSDE5aTIzTWRsekJwNEJwdGw4dGRLeVgxUExrMDhGcFJHTGdmVkJ4L05EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvcTFpV2wyZjBkeXRqb2NLUGhiZzVQZkJNN0o0RTkzUXlxTWYwZGdjdTJPeWlMRFlNdEV5NVo2T3BUZ3B2bzRXWmlZZURPWmZQVmZwNjZORWg4Q0NoZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk3MTU1ODUxMDQwNjo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDcxMjQ5MDEzMjI5MjQ6NDRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NzE1NTg1MTA0MDY6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjIxOTU0MlxufSIKfQ=="  // PUT your SESSION_ID
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
