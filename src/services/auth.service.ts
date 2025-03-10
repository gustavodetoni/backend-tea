import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import type { JwtService } from '@nestjs/jwt'
import type { PrismaService } from '../prisma/prisma.service'
import type { RegisterDto } from 'src/DTOs/register.dto'
import type { LoginDto } from 'src/DTOs/login.dto'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async register(registerDto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email }
    })

    if (existingUser) {
      throw new ConflictException('Usuário já cadastrado')
    }

    const hashedPassword = await bcrypt.hash(registerDto.senha, 8)

    await this.prisma.user.create({
      data: {
        ...registerDto,
        senha: hashedPassword
      }
    })

    return { message: 'Usuário cadastrado com sucesso!' }
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email }
    })

    if (!user) {
      throw new NotFoundException('Usuário não encontrado!')
    }

    const isPasswordValid = await bcrypt.compare(loginDto.senha, user.senha)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Senha inválida!')
    }

    const token = this.jwtService.sign({ id: user.id })

    return { token, message: 'Login realizado com sucesso!' }
  }
}
