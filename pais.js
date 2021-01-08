/*
RECODE SC ELAINABOT
SC UNTUK BELAJAR DAN MEMBAHAMI SC TOBZ
MAKASIH DAH MAU NYOBA BOT INI👻

HARAP UNTUK TIDAK MENJUAL SC INI KARNA INI BERSIFAT GRATIS

BIG THANKS FO TOBZ🥰

KALO ADA ERROR LAPOR KE wa.me/6285805609094
BTW W MASIH BLJR2
*/
const { decryptMedia } = require('@open-wa/wa-decrypt')
const bent = require('bent')
require('dotenv').config()
const fs = require('fs-extra')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const getYouTubeID = require('get-youtube-id')
const os = require('os')
const request = require('request')  
const get = require('got')
const speed = require('performance-now')
const fetch = require('node-fetch')
const { spawn, exec } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const google = require('google-it')
const translatte = require('translatte')
const { stdout } = require('process')
const translate = require('translatte')
const Math_js = require('mathjs');
const imageToBase64 = require('image-to-base64')
const moment = require('moment-timezone')



const { getStickerMaker } = require('./lib/ttp')
const quotedd = require('./lib/quote')
const color = require('./lib/color')
const urlShortener = require('./lib/shortener')
const { addFilter, isFiltered } = require('./lib/msgFilter')
//const cariKasar = require('./lib/kataKotor')


    
const {
    instagram,
    tiktok,
    facebook,
    smule,
    starmaker,
    twitter,
    joox
    } = require('./lib/downloader')




