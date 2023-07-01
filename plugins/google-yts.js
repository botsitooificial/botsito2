import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw '*[❗] ɪɴɢʀᴇsᴀ ᴇʟ ɴᴏᴍʙʀᴇ ǫᴜᴇ ǫᴜɪᴇʀᴇs ʙᴜsᴄᴀʀ*\n\n\n*[❗]ENTER THE NAME YOU WANT TO SEARCH*'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `「ꨄ︎𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰ꨄ︎」
❱➭🍀 *${v.title}* (${v.url})
❱➭🫐 *_Link :_* ${v.url}
❱➭🕒 *_Duration:* ${v.timestamp}
❱➭🌴 *DURATION* ${v.durationH}
❱➭📌 *PUBLISHED* ${v.publishedTime}
❱➭📥 *UPLOADED* ${v.ago}
❱➭👁 *VIEWS* ${v.views}
╰━━━━━━━━━━━━━━`}}).filter(v => v).join('\n\nꨄ︎-----  -----  -----  -----  -----ꨄ︎')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts'] 
handler.register = true
export default handler