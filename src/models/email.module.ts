import { Module } from '@nestjs/common'
import { EmailController } from 'src/controllers/email.controller'
import { EmailService } from 'src/services/email.service'

@Module({
  controllers: [EmailController],
  providers: [EmailService]
})
export class EmailModule {}
