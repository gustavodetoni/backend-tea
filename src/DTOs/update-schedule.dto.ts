import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator'

export class UpdateScheduleDto {
  @IsNumber()
  @IsNotEmpty()
  id: number

  @IsString()
  @IsOptional()
  week1?: string

  @IsString()
  @IsOptional()
  week2?: string

  @IsString()
  @IsOptional()
  week3?: string

  @IsString()
  @IsOptional()
  week4?: string

  @IsString()
  @IsOptional()
  week5?: string

  @IsString()
  @IsOptional()
  week6?: string

  @IsString()
  @IsOptional()
  week7?: string

  @IsString()
  @IsOptional()
  week8?: string

  @IsString()
  @IsOptional()
  mensagem?: string
}