// LOAD FILE
let adminNumber = JSON.parse(fs.readFileSync('./database/admin.json'))
let preNumber = JSON.parse(fs.readFileSync('./database/premium.json'))
let banned = JSON.parse(fs.readFileSync('./database/banned.json'))
let left = JSON.parse(fs.readFileSync('./database/left.json'))
let muted = JSON.parse(fs.readFileSync('./database/muted.json'))
let setting = JSON.parse(fs.readFileSync('./database/setting.json'))
let msgLimit = JSON.parse(fs.readFileSync('./database/msgLimit.json'))
let nsfw_ = JSON.parse(fs.readFileSync('./database/nsfwz.json'))
let simi_ = JSON.parse(fs.readFileSync('./database/Simsimi.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let welkome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let pengirim = JSON.parse(fs.readFileSync('./database/user.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const _premium = JSON.parse(fs.readFileSync('./database/bot/premium.json'))
//const { limite, level, card, register, afke, reminder, premium } = require('../function')
const premium = JSON.parse(fs.readFileSync('./function/premium.js'))

const { 
    uploadImages, 
    custom
    } = require('./lib/fetcher')
const {
    stickerburn,
    stickerlight
    } = require('./lib/sticker')
const { 
    downloader,
    liriklagu,
    quotemaker,
    randomNimek,
    sleep,
    jadwalTv,
    processTime,
    nulis
    } = require('./lib/functions')

const { 
    menu
    } = require('./lib/help')
const { readFileSync } = require('fs-extra')

// PROTECT
/*let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let antibadword = JSON.parse(fs.readFileSync('./database/antibadword.json'))
let antisticker = JSON.parse(fs.readFileSync('./database/antisticker.json'))
let msgBadword = JSON.parse(fs.readFileSync('./database/msgBadword.json'))
let dbbadword = JSON.parse(fs.readFileSync('./database/katakasar.json'))
let badword = JSON.parse(fs.readFileSync('./database/badword.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let stickerspam = JSON.parse(fs.readFileSync('./database/stickerspam.json'))*/

let { 
    stylebot,
    ownerbot,
    namabot,
    versibot,
    prefix,
    limitCount,
    owner,
    memberLimit, 
    groupLimit,
    banChats,
    barbarkey,
    vhtearkey,
    zekapikey,
    hujanikey,
    melodikey,
    restartState: isRestart,
    mtc: mtcState
    } = setting


let state = {
    status: () => {
        if(banChats){
            return 'Nonaktif'
        }else if(mtcState){
            return 'Nonaktif'
        }else if(!mtcState){
            return 'Aktif'
        }else{
            return 'Aktif'
        }
    }
}

var timeStart = Date.now() / 1000
moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = pais = async (pais, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, author, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const argx = commands.toLowerCase()
        const args =  commands.split(' ')
        const command = commands.toLowerCase().split(' ')[0] || ''

        global.prefix
        
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const botNumber = await pais.getHostNumber()
        const blockNumber = await pais.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await pais.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const SN = GenerateSerialNumber("000000000000000000000000")

        /*const isBanned = banned.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const isSimi = isGroupMsg ? simi_.includes(chat.id) : false*/
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        const url = args.length !== 0 ? args[0] : ''

        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt')
        const isQuotedFile = quotedMsg && quotedMsg.type === 'document'

        //const isBadword = badword.includes(chatId)
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const arg = body.substring(body.indexOf(' ') + 1)
        //const isKasar = await cariKasar(chats)
        //const GroupLinkDetector = antilink.includes(chatId)
        //const AntiStickerSpam = antisticker.includes(chatId)
        const isPrivate = sender.id === chat.contact.id
        const stickermsg = message.type === 'sticker'
        const isCmd = command.startsWith(prefix)
        
        //const tms = (Date.now() / 1000) - (timeStart);
       // const cts = waktu(tms)

        const serial = sender.id
        const isAdmin = adminNumber.includes(sender.id)
        const ownerNumber = owner
        const isOwner = ownerNumber.includes(sender.id)
        const isPre = preNumber.includes(serial)

        const tms = (Date.now() / 1000) - (timeStart);
        const cts = waktu(tms)

        // Automate
        premium.expiredCheck(_premium)

        /*********** FUNTIONS ***********/
        const addAfk = (nom, time, alasan) => {
            let obj = {id: `${nom}`, time: `${time}`, alasan: `${alasan}`}
            afk.push(obj)
            fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
          
        }

        const getAfk = (nom) => {
            let isAfk = false
            Object.keys(afk).forEach((i) => {
                if (afk[i].id === nom) {
                    isAfk = true
                }
            })
            return isAfk
        }
        if (isGroupMsg) {
            const checking = getAfk(sender.id)
            const jirafk = JSON.parse(fs.readFileSync('./database/afk.json'))
        
            for (let ment of mentionedJidList) {

                for(let af of jirafk){
                    if(af.id === ment){
                        let alasan = af.alasan
                        let time = af.time

                if (getAfk(ment)) {
                    await pais.sendTextWithMentions(from, `◩ @${af.id.replace(/[@c.us]/g, '')}Sedang AFK\n├─ ❏Alasan : ${alasan}\n└─ ❏Dari : ${time}`, id)
                }
            }}
        }
            if (checking) {
                afk.splice(sender.id, 1)
                fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
                await pais.sendTextWithMentions(from, `@${sender.id.replace(/[@c.us]/g, '')} Sudah tidak AFK`, id)
            }
        }
        const isAfkOn = getAfk(sender.id)

        const rate = [
            '100%',
            '95%',
            '90%',
            '85%',
            '80%',
            '75%',
            '70%',
            '65%',
            '60%',
            '55%',
            '50%',
            '45%',
            '40%',
            '35%',
            '30%',
            '25%',
            '20%',
            '15%',
            '10%',
            '5%',
            '0.1%'
            ]
            
        const mess = {
            wait: `────❉ ${stylebot} 𝘽𝙤𝙩 ❉───\n\n*Sabar sedang di proses⌛*`,
            sabar: `_*Harap Sabar, Permintaan Sedang Di Proses!⌛*_`,
            error: {
                St: `[❗] Kirim gambar dengan caption *${prefix}sticker* atau tag gambar yang sudah dikirim`,
                Ti: `[❗] Replay sticker dengan caption *${prefix}stickertoimg* atau tag sticker yang sudah dikirim`,
                Qm: '[❗] Error pak🥺, mungkin themenya tidak tersedia!',
                Yt3: '[❗] Error pak🥺, tidak dapat meng konversi ke mp3!',
                Yt4: '[❗] Error pak🥺, mungkin error di sebabkan oleh sistem.',
                Ig: '[❗] Error pak🥺, mungkin karena akunnya private',
                Ki: '[❗] Pak, Bot gak bisa ngeluarin admin Gc :v!',
                Sp: '[❗] Betty tidak bisa mengeluarkan Admin',
                Ow: '[❗] Betty tidak bisa mengeluarkan Owner',
                Bk: '[❗] Betty tidak bisa memblockir Owner',
                Ad: '[❗] Gak bisa di invite mungkin dia takut di culik😆',
                Iv: '[❗] Error!, Lapor ke admin kalo error!'
            }
        }

        const tutmtor = `https://i.ibb.co/6ynDpHQ/f2faa0b5850a.jpg`
        const fotoerror = `https://i.ibb.co/tCfb0Nz/fccf024fbbab.jpg`

        if (isCmd && !isGroupMsg) {console.log(color('[Nyot]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isCmd && isGroupMsg) {console.log(color('[Nyot]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))}
        
        
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }
        //Funtion by TOBZ
        function waktu(seconds) { // TOBZ
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);
            var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }
        // Serial Number Generator
        function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }

        // Serial Number Generator
        function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }
        // Function by Bang Gimenz/Ristiyanto
        var nmr = sender.id

        var obj = pengirim.some((val) => {
            return val.id === nmr
        })
        var cekage = pengirim.some((val) => {
            return val.id === nmr && val.umur >= 18
        })


        function isReg(obj){
            if (obj === true){
                return false
            } else {     
                return pais.reply(from, `Kamu belum terdaftar sebagai teman ${namabot} BOT\nuntuk mendaftar kirim: \n\n${prefix}daftar nama&umur&Asal\n\ncontoh format: ${prefix}daftar ${pushname}&10&Jakarta\n\ncukup gunakan nama depan dan tulisan yang biasa\n\nIsi data dengan jujur, jika terdapat pemalsuan nama/umur maka admin akan memblock nomor tersebut.`, id) //if user is not registered
            }
        }

        function cekumur(obj){
            if (obj === true){
                return false
            } else {
                return pais.reply(from, `Kamu belum cukup umur untuk mengunakan bot ini, min 18 tahun\n\nKamu bisa mendaftar ulang dengan cara donasi terlebih dahulu, bales ${prefix}donasi`, id) //if user is not registered
            }
        }
        const isMuted = (chatId) => {
            if(muted.includes(chatId)){
              return false
          }else{
              return true
              }
          }
  
          function banChat () {
              if(banChats == true) {
              return false
          }else{
              return true
              }
          }
          function kekpos(string) {
            return '```' + string + '```'
        }
        function isStickerMsg(id){
            if (isAdmin) {return false;}
            let found = false;
            for (let i of stickerspam){
            if(i.id === id){
            if (i.msg >= 12) {
            found === true 
            pais.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 」*\nKamu telah SPAM STICKER di grup, kamu akan di kick otomatis oleh ${namabot}`, id).then(() => {
                pais.removeParticipant(groupId, id)
            })
                return true;
            }else if(i.msg >= 12){
            found === true
            pais.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 」*\nKamu terdeteksi spam sticker!\nMohon tidak spam 5 sticker lagi atau nomor akan di kick oleh ${namabot}!`, id)
            return true
            }else{
            found === true
            return false;
                }   
                    }
            }
            if (found === false){
            let obj = {id: `${id}`, msg:1};
            stickerspam.push(obj);
            fs.writeFileSync('./database/stickerspam.json',JSON.stringify(stickerspam));
                    return false;
                }  
            }
        function addStickerCount(id){
            if (isAdmin) {return;}
            var found = false
            Object.keys(stickerspam).forEach((i) => {
                if(stickerspam[i].id == id){
                    found = i
                }
            })
            if (found !== false) {
                stickerspam[found].msg += 1;
                fs.writeFileSync('./database/stickerspam.json',JSON.stringify(stickerspam));
            }
        }

        function isBadwordMsg(id){
            if (isAdmin) {return false;}
            let kasar = false;
            for (let i of msgBadword){
                if(i.id === id){
                    let msg = i.msg
                    if (msg >= 1) { // 1X BADWORD AKAN TERKENA KICK
                        kasar === true 
                        pais.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗𝗪𝗢𝗥𝗗 」*\nPeringatan! 2x lagi berkata kasar, ${namabot} akan kick kamu dari grup!`, id)
                        }
                    if (msg >= 3) { // 3X BADWORD AKAN TERKENA KICK
                        kasar === true 
                        pais.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗𝗪𝗢𝗥𝗗 」*\nKamu telah berkata kasar di grup ini, kamu akan di kick otomatis oleh ${namabot}!`, id).then(() => {
                            pais.removeParticipant(groupId, id)
                        })
                        return true;
                    }else{
                        kasar === true
                        return false;
                    }   
                }
            }
            if (kasar === false){
                let obj = {id: `${id}`, msg:1};
                msgBadword.push(obj);
                fs.writeFileSync('./database/msgBadword.json',JSON.stringify(msgBadword));
                return false;
            }  
        }
        function addBadCount(id){
            if (isAdmin) {return;}
            var kasar = false
            Object.keys(msgBadword).forEach((i) => {
                if(msgBadword[i].id == id){
                    kasar = i
                }
            })
            if (kasar !== false) {
                msgBadword[kasar].msg += 1;
                fs.writeFileSync('./database/msgBadword.json',JSON.stringify(msgBadword));
            }
        }

        function isMsgLimit(id){
                    if (isAdmin, isPre) {return false;}
                    let found = false;
                    for (let i of msgLimit){
                        if(i.id === id){
                            if (i.msg >= 8) {
                                found === true 
                                pais.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 」*\nMaaf, akun anda kami blok karena SPAM, dan tidak bisa di UNBLOK!`, id)
                                pais.contactBlock(id)
                                banned.push(id)
                                fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
                                return true;
                            }else if(i.msg >= 8){
                                found === true
                                pais.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 」*\nNomor anda terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!`, id)
                                return true
                            }else{
                                found === true
                                return false;
                            }   
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, msg:1};
                        msgLimit.push(obj);
                        fs.writeFileSync('./database/msgLimit.json',JSON.stringify(msgLimit));
                        return false;
                    }  
                }
        function addMsgLimit(id){
                    if (isAdmin) {return;}
                    var found = false
                    Object.keys(msgLimit).forEach((i) => {
                        if(msgLimit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        msgLimit[found].msg += 1;
                        fs.writeFileSync('./database/msgLimit.json',JSON.stringify(msgLimit));
                    }
                }
        function isLimit(id){
                    if (isAdmin, isPre) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                pais.reply(from, `Perintah BOT anda sudah mencapai batas, coba esok hari :)`, id)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./database/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
        function limitAdd (id) {
                    if (isAdmin, isPre) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./database/limit.json',JSON.stringify(limit));
                    }
                }
        
                
        switch(command) {
        case prefix+'owner':
        case prefix+'creator':
            pais.sendContact(chatId, `6285805609094@c.us`, 'Pais')
            pais.reply(from, 'Itu nomor si pais, Chat dia jika penting saja!, Dan Just get to the point!', id)
            break
        /*********PREMIUM*************/
        case prefix + 'premium':
                if (!isOwner) return await pais.reply(from, ind.ownerOnly(), id)
                if (args.length !== 3) return pais.reply(from, `Format Salah!`, id)
                if (ar[1] === 'add') {
                    if (mentionedJidList.length == 0) {
                        for (let benet of mentionedJidList) {
                            if (benet === botNumber) return await pais.reply(from, `Format salah`, id)
                            premium.addPremiumUser(benet, args[2], _premium)
                            await pais.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${benet}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                        }
                    } else {
                        premium.addPremiumUser(args[1] + '@c.us', args[2], _premium)
                        await pais.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@c.us\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                    }
                } else if (ar[1] === 'del') {
                    if (mentionedJidList.length == 0) {
                        if (mentionedJidList[0] === botNumber) return await pais.reply(from, ind.wrongFormat(), id)
                        _premium.splice(premium.getPremiumPosition(sender.id, _premium), 1)
                        fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                        await pais.reply(from, `Telah di hapus`, id)
                    } else {
                        _premium.splice(premium.getPremiumPosition(args[1] + '@c.us', _premium), 1)
                        fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                        await pais.reply(from, `Telah di hapus`, id)
                    }
                } else {
                    await pais.reply(from, `Format salah!`, id)
                }
            break
/*-------------------CASE AFK-------------------*/
        case prefix +'afk':{
        if(isReg(obj)) return
            const nom = sender.id
            const alasan = body.slice(5)
            addAfk(nom, time, alasan)
            var ceki = nom
            if(ceki){
            var obj = afk.some((val) => {
            return val.id === ceki
            })
            if (obj === true){
            var found = false
            Object.keys(afk).forEach((i) => {
            if(afk[i].id == nom){
            found = i
            }
            })
            if (found !== false) {
            afk[found].alasan = alasan;
            const updated = afk[found]
            const result = (`@${nom.replace(/[@c.us]/g, '')} Sekarang AFK!`)
            console.log(afk[found])
           fs.writeFileSync('./database/afk.json',JSON.stringify(afk));
           pais.sendTextWithMentions(from, result)
    }
} else {
    afk.push(afek)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
        pais.sendTextWithMentions(from, `@${nom.replace(/[@c.us]/g, '')} Sekarang AFK`)
}
    }}
    break
/*-----------------------DAFTAR BY BANG RISTIYANTO--------------------*/
        case prefix +'daftar':  //Udh w modif sikit
            const argsl = body.trim().substring(body.indexOf(' ') + 1)
            if (argsl.length >= 2) {
            const no = sender.id
            const name = argsl.split('&')[0]
            const mur = argsl.split('&')[1]
            const askot = argsl.split('&')[2]
            if(isNaN(mur)) return await pais.reply(from, 'Umur harus berupa angka!!', id)
            if(mur >= 40) return await pais.reply(from, 'Kamu terlalu tua, kembali lagi ke masa muda untuk menggunakan bot', id)
            if (askot.length > 10) return pais.reply(from, 'Maksimal Sasal kota 10 Huruf!', id)
            const jenenge = name.replace(' ','')
            var cek = no
            var obj = pengirim.some((val) => {
            return val.id === cek
            })
            if (obj === true){
            return pais.reply(from, 'kamu sudah terdaftar, Jika inggin mendaftar ulang chat wa.me/6285805609094', id) //if number already exists on database
            } else {
            const mentah = await pais.checkNumberStatus(no) //VALIDATE WHATSAPP NUMBER
            const fotoprofile = await pais.getProfilePicFromServer(sender.id)
            const msg = kekpos(`Pendaftaran berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
╭──「 DAFTAR 」──
│
│+ Nama : ${jenenge}
│
│+ wa.me/${no.replace('@c.us', '')}
│
│+ Umur : ${mur}
│
│+ Asal : ${askot}
│
╰────────────────
Terima kasih telah melakukan registrasi.
Total user terdaftar : ${pengirim.length}
Ketik ${prefix}menu untuk mencoba BOT`)
            const hasil = mentah.canReceiveMessage ? msg : false
            if (!hasil) return pais.reply(from, 'Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]', id) 
                {
            const register = ({
            id: mentah.id._serialized,
            nama: jenenge,
            umur: mur,  
            asal: askot,
            nouser : pengirim.length
            })
            pengirim.push(register)
                            
            fs.writeFileSync('./database/user.json', JSON.stringify(pengirim))
            if (fotoprofile == undefined) {
                var pfpv = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
            } else {
                var pfpv = fotoprofile
            } 
            pais.sendFileFromUrl(from, pfpv, 'profile.jpg', hasil, id)
            }{
            let obj = {id: `${serial}`, limit:1};
            limit.push(obj);
            fs.writeFileSync('./database/limit.json',JSON.stringify(limit, 1))
            }
            }
            } else {
            await pais.reply(from, `Format yang kamu masukkan salah, kirim ${prefix}daftar Name&Age&From\n\ncontoh format: ${prefix}daftar ${pushname}&10&Pku\n\ncukup gunakan nama depan/panggilan saja`, id) //if user is not registered
            }
            break
/*-------------------------------------ON/OFF-------------------------------------*/
        case prefix+'left':
            if(isReg(obj)) return 
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return pais.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                left.push(chat.id)
                fs.writeFileSync('./database/left.json', JSON.stringify(left))
                pais.reply(from, 'Fitur left berhasil di aktifkan di group ini!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                left.splice(chat.id, 1)
                fs.writeFileSync('./database/left.json', JSON.stringify(left))
                pais.reply(from, 'Fitur left berhasil di nonaktifkan di group ini!', id)
            } else {
                pais.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case prefix+'welcome':
            if(isReg(obj)) return 
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return pais.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                welkome.push(chat.id)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(welkome))
                pais.reply(from, 'Fitur welcome berhasil di aktifkan di group ini!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                welkome.splice(chat.id, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(welkome))
                pais.reply(from, 'Fitur welcome berhasil di nonaktifkan di group ini!', id)
            } else {
                pais.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case prefix+'antilink':
            if(isReg(obj)) return 
            if (!isGroupMsg) return pais.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return pais.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return pais.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antilink.includes(chatId);
                if(cek){
                    return pais.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Sudah Aktif`, id) //if number already exists on database
                } else {
                    antilink.push(chatId)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                    pais.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Aktif`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antilink.includes(chatId);
                if(!cek){
                    return pais.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Sudah DiNonaktif`, id) //if number already exists on database
                } else {
                    let nixx = antilink.indexOf(chatId)
                    antilink.splice(nixx, 1)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                    pais.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Nonaktif`, id)
                }
            } else {
                pais.reply(from, `Pilih enable atau disable udin!`, id)
            }
            break
/*-----------------------------------MENU GROUP-----------------------------------*/
        //Once again thanks to Tobz
        case prefix+'ownergroup':
            if(isReg(obj)) return 
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const Owner_ = chat.groupMetadata.owner
            await pais.sendTextWithMentions(from, `Owner Group : @${Owner_}`)
            break
        case prefix+'delete':
            if(isReg(obj)) return 
            if (!isGroupMsg) return pais.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return pais.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!quotedMsg) return pais.reply(from, `Salah!!, kirim perintah *${prefix}delete [tagpesan bot]*`, id)
            if (!quotedMsgObj.fromMe) return pais.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            pais.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case prefix+'odelete':
            if(isReg(obj)) return 
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return pais.reply(from, `Perintah ini hanya untuk Admin ${namabot}`, id)
            if (!quotedMsg) return pais.reply(from, `Salah!, kirim perintah *${prefix}delete [tagpesanbot]*`, id)
            if (!quotedMsgObj.fromMe) return pais.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            pais.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case prefix+'nyimak':
            if(isReg(obj)) return 
            if (!isGroupMsg) return pais.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)                
            if (!quotedMsg) return pais.reply(from, `Tolong Reply Pesan ${namabot}`, id)
            if (!quotedMsgObj.fromMe) return pais.reply(from, `Tolong Reply Pesan ${namabot}`, id)
            try {
                const reader = await pais.getMessageReaders(quotedMsgObj.id)
                let list = ''
                for (let pembaca of reader) {
                list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
            }
                pais.sendTextWithMentions(from, `Ciee, Ngeread...\n${list}`)
            } catch(err) {
                console.log(err)
                pais.reply(from, `Maaf, Belum Ada Yang Membaca Pesan ${namabot} atau Mereka Menonaktifkan Read Receipts`, id)    
            }
            break
        case prefix+'setgroupname':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return pais.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return pais.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const namagrup = body.slice(14)
            let sebelum = chat.groupMetadata.formattedName
            let halaman = global.page ? global.page : await pais.getPage()
            await halaman.evaluate((chatId, subject) =>
            Store.WapQuery.changeSubject(chatId, subject),groupId, `${namagrup}`)
            pais.sendTextWithMentions(from, `Nama group telah diubah oleh admin @${sender.id.replace('@c.us','')}\n\n• Before: ${sebelum}\n• After: ${namagrup}`)
            break
        case prefix+'setgroupicon':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return pais.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return pais.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await pais.setGroupIcon(from, imageBase64)
                pais.sendTextWithMentions(from, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await pais.setGroupIcon(from, imageBase64)
                pais.sendTextWithMentions(from, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else {
                pais.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}setgroupicon`, id)
            }
            break
        case prefix+'otagall': // Untuk owner aja
        case prefix+'bangun':
            if(isReg(obj))
            if (!isGroupMsg) return pais.reply(from, 'Umtuk di gc aja mimin!', id)
            if (!isOwner) return pais.reply(from, `Perintah ini hanya untuk ${ownerbot}`, id)
            const groupMek = await pais.getGroupMembers(groupId)
            let heho = '╭──❉ *Bangun Coy* ❉──\n'
            for (let i = 0; i < groupMek.length; i++) {
                heho += '│➥'
                heho += ` @${groupMek[i].id.replace(/@c.us/g, '')}\n`
            }
            heho += `╰──「 ${stylebot} 𝘽𝙤𝙩 」   `
            await sleep(1000)
            await pais.sendTextWithMentions(from, heho)
            break
        case prefix+'tagall': // FOR GROUP ADMINS
        case prefix+'mentionall':
            if(isReg(obj)) return 
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            const groupMem = await pais.getGroupMembers(groupId)
            let hehe = '╭──❉ *Bangun Coy* ❉──\n'
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '│➥'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += `╰──「 ${stylebot} 𝘽𝙤𝙩 」`
            await sleep(2000)
            await pais.sendTextWithMentions(from, hehe)
            break
        case prefix+'join':
            if (args.length === 1) return pais.reply(from, 'Hanya Owner yang bisa memasukan Bot ke dalam Grup!', id)
            if (!isOwner) return pais.reply(from, `Perintah ini hanya untuk Owner ${namabot}`, id)
            const link = body.slice(6)
            const tGr = await pais.getAllGroups()
            const minMem = 5
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await pais.inviteInfo(link)
            if (!isLink) return pais.reply(from, 'Ini link? 👊🤬', id)
            if (tGr.length > 256) return pais.reply(from, 'Maaf jumlah group sudah maksimal!', id)
            if (check.size < minMem) return pais.reply(from, 'Member group tidak melebihi 5, bot tidak bisa masuk', id)
            if (check.status === 200) {
                await pais.joinGroupViaLink(link).then(() => pais.reply(from, 'Bot akan segera masuk!'))
            } else {
                pais.reply(from, 'Link group tidak valid!', id)
            }
            break
            case prefix+'ekickall':
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return pais.reply(from, `Perintah ini hanya untuk Owner ${namabot}`, id)
            if (!isBotGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMem = await pais.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (ownerNumber.includes(allMem[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await pais.removeParticipant(groupId, allMem[i].id)
                }
            }
            pais.reply(from, 'Success kick all member', id)
            break
        case prefix+'okickall':
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return pais.reply(from, `Perintah ini hanya untuk Admin ${namabot}`, id)
            if (!isBotGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMeq = await pais.getGroupMembers(groupId)
            for (let i = 0; i < allMeq.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMeq[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await pais.removeParticipant(groupId, allMeq[i].id)
                }
            }
            pais.reply(from, 'Succes kick all member', id)
            break
        case prefix+'kickall':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return pais.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner group', id)
            if (!isBotGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMek = await pais.getGroupMembers(groupId)
            for (let i = 0; i < allMek.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMek[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await pais.removeParticipant(groupId, allMek[i].id)
                }
            }
            pais.reply(from, 'Success kick all member', id)
            break
        case prefix+'leaveall':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isOwner) return pais.reply(from, `Perintah ini hanya untuk Owner ${namabot}`, id)
            const allChats = await pais.getAllChatIds()
            const allGroups = await pais.getAllGroups()
            for (let gclist of allGroups) {
                await pais.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChats.length}`)
                await pais.leaveGroup(gclist.contact.id)
            }
            pais.reply(from, 'Succes leave all group!', id)
            break
        case prefix+'clearall':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isOwner) return pais.reply(from, `Perintah ini hanya untuk Owner ${namabot}`, id)
            const allChatz = await pais.getAllChats()
            for (let dchat of allChatz) {
                await pais.deleteChat(dchat.id)
            }
            pais.reply(from, 'Succes clear all chat!', id)
            break
        case prefix+'oadd':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            const orang = args[1]
            if (!isGroupMsg) return pais.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return pais.reply(from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}add* 628xx`, id)
            if (!isOwner, !isAdmin) return pais.reply(from, `Perintah ini hanya untuk Admin ${namabot}`, id)
            if (!isBotGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await pais.addParticipant(from,`${orang}@c.us`)
            } catch {
                pais.reply(from, mess.error.Ad, id)
            }
            break
        case prefix+'add':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            const orgh = body.slice(5)
            if (!isGroupMsg) return pais.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return pais.reply(from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}add* 628xxx`, id)
            if (!isGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await pais.addParticipant(from,`${orgh}@c.us`)
            } catch {
                pais.reply(from, mess.error.Ad, id)
            }
            break
        case prefix+'okick':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return pais.reply(from, `Perintah ini hanya untuk Owner ${namabot}`, id)
            if (!isBotGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return pais.reply(from, `Untuk menggunakan Perintah ini, kirim perintah *${prefix}okick* @tagmember`, id)
            await pais.sendText(from, `Perintah Owner diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, ownerNumber).includes(mentionedJidList[i])) return pais.reply(from, mess.error.Sp, id)
                await pais.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case prefix+'kick':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return pais.reply(from, `Untuk menggunakan Perintah ini, kirim perintah *${prefix}kick* @tagmember`, id)
            await pais.sendText(from, `Perintah diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, groupAdmins).includes(mentionedJidList[i])) return pais.reply(from, mess.error.Sp, id)
                await pais.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case prefix+'ocabut':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return pais.reply(from, `Perintah ini hanya untuk Admin ${namabot}`, id)
            await pais.sendText(from,`${namabot} DIPERINTAHKAN KELUAR OLEH OWNER!!`).then(() => pais.leaveGroup(groupId))
            break
        case prefix+'cabut':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return pais.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            await pais.sendText(from,'Sayonara').then(() => pais.leaveGroup(groupId))
            break
        case prefix+'opromote':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return pais.reply(from, `Perintah ini hanya untuk Admin ${namabot}`, id)
            if (!isBotGroupAdmins) return pais.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return pais.reply(from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}promote* @tagmember`, id)
            if (mentionedJidList.length >= 2) return pais.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return pais.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await pais.promoteParticipant(groupId, mentionedJidList[0])
            await pais.sendTextWithMentions(from, `Perintah Owner diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case prefix+'promote':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return pais.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return pais.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return pais.reply(from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}promote* @tagmember`, id)
            if (mentionedJidList.length >= 2) return pais.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return pais.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await pais.promoteParticipant(groupId, mentionedJidList[0])
            await pais.sendTextWithMentions(from, `Perintah diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case prefix+'odemote':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return pais.reply(from, `Perintah ini hanya untuk Admin ${namabot}`, id)
            if (!isBotGroupAdmins) return pais.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return pais.reply(from, `Untuk menggunakan fitur ini, kirim perintah *${prefix}demote* @tagadmin`, id)
            if (mentionedJidList.length >= 2) return pais.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return pais.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await pais.demoteParticipant(groupId, mentionedJidList[0])
            await pais.sendTextWithMentions(from, `Perintah Owner diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case prefix+'demote':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return pais.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return pais.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return pais.reply(from, `'Untuk menggunakan fitur ini, kirim perintah *${prefix}demote* @tagadmin`, id)
            if (mentionedJidList.length >= 2) return pais.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return pais.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await pais.demoteParticipant(groupId, mentionedJidList[0])
            await pais.sendTextWithMentions(from, `Perintah diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break

/*--------------------------------------OWNER MENU--------------------------------------------*/
        case 'cekprefix':
        case 'prefix':  
            pais.reply(from, `Prefix ${namabot} *「 ${prefix} 」*`, id)
            break
        case prefix + 'setprefix':
            if(!isOwner) return pais.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ${namabot}!`, id)
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}prefix [ NEW PREFIX ]*`, id)
            const prefa = body.slice(11)
            setting.prefix = `${prefa}`
            prefix = `${prefa}`
            fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
            pais.sendText(from, `Berhasil Mengganti Prefix Ke *「* ${prefa} *」*`)
            break
        case prefix + 'setowner':
            if(!isOwner) return pais.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ${namabot}!`, id)
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}setowner Pais*`, id)
            const ownerbot1 = body.slice(10)
            setting.ownerbot = `${ownerbot1}`
            ownerbot = `${ownerbot1}`
            fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
            pais.sendText(from, `Berhasil Mengganti Nama owner Menjadi *「 ${ownerbot1} 」*`)
            break
        case prefix+'getss':        
            if (!isOwner) return pais.reply(from, `Perintah ini hanya untuk Owner ${namabot}`, id)            
            const sesPic = await pais.getSnapshot()
            pais.sendFile(from, sesPic, 'session.png', `Nih ${ownerbot}`, id)
            break
        case prefix+'setname':
            if (!isOwner) return pais.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ${namabot}!`, id)
                const setnem = body.slice(9)
                await pais.setMyName(setnem)
                pais.sendTextWithMentions(from, `Makasih Nama Barunya @${sender.id.replace('@c.us','')} 😘`)
            break
        case prefix+'setstatus':
            if (!isOwner) return pais.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ${namabot}!`, id)
                const setstat = body.slice(11)
                await pais.setMyStatus(setstat)
                pais.sendTextWithMentions(from, `Makasih Status Barunya @${sender.id.replace('@c.us','')} 😘`)
            break
        case prefix+'setpic':
            if (!isOwner) return pais.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ${namabot}!`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await pais.setProfilePic(imageBase64)
                pais.sendTextWithMentions(`Makasih @${sender.id.replace('@c.us','')} Foto Profilenya 😘`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await pais.setProfilePic(imageBase64)
                pais.sendTextWithMentions(from, `Makasih @${sender.id.replace('@c.us','')} Foto Profilenya 😘`)
            } else {
                pais.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}setprofilepic`, id)
            }
            break
        case prefix+'getpic':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            const texnugm = body.slice(8)
            const getnomber =  await pais.checkNumberStatus(texnugm)
            const useriq = getnomber.id.replace('@','') + '@c.us'
                try {
                    var jnck = await pais.getProfilePicFromServer(useriq)

                    pais.sendFileFromUrl(from, jnck, `awok.jpg`)
                } catch {
                    pais.reply(from, `Tidak Ada Foto Profile!`, id)
                }
            break
        case prefix+'block':
            if (!isOwner) return pais.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ${namabot}!`, id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await pais.contactBlock(unblock).then((a)=>{
                    console.log(a)
                    pais.reply(from, `Success block ${args[1]}!`, id)
                })
            }
            break
        case prefix+'unblock':
            if (!isOwner) return pais.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner ${namabot}!`, id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let pais = `${mentionedJidList[i]}`
                await pais.contactUnblock(unblock).then((a)=>{
                    console.log(a)
                    pais.reply(from, `Success unblok ${args[1]}!`, id)
                })
            } 
            break
        case prefix+'ban':
            if (!isAdmin) return pais.reply(from, `Perintah ini hanya bisa di gunakan oleh admin ${namabot}!`, id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber).includes(mentionedJidList[i])) return pais.reply(from,`Maaf ${pushname}, Kamu tidak bisa banned Admin ${namabot}!`, id)
                banned.push(mentionedJidList[i])
                fs.writeFileSync('./lib/banned.json', JSON.stringify(banned))
                pais.reply(from, `Succes ban target!`,id)
            }
            break
        case prefix+'unban':
            if (!isAdmin) return pais.reply(from, `Perintah ini hanya bisa di gunakan oleh admin ${namabot}!`, id)
                let inz = banned.indexOf(mentionedJidList[0])
                banned.splice(inz, 1)
                fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
                pais.reply(from, 'Unbanned User!', id)
            break
        case prefix+'listbanned':
            let bened = `This is list of banned number\nTotal : ${banned.length}\n`
            for (let i of banned) {
                bened += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await pais.reply(from, bened, id)
            break
        case prefix+'listblock':
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await pais.reply(from, hih, id)
            break
        case prefix+'listgroup':
            pais.getAllGroups().then((res) => {
            let berhitung1 = 1
            let gc = `*This is list of group* :\n`
            for (let i = 0; i < res.length; i++) {
                gc += `\n---------------\n\n*No : ${i+1}*\n*Nama* : ${res[i].name}\n*Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n*Tidak Spam* : ${res[i].notSpam}\n`
            }
            pais.reply(from, gc, id)
            })
            break
        case prefix+'restart': // WORK IF YOU RUN USING PM2
            if(isOwner){
                pais.sendText(from, '*[WARN]* Restarting ...')
                setting.restartState = true
                setting.restartId = chatId
                var obj = []
                //fs.writeFileSync('./lib/setting.json', JSON.stringify(obj, null,2));
                fs.writeFileSync('./database/limit.json', JSON.stringify(obj));
                fs.writeFileSync('./database/muted.json', JSON.stringify(obj));
                fs.writeFileSync('./database/msgLimit.json', JSON.stringify(obj));
                fs.writeFileSync('./database/banned.json', JSON.stringify(obj));
                fs.writeFileSync('./database/welcome.json', JSON.stringify(obj));
                fs.writeFileSync('./database/left.json', JSON.stringify(obj));
                fs.writeFileSync('./database/Simsimi.json', JSON.stringify(obj));
                fs.writeFileSync('./database/nsfwz.json', JSON.stringify(obj));
                const spawn = require('child_process').exec;
                function os_func() {
                    this.execCommand = function (command) {
                        return new Promise((resolve, reject)=> {
                        spawn(command, (error, stdout, stderr) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            resolve(stdout)
                        });
                    })
                }}
                var oz = new os_func();
                oz.execCommand('pm2 restart index').then(res=> {
                }).catch(err=> {
                    console.log("os >>>", err);
                })
            }
            break
/*---------------------------------STICKER MENU---------------------------------*/
            case prefix+'emojisticker':
            case prefix+'emojistiker':
            case prefix+'emo':
                if(isReg(obj)) return
                if(isLimit(serial)) return
                if (args.length !== 2) return pais.reply(from, mess.error.Fo, id)
                const emoji = emojiUnicode(args[1])
                await pais.reply(from, mess.wait, id)
                console.log('Creating emoji code for =>', emoji)
                await pais.sendStickerfromUrl(from, `https://api.vhtear.com/emojitopng?code=${emoji}&apikey=${vhtearkey}`)
                .then(async () => {
                await pais.reply(from, 'Nih..', id)
                console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                limitAdd(serial)
                })
                .catch(async (err) => {
                console.error(err)
                await pais.reply(from, 'Emoji itu tidak di dukung!', id)
                })
                break
        case prefix+'sticker':
        case prefix+'stiker':
            if(isReg(obj)) return 
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await pais.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await pais.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await pais.sendStickerfromUrl(from, url, 'crot',{ method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    pais.reply(from, mess.error.Iv, id)
                }
            } else {
                    pais.reply(from, mess.error.St, id)
            }
            break
        case prefix+'ttp':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}ttp [ Teks ]*, contoh *${prefix}tt Pais Gans*`, id)
            const ttp = await axios.get(`https://mhankbarbars.herokuapp.com/api/text2image?text=${body.slice(5)}&apiKey=${barbarkey}`)
            const ttps = ttp.data
            pais.sendStickerfromUrl(from, ttps.result, id)
            break
        case prefix+'ttos':
            if(isReg(obj)) return 
            if (isLimit(serial)) return pais.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis.`, id)
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}ttos [ Teks ]*, contoh *${prefix}ttos ${namabot}*`, id)
            const ttp2t = body.slice(6)
            const lttp2 = ["Orange","White","Green","Black","Purple","Red","Yellow","Blue","Navy","Grey","Magenta","Brown","Gold"]
            const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
            await pais.sendStickerfromUrl(from, `https://api.vhtear.com/textmaker?text=${ttp2t}&warna=${rttp2}&apikey=${vhtearkey}`)
            break
        case prefix+'ttg':
            if(isReg(obj)) return 
            if (!isGroupMsg) return pais.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return pais.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis.`, id)
            try {
                if (quotedMsgObj == null) {
                    if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}ttg [ Teks ]*, contoh *${prefix}ttg aku bukan boneka*`, id)
                        await pais.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${body.slice(5)}&apikey=${vhtearkey}`)
                        limitAdd(serial)
                } else {
                    await pais.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${quotedMsgObj}&apikey=${vhtearkey}`)
                    limitAdd(serial)
                }
            } catch(e) {
                pais.reply(from, 'Maaf, Server sedang Error')
                pais.sendText(owner, `TTG ERROR!`, id)
            }
            break
        case prefix+'stickertoimg':
        case prefix+'sti':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (quotedMsg && quotedMsg.type == 'sticker') {
            const mediaData = await decryptMedia(quotedMsg)
            pais.reply(from, `[SABAR!] Sedang di proses⏳ silahkan tunggu!`, id)
            const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
            await pais.sendFile(from, imageBase64, 'imagesticker.jpg', 'Ni haa!', id)
            } else if (!quotedMsg) return pais.reply(from, `Mohon tag sticker yang ingin dijadikan gambar!`, id)
            break
        case prefix+'stickergif': 
        case prefix+'stikergif': 
        case prefix+'sgif': 
        if(isReg(obj)) return 
            pais.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'video' || mimetype === 'image/gif') {
                try {
                    const mediaData = await decryptMedia(message, uaOverride)
                    await pais.sendMp4AsSticker(from, mediaData, {fps: 10, startTime: `00:00:00.0`, endTime : `00:00:05.0`,loop: 0})
                } catch (e) {
                    pais.reply(from, `Size media terlalu besar! mohon kurangi durasi video.`)
                }
            } else if (quotedMsg && quotedMsg.type == 'video' || quotedMsg && quotedMsg.mimetype == 'image/gif') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                await pais.sendMp4AsSticker(from, mediaData, {fps: 10, startTime: `00:00:00.0`, endTime : `00:00:05.0`,loop: 0})
            } else {
                pais.reply(from, `Kesalahan ⚠️ Hanya bisa video/gif apabila file media berbentuk gambar ketik #stickergif`, id)
            } 
            break
        case prefix+'stickerlightning':
        case prefix+'slightning':
            if(isReg(obj)) return 
             pais.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await pais.sendStickerfromUrl(from, Slight)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await pais.sendStickerfromUrl(from, Slight)
            } else {
                await pais.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #stickerlightning`, id)
            }
            break
        case prefix+'stickerfire':
        case prefix+'sfire':
            if(isReg(obj)) return 
            pais.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await pais.sendStickerfromUrl(from, Sfire)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await pais.sendStickerfromUrl(from, Sfire)
            } else {
                await pais.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #stickerfire`, id)
            }
            break
        case prefix+'tts':
            if(isReg(obj)) return 
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis.`, id)
            
            await limitAdd(serial)
            try {
                if (args.length === 1) return pais.reply(from, 'Kirim perintah *#tts [ Bahasa ] [ Teks ]*, contoh *#tts id halo semua*')
                var dataBhs = args[1]      
                const ttsHZ = require('node-gtts')(dataBhs)
                var dataText = body.slice(8)
                if (dataText === '') return pais.reply(from, 'Masukkan teksnya', id)
                if (dataText.length > 500) return pais.reply(from, 'Teks terlalu panjang!', id)
                var dataBhs = body.slice(5, 7)
                ttsHZ.save('./media/tts.mp3', dataText, function () {
                pais.reply(from, './media/tts.mp3', id)
                })
            } catch (err){
                console.log(err)
                pais.reply(from, bahasa_list, id)
            }
            break
        case prefix+'koin':
        case prefix+'coin':
            if(isReg(obj)) return 
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
              pais.sendStickerfromUrl(from, 'https://i.ibb.co/YTWZrZV/2003-indonesia-500-rupiah-copy.png', { method: 'get' })
            } else {
              pais.sendStickerfromUrl(from, 'https://i.ibb.co/bLsRM2P/2003-indonesia-500-rupiah-copy-1.png', { method: 'get' })
            }
            break
        case prefix+'dadu':
        case prefix+'dice':
            if(isReg(obj)) return 
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const dice = Math.floor(Math.random() * 6) + 1
            await pais.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' })
            break
/*---------------------------------RANDOM MENU----------------------------------*/
        case prefix + 'blackpink':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            await limitAdd(serial)
            const blackp = fs.readFileSync('./database/blackpink.json')
            const blackpJsin= JSON.parse(blackp)
            const blackps = Math.floor(Math.random() * blackpJsin.length)
            const blackpss = blackpJsin[blackps]
            pais.sendFileFromUrl(from, blackpss, 'BlackPink.jpg', 'Random Black Pink', id)
            break
        case prefix + 'bts':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            await limitAdd(serial)
            const btsp = fs.readFileSync('./database/bts.json')
            const btspJsin= JSON.parse(btsp)
            const btsps = Math.floor(Math.random() * btspJsin.length)
            const btspss = btspJsin[btsps]
            pais.sendFileFromUrl(from, btspss, 'Bts.jpg', 'Random Bts', id)
            break
        case prefix+'quoterandom' :
        case prefix+'quote' :
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis.`, id)
            
            await limitAdd(serial)
            pais.sendText(from, quotedd())
            break
        case prefix+'gay':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length == 1) return pais.reply(from, `ketik ${prefix}gay orang, Contoh ${prefix}gay Dhil`, id)
            const ratings = body.slice(5)
            const gayy = rate[Math.floor(Math.random() * (rate.length))]
            if (!ratings) pais.reply(from, `⚠️ Format salah! Ketik *${prefix}menu* untuk penggunaan.`, id)
            await pais.reply(from, `Rate gay si *${ratings}* : ${gayy}`, id)
            break
