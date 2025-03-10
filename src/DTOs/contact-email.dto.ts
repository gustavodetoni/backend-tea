import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class ContactEmailDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  subject: string

  @IsString()
  @IsNotEmpty()
  message: string
}
