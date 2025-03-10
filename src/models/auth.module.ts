import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AuthController } from 'src/controllers/auth.controller'
import { AuthService } from 'src/services/auth.service'
import { JwtStrategy } from 'src/config/auth/jwt.strategy'
import { UsersModule } from './users.module'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: process.env.SECRET_KEY,
        signOptions: { expiresIn: '24h' }
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