/*------------------------------------JOJO--------------------------------------*/
        case prefix + 'hoax':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis.`, id)
            {
            await limitAdd(serial)
            pais.reply(from, mess.wait, id)
            const hoax = await axios.get (`https://docs-jojo.herokuapp.com/api/infohoax`)
            const { result } = hoax.data
            const ithoax = result[Math.floor(Math.random() * (result.length))]
           const urelss = await urlShortener(ithoax.link)
            pais.sendImage(from, ithoax.image, null, `*───❉ ${stylebot} 𝘽𝙤𝙩 ❉───*\n\n➸ Judul : ${ithoax.title}\n➸ Status : ${ithoax.tag}\n➸ Link : ${urelss}`, id)  
            }
            break
        case prefix + 'alkitab':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            //if (!isPre) return pais.reply(from, 'Khusus member premium👑!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis.`, id)
            {
            await limitAdd(serial)
            pais.reply(from, mess.wait, id)
            const alkitabb = await axios.get (`https://docs-jojo.herokuapp.com/api/alkitab`)
            pais.sendImage(from, alkitabb.data.result.img, null,`*───❉${stylebot} 𝘽𝙤𝙩 ❉───*\n\n➸ Ayat : ${alkitabb.data.result.ayat}\n➸ Isi : ${alkitabb.data.result.isi}\n➸ Link : ${alkitabb.data.result.link}`, id)          
		   }
                        break
