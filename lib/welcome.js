const fs = require('fs-extra')

module.exports = welcome = async (pais, event) => {
    //console.log(event.action)
    const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
    const isWelkom = welkom.includes(event.chat)
    try {
        if (event.action == 'add' && isWelkom) {
            const gChat = await pais.getChatById(event.chat)
            const pChat = await pais.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await pais.getProfilePicFromServer(event.who)
            const capt = `Halo @${event.who.replace('@c.us', '')} 👋\nSelamat datang di *Grup ${name}*\n───────────────\nJagan Sok Keras Ya!\n────────────────\n`
            if (pepe == '' || pepe == undefined) {
                await pais.sendFileFromUrl(event.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU', 'profile.jpg')
            } else {
                await pais.sendFileFromUrl(event.chat, pepe, 'profile.jpg', id)
                pais.sendTextWithMentions(event.chat, capt, id)
            }

        }
    } catch (err) {
        console.log(err)
    }
}