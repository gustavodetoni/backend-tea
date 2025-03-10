import { Injectable, NotFoundException } from '@nestjs/common'
import type { PrismaService } from '../config/database/prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.')
    }

    return user
  }
}
