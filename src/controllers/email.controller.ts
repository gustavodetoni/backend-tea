import { Controller, Post, Body } from '@nestjs/common'
import { EmailService } from 'src/services/email.service'
import { ContactEmailDto } from 'src/DTOs/contact-email.dto'

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('contato')
  async sendContactEmail(@Body() contactEmailDto: ContactEmailDto) {
    return this.emailService.sendContactEmail(contactEmailDto)
  }
}
