import { BadRequestException } from '@nestjs/common';

import { Test, TestingModule } from '@nestjs/testing';

import { CalculateService } from './calculate.service';

describe('CalculateService', () => {
  let calculateService: CalculateService;

  beforeEach(async () => {
    const module : TestingModule = await Test.createTestingModule({
      providers : [CalculateService]
    })
    .compile();

    calculateService = module.get<CalculateService>(CalculateService);
  });

  it('should be defined', ()=>{
    expect(calculateService).toBeDefined();
  })

  //check if valid input return valid result
    it('should return {result : Number}',() =>{
      let x =7, y=3;
      const operation : string = 'add';
      const res =  calculateService.calculate(x, y, operation);
      expect(res).toEqual({result : x+y});
    })
    
    //check if operation is not valid
    it('should return Invalid operation',() =>{
      let x =7, y=3;
      const operation : string = '';
      try {
        const res =  calculateService.calculate(x, y, operation);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.status).toBe(400);
      }
    })
})

  
   
    