/*-------------------------------------ZEKSAPI------------------------------------------*/
        case prefix+'goldb':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isPre) return pais.reply(from, 'Mohon maaf anda tidak bisa menggunakan fitur premium!❌Kamu tidak terdaftar di Premium user 👑\nChat wa.me/6285805609094 jika ingin menjadi premium user👑', id)
            if(isReg(obj)) return 
            if (args.length == 1) return pais.reply(from, `ketik ${prefix}goldb [teks]`, id)
            pais.reply(from, mess.wait, id)
            const playb = await axios.get(`https://zeksapi.herokuapp.com/api/gplaybutton?text=${body.slice(7)}&apikey=${zekapikey}`)
            await pais.sendFileFromUrl(from, playb.data.result, 'Play Button.jpg', 'Play Button', id)
            break
        case prefix+'silverb':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            await limitAdd(serial)
            if (args.length == 1) return pais.reply(from, `ketik ${prefix}silverb [teks]`, id)
            pais.reply(from, mess.wait, id)
            const silverb = await axios.get(`https://zeksapi.herokuapp.com/api/splaybutton?text=${body.slice(9)}&apikey=${zekapikey}`)
            await pais.sendFileFromUrl(from, silverb.data.result, 'Silver Button.jpg', 'Play Button', id)
            break
        case prefix + 'rquran':
        case prefix + 'randomquran':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            await limitAdd(serial)
            pais.reply(from, mess.wait, id)
            const rquran1 = await axios.get (`https://zeksapi.herokuapp.com/api/randomquran`)
            const rquran = rquran1.data.result
            pais.sendText(from, `*───❉${stylebot} 𝘽𝙤𝙩 ❉───*\n\n➸ *Surah :* ${rquran.nama}\n➸ *Arti :* ${rquran.arti}\n➸ *Ayat :* ${rquran.asma}\n➸ *Keterangan :* ${rquran.keterangan}`, id)
            pais.sendPtt(from, rquran.audio, 'ngaji.mp3', id)
            break
