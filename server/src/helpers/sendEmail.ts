import nodemailer from "nodemailer"

export async function sendEmail(to: string, body: string) {
  // let testAccount = await nodemailer.createTestAccount()
  // console.log(`test-${JSON.stringify(testAccount)}`)

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "ohqk5yewmgnpkmhi@ethereal.email",
      pass: "Bb5ExHmpbAMsM1aj9A",
    },
  })

  let info = await transporter.sendMail({
    from: "",
    to,
    subject: "Change password",
    html: body,
  })

  console.log(`Message sent: ${info.messageId}`)

  console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`)
}
