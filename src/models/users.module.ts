import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/config/database/prisma/prisma.module'
import { UsersController } from 'src/controllers/users.controller'
import { UsersService } from 'src/services/user.service'

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
