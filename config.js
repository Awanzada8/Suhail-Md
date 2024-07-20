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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "971563139758";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_24_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3LFxuICAgICAgICA2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDUyLFxuICAgICAgICA1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICA2NyxcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDUwLFxuICAgICAgICA5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgMjEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICA2MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDksXG4gICAgICAgIDQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgMTgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhqc3FZVzRpTlBDczk3WWVZYktULzI2cU9hdC9kODNVeGkxZXpMdUYrY2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklpQW5mMEVYU1k2N3dmUlJWSEhvdkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjQ4OWYzZDAtNjNjNC00MTQyLWJlMDEtNmVjZTY3ZTYyZTFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICA4MSxcbiAgICAgIDg3LFxuICAgICAgMTQ1LFxuICAgICAgMjAyLFxuICAgICAgMTU4LFxuICAgICAgODcsXG4gICAgICA0NixcbiAgICAgIDIzMyxcbiAgICAgIDgsXG4gICAgICAyMzcsXG4gICAgICAyMzksXG4gICAgICAyMDAsXG4gICAgICAxMzEsXG4gICAgICA4OCxcbiAgICAgIDQ2LFxuICAgICAgMjI3LFxuICAgICAgNjIsXG4gICAgICAyMjMsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDEzOSxcbiAgICAgIDEwNSxcbiAgICAgIDU0LFxuICAgICAgMzUsXG4gICAgICA4MSxcbiAgICAgIDQyLFxuICAgICAgMjEsXG4gICAgICAxNDksXG4gICAgICAxNzQsXG4gICAgICA2OSxcbiAgICAgIDE1MyxcbiAgICAgIDE5LFxuICAgICAgMTIsXG4gICAgICAzOSxcbiAgICAgIDI1MixcbiAgICAgIDI0NSxcbiAgICAgIDIzMixcbiAgICAgIDE3OSxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQaTYvUDhCRUx2QzZyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZBT1RxNTdVR1dSNHU5c3ZERy9GQUFGMm1CV0RYRXcwN1FBQXFoeDg5U1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiejErdFpmcUx0ZllsSW5sazZOL2FacCtBckw3ZlF6VFM4ZlVoa2ZQY1h3cHJGM0t4aHp5eTN6SERSSVdQbW9odFNyZHZqcnNIZGNiR2hSWWEyeDZ0Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWY1TXBobUJXNGF0Tk84emUxMzcxRUNhcmkxVExhR0pwUGc4ZjcrSW9paFJpZmtPODFjYjdubGQ1MHZPTnl4N0c2V0RSUGhJWE14VGh2SWtNR3NBaWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NzE1NjMxMzk3NTg6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM1ODI4OTY5NTU0MDY5OjQ0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTcxNTYzMTM5NzU4OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQwOTg1NFxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝄟✮͢🦋⃟≛⃝ вιℓαℓ αωαиzα∂α𝄟-+971558510406",
  packname: process.env.PACK_NAME || "",
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
