const nodemailer = require("nodemailer")
let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure:false,
    auth: {
        user: "8b70b5345a0f91",
        pass: "3ef17dccc6853c",
    }
})

transporter.sendMail({
    from: "Carlos Bandelli <8b70b5345a0f91>",
    to: "carlosbandelliv@gmail.com",
    subject: "Oi, sou o Carlos e estou trabalhando com o nodemailer",
    text: "Olá, sou o Carlos Bandelli, e estou gostando bastante da lib Nodemailer",
    html: "Olá meu nome é Carlos Bandelli, e eu acho o <a href='https://guiadoprogramador.com'>nodemailer</a> muito legal!"
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err)
})