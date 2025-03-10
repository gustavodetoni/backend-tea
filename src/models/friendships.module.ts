import { Module } from '@nestjs/common'
import { FriendshipsController } from 'src/controllers/friendships.controller'
import { FriendshipsService } from 'src/services/friendships.service'

@Module({
  controllers: [FriendshipsController],
  providers: [FriendshipsService]
})
export class FriendshipsModule {}
