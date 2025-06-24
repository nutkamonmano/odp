import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray } from 'class-validator';

export class CreatePersonDto {
  @ApiProperty({ description: 'Card_ID' })
  @IsString()
  n_id: string;
  @ApiProperty({ description: 'First Name' })
  @IsString()
  name: string;
  @ApiProperty({ description: 'Last Name' })
  @IsString()
  lastName: string;
  @ApiProperty({ description: 'date-of-birth' })
  @IsString()
  dob: String;
  @ApiProperty({ description: 'Phone' })
  @IsString()
  phone: string;
  @ApiProperty({ description: 'Address' })
  @IsString()
  address: string;
}