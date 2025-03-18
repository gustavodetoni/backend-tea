import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { UsersService } from 'src/services/user.service'
import { JwtAuthGuard } from 'src/config/auth/jwt-auth.guard'

@Controller('usuario')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.usersService.getUser(+id)
  }
}
