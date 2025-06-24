import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray, IsOptional } from 'class-validator';

export class UpdatePersonDto {
  @ApiPropertyOptional({ description: 'Your Card ID' })
  @IsString()
  @IsOptional()
  n_id: string;

  @ApiPropertyOptional({ description: 'Your First Name' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiPropertyOptional({ description: 'Your Last Name' })
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiPropertyOptional({ description: 'Your Date of birth' })
  @IsString()
  @IsOptional()
  dob: Date;

  @ApiPropertyOptional({ description: 'Your Phone' })
  @IsString()
  @IsOptional()
  phone: string;

  @ApiPropertyOptional({ description: 'Your Address' })
  @IsString()
  @IsOptional()
  address: string
}
