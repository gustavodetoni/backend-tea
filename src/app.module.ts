import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './config/database/prisma/prisma.module'
import { AuthModule } from './models/auth.module'
import { UsersModule } from './models/users.module'
import { SchedulesModule } from './models/schedules.module'
import { FriendshipsModule } from './models/friendships.module'
import { EmailModule } from './models/email.module'
import { HealthCheckController } from './controllers/health-check.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    SchedulesModule,
    FriendshipsModule,
    EmailModule
  ],
  controllers: [HealthCheckController],
})
export class AppModule {}
