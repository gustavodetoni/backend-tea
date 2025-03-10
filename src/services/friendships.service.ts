import {
  Injectable,
  BadRequestException,
  NotFoundException
} from '@nestjs/common'
import type { PrismaService } from '../config/database/prisma/prisma.service'
import type { CreateFriendshipDto } from 'src/DTOs/create-friendship.dto'
import type { AcceptFriendshipDto } from 'src/DTOs/accept-friendship.dto'

@Injectable()
export class FriendshipsService {
  constructor(private readonly prisma: PrismaService) {}

  async getPatients() {
    return this.prisma.user.findMany({
      where: {
        userTypeId: {
          in: [2, 3]
        }
      }
    })
  }

  async askNewFriendship(createFriendshipDto: CreateFriendshipDto) {
    const { therapistId, patientId } = createFriendshipDto

    const existingFriendship = await this.prisma.therapistPatient.findFirst({
      where: {
        therapistId,
        patientId
      }
    })

    if (existingFriendship) {
      throw new BadRequestException('Essa amizade já existe.')
    }

    await this.prisma.therapistPatient.create({
      data: {
        therapistId,
        patientId,
        status: 'pendente'
      }
    })

    return { message: 'Amizade adicionada com sucesso!' }
  }

  async declineFriendship(id: number) {
    await this.prisma.therapistPatient.delete({
      where: { id }
    })

    return { message: 'Amizade removida com sucesso!' }
  }

  async acceptFriendRequest(acceptFriendshipDto: AcceptFriendshipDto) {
    const { therapistId, patientId } = acceptFriendshipDto

    const updatedFriendship = await this.prisma.therapistPatient.updateMany({
      where: {
        therapistId,
        patientId
      },
      data: {
        status: 'check'
      }
    })

    if (updatedFriendship.count === 0) {
      throw new NotFoundException('Solicitação de amizade não encontrada.')
    }

    return { message: 'Solicitação de amizade aceita com sucesso!' }
  }

  async getPendingFriendRequests(id: number, userTypeId: number) {
    if (userTypeId === 1) {
      return this.prisma.therapistPatient.findMany({
        where: {
          therapistId: id
        },
        select: {
          id: true,
          status: true,
          patient: {
            select: {
              id: true,
              name: true,
              email: true,
              childName: true
            }
          }
        }
      })
    } else {
      return this.prisma.therapistPatient.findMany({
        where: {
          patientId: id
        },
        select: {
          id: true,
          status: true,
          therapist: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      })
    }
  }
}