/*------------------------------------VHTEAR------------------------------------*/
        case prefix + 'harta':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            await limitAdd(serial)
            const harta = await axios.get (`https://api.vhtear.com/hartatahta?text=${body.slice(7)}&apikey=${vhtearkey}`)
            pais.sendFileFromUrl(from, harta, id)
            break
        case prefix + 'tiktokstalk':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Fitur aktif jika di dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis.`, id)
            
            await limitAdd(serial)
            if (args.length === 1)  return pais.reply(from, 'Kirim perintah *#tiktokstalk @username*\nContoh *#tiktokstalk @duar_amjay*', id)
            try {
            const tstalk2 = await axios.get('https://api.vhtear.com/tiktokprofile?query=' + body.slice(13) + '&apikey=' + vhtearkey)
            const { username, bio, follow, follower, title, like_count, video_post, description, picture, url_account } = tstalk2.data.result
            const tiktock = `──❉ ᴛɪᴋᴛᴏᴋ ꜱᴛᴀʟᴋ ❉──
❏ *Username:* ${username}
❏ *Judul:* ${title}
❏ *Bio:* ${bio}
❏ *Mengikuti:* ${follow}
❏ *Pengikut:* ${follower}
❏ *Jumlah Like*: ${like_count}
❏ *Jumlah Postingan:* ${video_post}
❏ *Deskripsi:* ${description}
❏ *Link:* ${url_account}

