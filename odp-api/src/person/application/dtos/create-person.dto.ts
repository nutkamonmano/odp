import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray } from 'class-validator';

export class CreatePersonDto {
  @ApiProperty({ description: 'Name of the person' })
  @IsString()
  name: string;

  companyId: string;
}