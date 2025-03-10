import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  UseGuards
} from '@nestjs/common'
import type { FriendshipsService } from 'src/services/friendships.service'
import { JwtAuthGuard } from 'src/config/auth/jwt-auth.guard'
import type { CreateFriendshipDto } from 'src/DTOs/create-friendship.dto'
import type { AcceptFriendshipDto } from 'src/DTOs/accept-friendship.dto'

@Controller()
export class FriendshipsController {
  constructor(private readonly friendshipsService: FriendshipsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('pacientes')
  async getPatients() {
    return this.friendshipsService.getPatients()
  }

  @UseGuards(JwtAuthGuard)
  @Post('request')
  async askNewFriendship(@Body() createFriendshipDto: CreateFriendshipDto) {
    return this.friendshipsService.askNewFriendship(createFriendshipDto)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('request/:id')
  async declineFriendship(@Param('id') id: string) {
    return this.friendshipsService.declineFriendship(+id)
  }

  @UseGuards(JwtAuthGuard)
  @Post('pacientes')
  async acceptFriendRequest(@Body() acceptFriendshipDto: AcceptFriendshipDto) {
    return this.friendshipsService.acceptFriendRequest(acceptFriendshipDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get('pacientes/:id')
  async getPendingFriendRequests(
    @Param('id') id: string,
    @Query('userTypeId') userTypeId: string
  ) {
    return this.friendshipsService.getPendingFriendRequests(+id, +userTypeId)
  }
}
