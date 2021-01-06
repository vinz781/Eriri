const fs = require('fs-extra')

module.exports = left = async (pais, event) => {
    //console.log(event.action)
    const left = JSON.parse(fs.readFileSync('./database/left.json'))
    const isLeft = left.includes(event.chat)
    try {
        if (event.action == 'remove' && left) {
            const gChat = await pais.getChatById(event.chat)
            const pChat = await pais.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await pais.getProfilePicFromServer(event.who)
            const capt = `Yah si @${event.who.replace('@c.us', '')} Out, Pasti baperan nih`
            if (pepe == '' || pepe == undefined) {
                await pais.sendFileFromUrl(event.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU', 'profile.jpg')
            } else {
                await pais.sendFileFromUrl(event.chat, pepe, 'profile.jpg')
                pais.sendTextWithMentions(event.chat, capt)
            }
        }
    } catch (err) {
        console.log(err)
    }
}
