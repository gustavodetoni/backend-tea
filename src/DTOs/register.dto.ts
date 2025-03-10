import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  IsDateString
} from 'class-validator'

export class RegisterDto {
  @IsNumber()
  @IsNotEmpty()
  userTypeId: number

  @IsString()
  @IsOptional()
  especialidade?: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsOptional()
  phone?: string

  @IsString()
  @IsOptional()
  childName?: string

  @IsString()
  @IsOptional()
  childGender?: string

  @IsDateString()
  @IsOptional()
  childBirthdate?: Date

  @IsString()
  @IsNotEmpty()
  senha: string
}
