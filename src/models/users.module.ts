import { Module } from '@nestjs/common'
import { UsersController } from 'src/controllers/users.controller'
import { UsersService } from 'src/services/user.service'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
