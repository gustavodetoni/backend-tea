import { Controller, Post, Body } from '@nestjs/common'
import type { EmailService } from 'src/services/email.service'
import type { ContactEmailDto } from 'src/DTOs/contact-email.dto'

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('contato')
  async sendContactEmail(@Body() contactEmailDto: ContactEmailDto) {
    return this.emailService.sendContactEmail(contactEmailDto)
  }
}
