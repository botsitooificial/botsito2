let handler = async (m, { conn, args }) => {
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
m.reply('*✅ La descripción del grupo se modifico correctamente*\n\n\n*✅ The description of the group was modified correctly*')
}
handler.help = ['Setdesc <text>']
handler.tags = ['group']
handler.command = /^setdesk|setdesc$/i
handler.group = true
handler.register = true
handler.admin = true
handler.botAdmin = true
export default handler
