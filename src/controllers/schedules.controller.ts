import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  UseGuards
} from '@nestjs/common'
import type { SchedulesService } from 'src/services/schedules.service'
import { JwtAuthGuard } from 'src/config/auth/jwt-auth.guard'
import type { CreateScheduleDto } from 'src/DTOs/create-schedule.dto'
import type { UpdateScheduleDto } from 'src/DTOs/update-schedule.dto'

@Controller('cronograma')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addSchedule(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.addSchedule(createScheduleDto)
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async editSchedule(@Body() updateScheduleDto: UpdateScheduleDto) {
    return this.schedulesService.editSchedule(updateScheduleDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getSchedules(@Param('id') id: string) {
    return this.schedulesService.getSchedules(+id)
  }
}
