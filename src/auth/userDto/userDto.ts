import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';


export class UserDto
{

  @ApiProperty({
    example: 'Stas',
    required: true
 })
 @IsString()
  name : string

  @ApiProperty({
    example: 'Stas',
    required: true
 })
 @IsString()
  password : string

 
}