import { BadRequestException, Injectable } from "@nestjs/common"
import {JwtService} from '@nestjs/jwt'

const utills = require('../Utills/utills')

@Injectable()
export class AuthService
{
  constructor(
    private jwtService: JwtService
  ) {}

  //login function
   async logIn(name : string, password : string) : Promise<any>
  {
    //read users.txt file 
    const users = await utills.read_from_file('C:\\Users\\אלעד\\Desktop\\numeric-operation-api\\Arithmetic-Operation-API\\arithmetic-operation\\src\\users\\users.txt');

    //find if exist user with the same name and password.
    const userIsExist = await users.find(element => element.name === name && element.password === password);

    //user is not exist in the system
    if(typeof userIsExist === 'undefined'){
       throw new BadRequestException("User is not exist");
    }
    
    //user exist in the system
    const payload = {userName : userIsExist.name, userPassword: userIsExist.password};

    //return valid jwt to authorization
    return {
      access_token:  this.jwtService.sign(payload, { secret: "jwt_token" })
    }
  }
}