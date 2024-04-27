import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBody, ApiCreatedResponse, ApiUnauthorizedResponse, ApiBadRequestResponse,  } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { UserDto } from "./userDto/userDto";

@Controller('auth')
@ApiTags("Login")
export class AuthController
{
    constructor(private authSercive : AuthService){}

    @Post('login')
    @ApiBody({type : UserDto, description:'json object of some user'})
    @ApiCreatedResponse({description: 'Successful logIn.', schema : {properties:  {token :{} }}})
    @ApiBadRequestResponse({description : 'User is not exist - Bad Request', schema : {properties: {message: {}, statusCode:{} }}})
     async login(@Body() user : UserDto) : Promise<any>
    {
      const {name, password} = user;

      //return jwt for authorization
      return await this.authSercive.logIn(name, password);
    }
}