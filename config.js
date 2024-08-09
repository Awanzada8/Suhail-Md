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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_17_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY2LFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgODksXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMzAsXG4gICAgICAgIDM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MixcbiAgICAgICAgODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNixcbiAgICAgICAgODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDksXG4gICAgICAgIDc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMjExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2LFxuICAgICAgICA4MixcbiAgICAgICAgMjM5LFxuICAgICAgICA1LFxuICAgICAgICA0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY1LFxuICAgICAgICA0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDE4MixcbiAgICAgICAgNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6SmJGMm1NalBIVWpub2NwY2Nld0libzdpaGVJTGlNbkxjZWM4SUdBRktzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2SmpCMmVDSFRBZURrQ1dNOWxzVUxRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ0NjEwY2ViLWFjMTItNGM2ZS05Y2U3LTRmZDFlZjUzZDFlM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDkxLFxuICAgICAgOTIsXG4gICAgICAxNjIsXG4gICAgICAxNjIsXG4gICAgICAxOCxcbiAgICAgIDExMSxcbiAgICAgIDEyNyxcbiAgICAgIDE0NSxcbiAgICAgIDE0NSxcbiAgICAgIDc5LFxuICAgICAgNTMsXG4gICAgICA0MCxcbiAgICAgIDEyMCxcbiAgICAgIDAsXG4gICAgICAxMjksXG4gICAgICAwLFxuICAgICAgMjQzLFxuICAgICAgMjQ4LFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDIxOSxcbiAgICAgIDE0MyxcbiAgICAgIDIzMyxcbiAgICAgIDIwMyxcbiAgICAgIDg3LFxuICAgICAgMzMsXG4gICAgICAxOTAsXG4gICAgICAxNzMsXG4gICAgICA3MSxcbiAgICAgIDExOCxcbiAgICAgIDQ2LFxuICAgICAgNixcbiAgICAgIDUzLFxuICAgICAgMTA2LFxuICAgICAgMjE5LFxuICAgICAgNTMsXG4gICAgICAxODQsXG4gICAgICAxOTQsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pUMHorWUJFUDNsMkxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVVlib2pzNGF4ZU9xR1lqOTBLYXpKcG03TnRWWnFKTFVOTTdDdURQVDhTYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4di8wZ3l6THdDUE1oaVhYK21uTnl2YW5PSUgzTWJoSEgyRFVVUXRteXE1VGRWMlFzTm0wc3EyVDBtbnNqczcrYWZIRkpyY1VFdDZNamJwSHhyU0NBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPTUdBYTNncnh6QzRwbWN0VTRGWkZVejdoeDJySkRMb3pMdUUwVTc5RzRMVFdqTlNsMnQreFI5V0JhZjRROXdoVHpwZkFGb0h6QkozSDVPU3ZQblREQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk3MTU4ODEwMTc2MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWVlbmFcIixcbiAgICBcImxpZFwiOiBcIjI2MTI4NDgyMjAwMzc2Mzo0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTcxNTg4MTAxNzYwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMyMTY2NDNcbn0iCn0="  // PUT your SESSION_ID
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
