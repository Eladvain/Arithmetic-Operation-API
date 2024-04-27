import { CalculateService } from "./calculate.service";
import { AuthGuard } from '../auth/auth.guard';
import { numericDto } from "./numericDto/numericDto";

import { Controller, Post, Body, Headers, ValidationPipe, UseGuards } from "@nestjs/common";
import { ApiBearerAuth,ApiTags, ApiOperation, ApiResponse, ApiBody, ApiHeader, ApiCreatedResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';

import { BadRequestException } from "@nestjs/common/exceptions";
import { IsString } from "class-validator";

@ApiTags('calculate')
@Controller('calculate')
export class CalculateController
{
  constructor(private calculateService: CalculateService) {};

  //check that has valid jwt in swagger
  @UseGuards(AuthGuard)
  @Post()
  
  //operation header is required
  @ApiHeader({
    name: 'operation',
    example:'add',
    enum : ['add', 'subtract', 'multiply', 'divide'],
    required : true
  })


  @ApiBearerAuth('access-token')
  @ApiOperation({summary : 'Execute the operation between 2 numeric numbers'})

  
  @ApiCreatedResponse({description: 'Successful calculation.', schema : {properties: {result: {} }}})
  
  @ApiBadRequestResponse({description : 'Bad Request', schema : {properties: {message: {}, error:{}, statusCode:{} }}})

  @ApiUnauthorizedResponse({description : 'Unauthorized', schema : {properties: {message: {}, statusCode:{} }}})

  @ApiInternalServerErrorResponse({description : 'Interval Server Error', schema : {properties: {message: {} }}})

  @ApiBody({type : numericDto, description:'Json object of x and y are numeric numbers'})

  //calculate function 
  calculate(@Body(ValidationPipe) createNumericDto : numericDto, @Headers('operation') operation : string ): Object 
  {
    const {x,y} = createNumericDto;
    const operation_header = operation;

    //check if y=0 and operation='divide'- so we can't divide by 0.
    if(y === 0 && operation === 'divide')
      throw new BadRequestException('Not Impossible to divide in 0');

      //return Object - {result : Number}
    return this.calculateService.calculate(x, y, operation_header);
  }
 


}