──❉ ${stylebot} 𝘽𝙤𝙩 ❉──`
            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            pais.sendImage(from, base64, title, tiktock)
            } catch (err) {
             console.error(err.message)
             await pais.sendFileFromUrl(from, fotoerror, 'error.png', 'Maaf, Bot Tidak Menemukan User Tersebut!!', id)
             pais.sendText(ownerNumber, 'Error Tiktokstalk Cok! : '+ err)
           }
          break
        case prefix  + 'igstalk':
            if (!isGroupMsg) return pais.reply(from, 'Fitur aktif jika di dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis.`, id)
            
            await limitAdd(serial)
            if (args.length === 1)  return pais.reply(from, 'Kirim perintah *#igstalk username*\nContoh *#igstalk mfa_daffa*', id)
            
            try {
            pais.reply(from, mess.sabar, id)
            const istalk = body.slice(9)
            const istalk2 = await axios.get('https://api.vhtear.com/igprofile?query=' + istalk + '&apikey=' + vhtearkey)
            const { biography, follower, follow, picture, post_count, full_name, username, is_private } = istalk2.data.result
            const istalk3 = `─────❉ ɪɢ ꜱᴛᴀʟᴋ ❉────

❏ *Username :* ${username}
❏ *Nama :* ${full_name}
❏ *Bio :* ${biography}
❏ *Mengikuti :* ${follow}
❏ *Pengikut :* ${follower}
❏ *Jumlah Postingan :* ${post_count}
❏ *Private :* ${is_private? 'Ya' : 'Tidak'}
            
───❉ ${stylebot} 𝘽𝙤𝙩 ❉──`
            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            pais.sendImage(from, base64, username, istalk3)
            } catch (err) {
             console.error(err.message)
             await pais.sendFileFromUrl(from, fotoerror, 'error.png', 'Maaf, Server Tidak Menemukan Akun Tersebut!')
             pais.sendText(ownerNumber, 'Igstalk Error Cuk! : ' + err)
           }
          break
        case prefix + 'hilang'://Premium case
            pais.reply(from, 'Premium FITUR! ,Chat wa.me/6285805609094 untuk membeli Premium Member!', id)
            break
        case prefix + 'musik'://Premium case
            pais.reply(from, 'Premium FITUR! ,Chat wa.me/6285805609094 untuk membeli Premium Member!', id)
            break    
        case prefix + 'music'://Premium case
            pais.reply(from, 'Premium FITUR! ,Chat wa.me/6285805609094 untuk membeli Premium Member!', id)
            break
        case prefix + 'video'://Premium case
            pais.reply(from, 'Premium FITUR! ,Chat wa.me/6285805609094 untuk membeli Premium Member!', id)
            break
        case prefix + 'youtubesearch'://Premium case
            pais.reply(from, 'Premium FITUR! ,Chat wa.me/6285805609094 untuk membeli Premium Member!', id)
            break
        case prefix + 'getmusic'://Premium case
        case prefix + 'getmusik':
            pais.reply(from, 'Premium FITUR! ,Chat wa.me/6285805609094 untuk membeli Premium Member!', id)
            break
        case prefix + 'getvideo'://Premium case
        case prefix + 'getvideo':
            pais.reply(from, 'Premium FITUR! ,Chat wa.me/6285805609094 untuk membeli Premium Member!', id)
            break
        case prefix + 'xnxx'://Premium case
        case prefix + 'getxnxx':
            pais.reply(from, 'Premium FITUR! ,Chat wa.me/6285805609094 untuk membeli Premium Member!', id)
            break
