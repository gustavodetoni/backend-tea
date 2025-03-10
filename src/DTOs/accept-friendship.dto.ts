import { IsNotEmpty, IsNumber } from 'class-validator'

export class AcceptFriendshipDto {
  @IsNumber()
  @IsNotEmpty()
  therapistId: number

  @IsNumber()
  @IsNotEmpty()
  patientId: number
}
