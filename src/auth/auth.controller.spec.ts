import { BadRequestException, CanActivate } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { access } from 'fs';
// import { AuthGuard } from '../auth/auth.guard';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  const mockAuthService  ={
    logIn :jest.fn((name, password) =>{
      return BadRequestException;
    })
  }

  beforeEach(async () => {
    const module : TestingModule = await Test.createTestingModule({
      controllers : [AuthController],
      providers : [AuthService]
    })
    .overrideProvider(AuthService)
    .useValue(mockAuthService)
    .compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);

  });

  it('should be defined', ()=>{
    expect(authController).toBeDefined();
  })
  
  // unit test to check if a user doesn't exist
  it('should return User is not exist', async()=>{
    try {
      const userDto = {name : "elad", password : "stas"}
       expect(await authController.login(userDto))
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.status).toBe(400);
    }
  })

})