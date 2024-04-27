import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class CalculateService
{
   //calculate function in calculate service
  calculate(x : number, y : number, operation_header : string)
  {
   //switch on operation
    switch(operation_header) 
    {
      case 'add' :
         return {result : x+y} ;
      
      case 'subtract' :   
         return {result : x-y} ;

      case 'multiply' :   
         return {result : x*y} ;

      case 'divide' :   
         return {result : x/y} ;
         
      default : 
         throw new BadRequestException('Invalid operation');   
    }
  }
}