/*-------------------------------------HUJANAPI-----------------------------------*/
        case prefix + 'light':
            {
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}light [teks]*\nContoh : *${prefix}light Pais*`, id)
            pais.reply(from, mess.wait, id)
            const lightg = await axios.get (`https://hujanapi.herokuapp.com/api/lightgraffiti?text=${body.slice(7)}&apiKey=${hujanikey}`)
            pais.sendFileFromUrl(from, lightg.data.result.result, 'Light.jpg', `light ${body.slice(7)}`, id)
            await limitAdd(serial)
            }
            break
        case prefix + 'christmas':
            {
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}christmas [teks]*\nContoh : *${prefix}chrismas Pais*`, id)
            pais.reply(from, mess.wait, id)
            const christmas = await axios.get (`https://hujanapi.herokuapp.com/api/christmas?text=${body.slice(11)}&apiKey=${hujanikey}`)
            pais.sendFileFromUrl(from, christmas.data.result.result, 'christmas.jpg', `christmas ${body.slice(11)}`, id)
            await limitAdd(serial)
            }
            break
        case prefix + 'neon':
            {
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            rg = body.trim().substring(body.indexOf(' ') + 1)
            if (arg.length >= 1) {				
                const neone = arg.split('|')[0]
                const neona = arg.split('|')[1]
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}neon [Teks|Teks]*\nContoh : *${prefix}neon Pais|Gans*`, id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            pais.reply(from, mess.wait, id)
            const neonhujan = await axios.get (`https://hujanapi.herokuapp.com/api/neon?text1=${neone}&text2=${neona}&apiKey=${hujanikey}`)
            pais.sendFileFromUrl(from, neonhujan.data.result.result, 'neon.jpg', `${neone} ${neona}`,     id)
            await limitAdd(serial)
            }}
            break
        case prefix + 'ml':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}ml [ID|SERVER]*\nContoh : *${prefix}ml 348553128|9436*`, id)
            //rg = body.trim().substring(body.indexOf(' ') + 1)
            if (arg.length >= 1) {				
                const mlid = arg.split('|')[0]
                const mlserver = arg.split('|')[1]
            const mlnick = await axios.get (`https://hujanapi.herokuapp.com/api/nickml?id=${mlid}&serverid=${mlserver}&apiKey=${hujanikey}`)
            if(mlnick.data.error) return pais.reply(from, `Maaf, Nick yang kamu masuk kan tidak ada di server, Tolong cek kembali nick anda!`, id)
            pais.sendText(from, `───❉ ${stylebot} 𝘽𝙤𝙩 ❉───\nNick : *${mlnick.data.result}*`, id)
            await limitAdd(serial)}
            break
            
        case prefix + 'codm':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}codm [ID]*\nContoh : *${prefix}codm 3412432552*`, id)
            if (arg.length >= 1) {		
            const codmnick = await axios.get (`https://hujanapi.herokuapp.com/api/nickcodm?id=${body.slice(6)}&apiKey=${hujanikey}`)
            if(codmnick.data.error) return pais.reply(from, `Maaf, Nick yang kamu masuk kan tidak ada di server, Tolong cek kembali nick anda!`, id)
            pais.sendText(from, `───❉ ${stylebot} 𝘽𝙤𝙩 ❉───\nNick : *${codmnick.data.result}*`, id)
            await limitAdd(serial)  }
            break
        case prefix + 'ff':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}codm [ID]*\nContoh : *${prefix}ff 866740835*`, id)
            if (arg.length >= 1) {		
            const ffnick = await axios.get (`https://hujanapi.herokuapp.com/api/nickff?id=${body.slice(4)}&apiKey=${hujanikey}`)
            if(ffnick.data.error) return pais.reply(from, `Maaf, Nick yang kamu masuk kan tidak ada di server, Tolong cek kembali nick anda!`, id)
            pais.sendText(from, `───❉ ${stylebot} 𝘽𝙤𝙩 ❉───\nNick : *${ffnick.data.result}*`, id)
            await limitAdd(serial)  }
            break
        case prefix + 'pokemon':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            const pokemon1 = await axios.get (`https://hujanapi.herokuapp.com/api/pokemon?apiKey=${hujanikey}`)
            const pokemon = pokemon1.data.result
            const pokemod = pokemon.description
            pais.sendFileFromUrl(from, pokemon.img, 'pokemon.png', `───❉ ${stylebot} 𝘽𝙤𝙩 ❉───\n\n❏ *Name :* ${pokemon.name}\n❏ *Desc :* ${pokemon.desc}\n - *abilities :* ${pokemod.abilities}\n - *category :* ${pokemod.category}\n - *Height :* ${pokemod.height}\n - *Weight :* ${pokemod.weight}\n ❏ *Type :* ${pokemon.type}`, id)
            await limitAdd(serial)
            break
        case prefix + 'lyric':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}lyric [Judul]*\nContoh : *${prefix}lyric faded*`, id)
            const lyric1 = await axios.get (`https://hujanapi.herokuapp.com/api/lirik?query=${body.slice(7)}&apiKey=${hujanikey}`)
            if(lyric1.data.error) return pais.reply(from, `Maaf, Bot tidak menemukan lagu *${body.slice(7)}*`, id)
            pais.reply(from, `───❉ ${stylebot} 𝘽𝙤𝙩 ❉───\n\n❏ *Judul :* ${lyric1.data.title}\n❏ *Lyric :* ${lyric1.data.lyric}`, id)
            await limitAdd(serial)
            break
