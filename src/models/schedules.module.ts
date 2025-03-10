import { Module } from '@nestjs/common'
import { SchedulesController } from 'src/controllers/schedules.controller'
import { SchedulesService } from 'src/services/schedules.service'

@Module({
  controllers: [SchedulesController],
  providers: [SchedulesService]
})
export class SchedulesModule {}
