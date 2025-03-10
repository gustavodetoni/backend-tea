import { Injectable, NotFoundException } from "@nestjs/common"
import type { PrismaService } from "../prisma/prisma.service"
import type { CreateScheduleDto } from "src/DTOs/create-schedule.dto"
import type { UpdateScheduleDto } from "src/DTOs/update-schedule.dto"

@Injectable()
export class SchedulesService {
  constructor(private readonly prisma: PrismaService) {}

  async addSchedule(createScheduleDto: CreateScheduleDto) {
    await this.prisma.schedule.create({
      data: createScheduleDto,
    })

    return { message: "Agenda adicionada com sucesso!" }
  }

  async editSchedule(updateScheduleDto: UpdateScheduleDto) {
    const { id, ...data } = updateScheduleDto

    await this.prisma.schedule.update({
      where: { id },
      data,
    })

    return { message: "Agenda editada com sucesso!" }
  }

  async getSchedules(userId: number) {
    const schedules = await this.prisma.schedule.findMany({
      where: { userId },
    })

    if (schedules.length === 0) {
      throw new NotFoundException("Nenhum cronograma encontrado para o usuário.")
    }

    return schedules
  }
}

