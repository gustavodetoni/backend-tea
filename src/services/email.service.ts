import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'
import { ContactEmailDto } from 'src/DTOs/contact-email.dto'
@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
  }

  async sendContactEmail(contactEmailDto: ContactEmailDto) {
    const { name, email, subject, message } = contactEmailDto

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject,
      text: `Nome: ${name}\nProblema: ${message}`
    }

    try {
      await this.transporter.sendMail(mailOptions)
      return { message: 'E-mail enviado com sucesso!' }
    } catch (error) {
      throw new InternalServerErrorException('Erro ao enviar o e-mail')
    }
  }
}
