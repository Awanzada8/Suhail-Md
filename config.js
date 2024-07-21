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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_52_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY2LFxuICAgICAgICA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTExLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1LFxuICAgICAgICAyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc2LFxuICAgICAgICA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICA2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ2hjSHc1RzB0WU10a1lKZDhCSzFkSkpac2k5ZlpQRE1FbGJ6WlgwQ3RHND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZnJfbnBKQTdSRGVrQVhwU1FIT1c5QVwiLFxuICBcInBob25lSWRcIjogXCI5NmQ1YjhmZS01M2VkLTQ1MDgtYjJlZi1kMGVjMTU5NTI2ZjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMjI1LFxuICAgICAgMjA5LFxuICAgICAgMjIwLFxuICAgICAgNTAsXG4gICAgICA2OCxcbiAgICAgIDEyOCxcbiAgICAgIDIwNCxcbiAgICAgIDIyOCxcbiAgICAgIDI0OCxcbiAgICAgIDI1MixcbiAgICAgIDE0MyxcbiAgICAgIDE2MSxcbiAgICAgIDIxNCxcbiAgICAgIDg4LFxuICAgICAgMTc5LFxuICAgICAgMTMyLFxuICAgICAgMTAzLFxuICAgICAgNjYsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDIwLFxuICAgICAgMTEyLFxuICAgICAgMTgxLFxuICAgICAgODcsXG4gICAgICAzMCxcbiAgICAgIDksXG4gICAgICA3NSxcbiAgICAgIDI0MCxcbiAgICAgIDY0LFxuICAgICAgMjQ4LFxuICAgICAgNzIsXG4gICAgICA1LFxuICAgICAgMTAwLFxuICAgICAgMjQ4LFxuICAgICAgMTU0LFxuICAgICAgMTk4LFxuICAgICAgMjE1LFxuICAgICAgMjA0LFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG02L1A4QkVOZnY4YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWQU9UcTU3VUdXUjR1OXN2REcvRkFBRjJtQldEWEV3MDdRQUFxaHg4OVNRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjViemIxUFdZdFllcnYvWExkUVR4VHE2MGFjUEgzdnluUU5rWDEvdDJ5VDdKcFJkUWFFU1BCb2hJc3IrbWEwdE9DVE5rQ2FmaEJmMStFdWtDWDFCREJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNEL1NwaHFHSlZSNjZ6bXJmRlFVQ0dHK0t2MTRQMWJUMWRYYzcwYzVGNkJ4K2tFcDVZcXRrK1lTeE9IL2JxczJBWDMwUHRMdTRyUkh5V0hYMGlJL0NnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTcxNTYzMTM5NzU4OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNTgyODk2OTU1NDA2OTo0NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk3MTU2MzEzOTc1ODo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1MzAzMzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHdm9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd2by5qc29uIjogIntcImtleURhdGFcIjpcIitXS2xidmZ0bTVFVU5NWnRNeGZzRHV3dE5rUjdBNmxGaHFkcjE0OGQzenM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTM2ODEyOTIxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1MzAzMzY0MzlcIn0iCn0="  // PUT your SESSION_ID

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
