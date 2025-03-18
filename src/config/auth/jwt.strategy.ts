import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { ConfigService } from "@nestjs/config"
import { PrismaService } from "../database/prisma/prisma.service"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    })
  }

  async validate(payload: { id: number }) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.id },
    })

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}

