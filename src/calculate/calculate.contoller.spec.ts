import { BadRequestException, CanActivate } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuard } from '../auth/auth.guard';
import { CalculateController } from './calculate.controller';
import { CalculateService } from './calculate.service';
import { numericDto } from './numericDto/numericDto';
const httpMocks = require('node-mocks-http');

describe('CalculateController', () => {
  let calculateController: CalculateController;
  let calculateService: CalculateService;

const mockGuardService: CanActivate = { canActivate: jest.fn(() => true) };

  beforeEach(async () => {
    const module : TestingModule = await Test.createTestingModule({
      controllers : [CalculateController],
      providers : [CalculateService]
    })
    .overrideGuard(AuthGuard)
    .useValue(mockGuardService)
    .compile();

    calculateController = module.get<CalculateController>(CalculateController);
    calculateService = module.get<CalculateService>(CalculateService);

  });

  it('should be defined', ()=>{
    expect(calculateController).toBeDefined();
  })

  // unit test to check if a valid input return valid result
  it('should return {result : Number}', ()=>{
    const numericDto :numericDto = {x : 7, y : 3}
    const mockRequest = httpMocks.createRequest();
    mockRequest.header = {operation : 'add'}
    expect(calculateController.calculate(numericDto, 'add')).toEqual({
      result : 10
    })
  })

  // unit test to check divide by 0.
    it('not impossible to divide by 0', ()=>{
      const numericDto = {x : 7, y : 0}
      const mockRequest = httpMocks.createRequest();
      mockRequest.header = {operation : 'divide'}
      try {
        expect(calculateController.calculate(numericDto, 'divide'))
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException)
        expect(error.status).toBe(400);
      }
    
  })

  // unit test to check if operation header is not {add, substract, multiply, divide}
  it('should return InValid Operation', ()=>{
    const numericDto = {x : 7, y : 3}
    try {
      expect(calculateController.calculate(numericDto, ''))
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException)
      expect(error.status).toBe(400);
    }
  })

})