/*------------------------------------MELODIX-----------------------------------*/
        case prefix + 'chord':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}chord [Judul]*\nContoh : *${prefix}chord seberkas sinar*`, id)
            const chord1 = await axios.get (`https://melodicxt-api.herokuapp.com/api/chord?query=${body.slice(7)}&apiKey=${melodikey}`)
            if(chord1.data.error) return pais.reply(from, `Maaf, Judul *${body.slice(7)}* tidak di temukan`, id)
            pais.reply(from, `───❉ ${stylebot} 𝘽𝙤𝙩 ❉───\n\n❏ *Judul :* ${body.slice(7)}\n❏ *Chord :* ${chord1.data.result.data}`, id)
            await limitAdd(serial)
            break
        case prefix + 'infofilm':
            {
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}infofilm [Judul]*\nContoh : *${prefix}infofilm doraemon*`, id)
            const infofilm1 = await axios.get (`https://melodicxt-api.herokuapp.com/api/infomovie-1?query=${body.slice(10)}&apiKey=${melodikey}`)
            const { Actors, Awards, BoxOffice, Country, Genre, Language, Plot, Poster, Released, Runtime, Title, Type } = infofilm1.data.result
            const infofilm = `───❉ ${stylebot} 𝘽𝙤𝙩 ❉───

❏ *Judul :* ${Title}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
❏ *Aktor :* ${Actors}
❏ *Penghargaan :* ${Awards}
❏ *Film Laris :* ${BoxOffice}
❏ *Negara :* ${Country}
❏ *Genre :* ${Genre}
❏ *Bahasa :* ${Language}
❏ *Menceritakan :* ${Plot}
❏ *Rilis :* ${Released}
❏ *Waktu main :* ${Runtime}
❏ *Type :* ${type}`
            pais.sendFileFromUrl(from, Poster, 'info.jpg', infofilm, id)
            }
            await limitAdd(serial)
            break
        case prefix + 'lk21':
            {
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}infofilm [Judul]*\nContoh : *${prefix}infofilm doraemon*`, id)
            const infolk211 = await axios.get (`https://melodicxt-api.herokuapp.com/api/movie-lk21?query=${body.slice(6)}&apiKey=${melodikey}`)
            const { description, link, title} = infolk211.data.result
            pais.sendText(from, `───❉ ${stylebot} 𝘽𝙤𝙩 ❉───\n\n❏ *Title :* ${title}\n❏ *Desc :* ${description}\n❏ *Link :* ${link[0]}`, id)
            await limitAdd(serial)
            }
            break
            
        case prefix + 'saranfilm':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            const saranfilm1 = await axios.get (`https://melodicxt-api.herokuapp.com/api/movie-suggestion?apiKey=${melodikey}`)
            const { result } = saranfilm1.data
            const saranfilm = result[Math.floor(Math.random() * (result.length))]
            pais.reply(from, `───❉ 𝙍𝙖𝙣𝙙𝙤𝙢 𝙁𝙞𝙡𝙢 ❉───\n\n❏ *Judul :* ${saranfilm.title}\n❏ *Langsung Cek Aja*\n - *Link :* ${saranfilm.link}\n\n───❉ ${stylebot} 𝘽𝙤𝙩 ❉───`, id)
            await limitAdd(serial)
            break
        case prefix + 'dewabatch':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            try{
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}dewabatch [Judul]*\nContoh : *${prefix}dewabatch one piece*`, id)
            const dewabatch1 = await axios.get (`https://melodicxt-api.herokuapp.com/api/dewabatch?query=${body.slice(11)}&apiKey=${melodikey}`)
            const dewabatch = dewabatch1.data.result
            pais.sendFileFromUrl(from, dewabatch.cover, 'dewabatch.jpg', `────❉ 𝐃𝐞𝐰𝐚𝐁𝐚𝐭𝐜𝐡 ❉───\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${dewabatch.title}\n❏ *Info :*\n${dewabatch.info}`, id)
            await limitAdd(serial)
            } catch(err) {
            await pais.sendFileFromUrl(from, fotoerror, 'error.jpg', 'Judul tidak di temukan!', id) 
            }
            break
        case prefix + 'matrix':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            try{
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}matrix [Judul]*\nContoh : *${prefix}matrix Pais*`, id)
            const matrix = await axios.get(`https://melodicxt-api.herokuapp.com/api/txtcustom?theme=matrix&text=${body.slice(8)}&apiKey=${melodikey}`)
            pais.sendFileFromUrl(from, matrix.data.result, 'Matrix.jpg', `Matrix ${body.slice(8)}`, id)
            await limitAdd(serial)
            } catch(err) {
            await pais.sendFileFromUrl(from, fotoerror, 'error.jpg', 'Rest Api Sedang Error!', id) 
            }
            break
        case prefix + 'nulis':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            try{
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}nulis [Nama|Kelas|tulisan]*\nContoh : *${prefix}nulis Pais|X Mia It|Pengen bljr ngoding*`, id)
            //arg = body.trim().substring(body.indexOf(' ') + 1)
            if (arg.length >= 2) {				
                    const nama = arg.split('|')[0]
                    const kelas = arg.split('|')[1]
                    const tulisan = arg.split('|')[2]
            pais.reply(from, mess.wait, id)	
            const nulis = await axios.get(`https://melodicxt-api.herokuapp.com/api/joki-nulis?text=${tulisan}&nama=${nama}&kelas=${kelas}&apiKey=${melodikey}`)
            pais.sendFileFromUrl(from, nulis.data.result.result, 'nulis.jpg', `Joki Nulis`, id)
            await limitAdd(serial)
            } 
            }catch(err) {
            await pais.sendFileFromUrl(from, fotoerror, 'error.jpg', 'Rest Api Sedang Error!/Error Di Sebabkan Sistem!', id) 
            }
            break
        case prefix + 'sandwriting':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            try{
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}sandwriting [teks]*\nContoh : *${prefix}sandwriting pais*`, id)
            const sand = await axios.get (`https://melodicxt-api.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${body.slice(13)}&apiKey=${melodikey}`)
            pais.sendFileFromUrl(from, sand.data.result, 'Sand.jpg', `SandWriting`, id)
            await limitAdd(serial)
            }catch(err) {
            await pais.sendFileFromUrl(from, fotoerror, 'error.jpg', 'Rest Api Sedang Error!/Error Di Sebabkan Sistem!', id) 
            }
            break
        case prefix + 'meme':
            if(isReg(obj)) return 
            if(cekumur(cekage)) return
            if (args.length === 1) return pais.reply(from, `Kirim/reply gambar dengan caption perintah\n ${prefix}meme Atas|Bawah `, id)
                {
                pais.reply(from, mess.wait, id)
                if ((isMedia || isQuotedImage)) {
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await axios.get(`https://melodicxt-api.herokuapp.com/api/meme-maker?url=${getUrl}&text=${body.slice(6)}`)
                const { imgUrl } = ImageBase64.data.result
                await pais.sendFile(from, imgUrl, 'image.png','Nih pak', null, true)
                }}
                break
        case prefix + 'asmaulhusna':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return pais.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return pais.reply(from, `Maaf, Kuota limit kamu sudah habis.`, id)
            try{
            if (args.length === 1) return pais.reply(from, `Kirim perintah *${prefix}asmaulhusna [Nomot]*\nContoh : *${prefix}asmaulhusna 1*`, id)
            const nomoa = body.slice(13)
            if(isNaN(nomoa)) return await pais.reply(from, 'Harus berupa ANGKA!', id)
            if(nomoa >= 100) return await pais.reply(from, 'Asmaul Husna tidak melebihi 99 Nama', id)
            const asmaulhusna1 = await axios.get (`https://melodicxt-api.herokuapp.com/api/asmaallHusna?number=${nomoa}&apiKey=${melodikey}`)
            const assna = asmaulhusna1.data.result
            const gmbere = `https://lh3.googleusercontent.com/aRjfrqGwyejlZJgi4YiuFQkFDJ37-GSlaF_twyVdO-upBuKLSpGS65bcQX4UC3aRwlc`
            pais.sendFileFromUrl(from, gmbere, 'gambar.jpg', `───❉ 𝐀𝐬𝐦𝐚𝐮𝐥 𝐇𝐮𝐬𝐧𝐚 ❉──\n\n❏ ${assna.name}\n❏ *Nomor :* ${assna.number}\n❏ *Di baca :* ${assna.transliteration}\n❏ *Inggeris :* ${assna.en.meaning}`, id)
            await limitAdd(serial)
            }catch(err) {
            await pais.sendFileFromUrl(from, fotoerror, 'error.jpg', 'Rest Api Sedang Error!/Error Di Sebabkan Sistem!', id) 
            }
            break
/*-----------------------------------STAT BOT-----------------------------------*/
        case prefix + 'ping':
        case prefix + 'p':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            const loadedMsg = await pais.getAmountOfLoadedMessages()
            const chatIds = await pais.getAllChatIds()  
            const groups = await pais.getAllGroups()
            const timestamp = speed();
            const latensi = speed() - timestamp
            const me = await pais.getMe()   
            const batre = await pais.getBatteryLevel()
            const plug = await pais.getIsPlugged()  
            
            if (plug == false) {
                var plugof = 'Tidak'
            } else {
                var plugof = plug
            }
            if (plugof == true) {
                var plugon = '⚡'
            } else {
                var plugon = plugof
            }
            
            pais.sendText(from, `╭───❉「 *🤖𝘽𝙤𝙩 𝙄𝙣𝙛𝙤* 」❉───
│
├ ➸ *Penggunaan RAM :*
│ *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
│ CPU: *${os.cpus().length}*
│ ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
│
├ ➸ *Status :* 🗒️
│  ├ *${loadedMsg}* Loaded Messages
│  ├ *${groups.length}* Group Chats
│  └ *${chatIds.length - groups.length}* Personal Chats
├ ➸ *${chatIds.length}* Total Chats
│
├ ➸ *Total User:* ${chatIds.length - groups.length} ✅
│ ├ Total Block: *${blockNumber.length}* ⛔
│ └ Total Ban: *${banned.length} ⛔*
│
├ ➸ *Batre Bot🤖 :* 
│ ├ Batre : *${batre}*%🔋
│ └ Ngecas : *${plugon}*
│
│ _Meluncur_  *${latensi.toFixed(4)}* _Second_🚀
╰──────────────────`)
break

        case prefix + 'bc': // Thanks la yg buat ni
        if(isReg(obj)) return
            if (!isOwner) return pais.reply(from, `Perintah ini hanya untuk Owner ${namabot}`, id)
                bctxt = body.slice(4)
                txtbc = `*「 *Pengumuman* 」*\n\n${bctxt}`
                const semuagrup = await pais.getAllChatIds();
                if(quotedMsg && quotedMsg.type == 'image'){
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    for(let grupnya of semuagrup){
                        var cekgrup = await pais.getChatById(grupnya)
                        if(!cekgrup.isReadOnly) pais.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
                    }
                    pais.reply('Broadcast sukses!')
                }else{
                    for(let grupnya of semuagrup){
                        var cekgrup = await pais.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) pais.sendText(grupnya, txtbc)
                    }
                            pais.reply('Broadcast Success!')
                }
                break
        case prefix+'menu':
        case prefix+'help'://Tangga, waktu by BINTANG NUR PRADANA
            //if(!isPrivate) return pais.reply(from, `Khusus pc`, id)
            if(isReg(obj)) return 
            var date = new Date();
            var tahun = date.getFullYear();
            var bulan = date.getMonth();
            var tanggal = date.getDate();
            var hari = date.getDay();
            var jam = date.getHours();
            var menit = date.getMinutes();
            var detik = date.getSeconds();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum'at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan) {
                case 0: bulan = "Januari"; break;
                case 1: bulan = "Februari"; break;
                case 2: bulan = "Maret"; break;
                case 3: bulan = "April"; break;
                case 4: bulan = "Mei"; break;
                case 5: bulan = "Juni"; break;
                case 6: bulan = "Juli"; break;
                case 7: bulan = "Agustus"; break;
                case 8: bulan = "September"; break;
                case 9: bulan = "Oktober"; break;
                case 10: bulan = "November"; break;
                case 11: bulan = "Desember"; break;
            }
            var tampilTanggal = "*TANGGAL :* " + hari + ", " + tanggal + " " + bulan + " " + tahun;
            var tampilWaktu = "*JAM :* " + jam + ":" + menit + ":" + detik;
            for(let pgrm of pengirim){
            if(pgrm.id === serial){
            const namae = pgrm.nama
            const umure = pgrm.umur
            const asale = pgrm.asal
            const nousere = pgrm.nouser
            for(let lmt of limit){
            if(lmt.id === serial){
            const limitCounts = limitCount-lmt.limit
            pais.reply(from, menu(pushname, prefix, limitCounts,  isPre, namabot, versibot, stylebot, tampilTanggal, tampilWaktu, cts), id)
            }       
                }
        }
                }
        break   
    
        default:
            
            }
        }
     catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
}
