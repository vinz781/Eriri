const { create, Client } = require('@open-wa/wa-automate')
const cron = require('node-cron')
const color = require('./lib/color')
const fs = require('fs')
const figlet = require('figlet')
const options = require('./option')
//const welcome = require('./lib/welcome')
//const left = require('./lib/left')

require('./pais.js')
nocache('./pais.js', module => console.log(`'${module}' Updated!`))
require('./lib/help.js')
nocache('./lib/help.js', module => console.log(`'${module}' Updated!`))
require('./database/setting.json')
nocache('./database/setting.json', module => console.log(`'${module}' Updated!`))

const adminNumber = JSON.parse(fs.readFileSync('./database/admin.json'))
const setting = JSON.parse(fs.readFileSync('./database/setting.json'))
const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false

let { 
    limitCount,
    memberLimit, 
    groupLimit,
    mtc: mtcState,
    banChats,
    restartState: isRestart
    } = setting

function restartAwal(pais){
    setting.restartState = false
    isRestart = false
    pais.sendText(setting.restartId, 'Restart Succesfull!')
    setting.reId = 'undefined'
    //fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null,2));
}

const start = async (pais = new Client()) => {
        console.log('------------------------------------------------')
        console.log(color(figlet.textSync('EririBot', 'Larry 3D'), 'cyan'))
        console.log('------------------------------------------------')
        console.log('[DEV] PAIS')
        console.log('[Oke] Server siap!')
        //pais.onAnyMessage((fn) => messageLog(fn.fromMe, fn.type))
        // Force it to keep the current session
        pais.onStateChanged((state) => {
            console.log('[Client State]', state)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') pais.forceRefocus()
        })
        // listening on message
        pais.onMessage((async (message) => {

        pais.getAmountOfLoadedMessages() // Cut message Cache if cache more than 3K
            .then((msg) => {
                if (msg >= 1000) {
                    console.log('[CLIENT]', color(`Chat yang ada ${msg}, hapus bentar is...`, 'yellow'))
                    pais.cutMsgCache()
                }
            })
        // msgHndlr(pais, message)
        // Message Handler (Loaded from recent cache)
        require('./pais.js')(pais, message)
    }))
        /*pais.onAck((x => {
            const { from, to, ack } = x
            if (x !== 3) pais.sendSeen(to)
        }))*/

        // listening on Incoming Call
        pais.onIncomingCall(( async (call) => {
            await pais.sendText(call.peerJid, 'Betty tidak menerima vc/telp, vc/telp = block')
            .then(() => pais.contactBlock(call.peerJid))
        }))
    }

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
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

create(options(true, start))
    .then(pais => start(pais))
    .catch((error) => console.log(error))