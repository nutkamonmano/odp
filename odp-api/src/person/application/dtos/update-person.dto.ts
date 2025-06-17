import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray, IsOptional } from 'class-validator';

export class UpdatePersonDto {
  @ApiPropertyOptional({ description: 'Name of the person' })
  @IsString()
  @IsOptional()
  name: string;
  @ApiPropertyOptional({ description: 'Surname of the person' })
  @IsString()
  @IsOptional()
  surname: string;

  @ApiPropertyOptional({ description: 'Date of birth of the person' })
  @IsString()
  @IsOptional()
  dob: Date;

  @ApiPropertyOptional({ description: 'Gender of the person' })
  @IsString()
  @IsOptional()
  gender: string;

  @ApiPropertyOptional({ description: 'Citizen of the person' })
  @IsString()
  @IsOptional()
  citizen: string
  // @ApiPropertyOptional({ description: 'Email of the person' })
  // @IsEmail()
  // @IsOptional()
  // email: string;
  // @ApiPropertyOptional({ description: 'Phone Numbers of the person' })
  // @IsArray()
  // @IsOptional()
  // phoneNumbers: string[];
}
