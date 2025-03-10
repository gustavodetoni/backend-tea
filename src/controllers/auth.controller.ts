import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common'
import type { AuthService } from 'src/services/auth.service'
import type { RegisterDto } from 'src/DTOs/register.dto'
import type { LoginDto } from 'src/DTOs/login.dto'

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto)
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }
}
