let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let optionsFull = `--------------------------------
*Opción:* ✨ | WELCOME
*Comando:* /enable welcome
*Descripción:* Activa o desactiva la bienvenida en el grupo.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 🌎 | MODO PUBLICO
*Comando:* /enable public
*Descripción:* El Bot se vuelve de uso publico y/o privado.
*Nota:* Este comando solo podrá ser usado por owners del Bot.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 🔗 | ANTILINK
*Comando:* /enable antilink
*Descripción:* Activa o desactiva el anti-enlaces de WhatsApp.
*Nota:* Se necesita tener activo el restrict.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 🔗 | ANTILINK 2
*Comando:* /enable antilink2
*Descripción:* Activa o desactiva el anti-enlaces que inician en HTTPS.
*Nota:* Se necesita tener activo el restrict.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 🔎 | DETECT
*Comando:* /enable detect
*Descripción:* Activa o desacriva las notificaciones de cambios en el grupo.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* ❗ | RESTRICT
*Comando:* /enable restrict
*Descripción:* Activa o desactiva las restricciones del Bot, como la de sacar o agregar personas a un grupo.
*Nota:* Este comando solo podrá ser usado por owners del Bot.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* ☑️ | AUTOREAD
*Comando:* /enable autoread
*Descripción:* Marca como leido los mensajes y los estados automáticamente.
*Nota:* Este comando solo podrá ser usado por owners del Bot.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 🔊 | AUDIOS
*Comando:* /enable audios
*Descripción:* Activa o desactiva los comandos de audios sin prefijos, en el grupo.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 👾 | AUTOSTICKER
*Comando:* /enable autosticker 
*Descripción:* Todas las imagenes o videos enviados en el grupo se convierten en stickers. 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 💬 | PCONLY
*Comando:* /enable pconly
*Descripción:* El Bot solo responderá a los comandos si es un chat privado.
*Nota:* Este comando solo podrá ser usado por owners del Bot.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 🏢 | GCONLY
*Comando:* /enable gconly
*Descripción:* El Bot solo respondera a los comandos si es un grupo. 
*Nota:* Este comando solo podrá ser usado por owners del Bot.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* ❌ | ANTIVIEWONCE 
*Comando:* /enable antiviewonce
*Descripción:* Las imagenes enviadas para ver solo una vez, son reenviadas normal por el Bot. 
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 🤬 | ANTITOXIC
*Comando:* /enable antitoxic
*Descripción:* Detecta la malas palabras y advierte al participante del grupo, antes de ser eliminado.
*Nota:* Se necesita tener activo el restrict.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 🕸️ | ANTITRABAS
*Comando:* /enable antitraba
*Descripción:* El Bot detecta textos largos que podrian ser virus y causar lag en el chat y elimina al usuario.
*Nota:* Se necesita tener activo el restrict.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 👎 | ANTIARABES
*Comando:* /enable antiarabes
*Descripción:* Si un numero árabe se uné al grupo, el Bot lo elimina automaticamente.
*Nota:* Se necesita tener activo el welcome y el restrict.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 👎 | ANTIARABES 2
*Comando:* /enable antiarabes2
*Descripción:* Si un numero árabe escribe en el grupo, el Bot lo elimina automaticamente.
*Nota:* Se necesita tener activo el restrict.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 🤖 | MODEJADIBOT
*Comando:* /enable modejadibot
*Descripción:* Activa o desactiva el uso del comando para sub bots (${usedPrefix}serbot / ${usedPrefix}jadibot). 
*Nota:* Este comando solo podrá ser usado por owners del Bot.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 👑 | MODOADMIN
*Comando:* /enable modoadmin
*Descripción:* El Bot solo responderá a los admins del grupo.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* 😃 | SIMSIMI
*Comando:* /enable simsimi
*Descripción:* El Bot empezará a responder a los mensajes usando la IA de SimSimi.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Opción:* ⏳ | ANTISPAM
*Comando:* /enable antispam
*Descripción:* El Bot detecta cuando un usuario hace spam de comando y lo banea por 5 segundos y lo advierte.
*Nota:* Este comando solo podrá ser usado por owners del Bot.
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
*Option:* ⏳ | ANTISPAM
*Command:* /enable antispam
*Description:* The Bot detects when a user spams the command and bans them for 5 seconds and warns them.
*Note:* This command can only be used
ꨄ︎-----  -----  -----  -----  -----ꨄ︎`.trim()

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'detect2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect2 = isEnable
break    
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break   
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiporno = isEnable
break        
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break     
case 'antispam':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antispam = isEnable    
break
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
case 'antiarabes2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab2 = isEnable  
break    
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, { text: optionsFull }, { quoted: m })
throw false
}
conn.sendMessage(m.chat, { text: `🧿𝐎𝐏𝐂𝐈𝐎𝐍: ${type}\n️🔮𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? 'ACTIVADO' : 'DESACTIVADO'}\n🗂️𝐏𝐀𝐑𝐀: ${isAll ? 'ESTE BOT' : isUser ? '' : 'ESTE CHAT'}` }, { quoted: m })        
conn.sendMessage(m.chat, { text: `🧿 OPTION: ${type}\n️🔮 STATUS: ${isEnable ? 'ON' : 'OFF'}\n🗂️TO: ${isAll ? 'THIS BOT' : isUser ? '' : 'THIS CHAT'}` }, { quoted: m })        
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i
handler.register = true
export default handler
