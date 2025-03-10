import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreateFriendshipDto {
  @IsNumber()
  @IsNotEmpty()
  therapistId: number

  @IsNumber()
  @IsNotEmpty()
  patientId: number
}
