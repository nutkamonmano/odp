import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray } from 'class-validator';

export class CreateMemberDto {
  @ApiProperty({description: 'Name of the member' })
  @IsString()
  name: string;
  @ApiProperty({description: 'id of the member' })
  @IsString()
  memberid: number;
  @ApiProperty({description: 'ID card number of the member' })
  @IsString()
  idcard: number;
  @ApiProperty({description: 'Organization of the member' })
  @IsString()
  organization: string;
  @ApiProperty({description: 'Contact person of the member' })
  @IsString()
  contactperson: string;
  @ApiProperty({description: 'Contact phone of the member' })
  @IsString()
  contactphone: string;
}