import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray } from 'class-validator';

export class CreatePersonDto {
  @ApiProperty({ description: 'National_ID' })
  @IsString()
  n_id: string;
  @ApiProperty({ description: 'First Name' })
  @IsString()
  name: string;
  @ApiProperty({ description: 'Last Name' })
  @IsString()
  surname: string;
  @ApiProperty({ description: 'date-of-birth' })
  @IsString()
  dob: Date;
  @ApiProperty({ description: 'Gender' })
  @IsString()
  gender: string;
  @ApiProperty({ description: 'Citizenship' })
  @IsString()
  citizen: string;
  // @ApiProperty({ description: 'Email' })
  // @IsEmail()
  // email: string; 
  // @ApiProperty({ description: 'Phone Numbers' })
  // @IsArray()
  // phoneNumbers: string[];
}