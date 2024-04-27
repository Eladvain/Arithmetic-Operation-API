import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';


export class numericDto
{
  
  @ApiProperty({
    example: '0',
    required: true
 })
 @IsNumber()
  x : number

  @ApiProperty({
    example: '0',
    required: true
 })
 @IsNumber()
  y : number

 
}