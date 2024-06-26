import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";


@Module({
  imports:[
    JwtModule.register({
      global: true,
      secret: "jwt_token",
      signOptions: { expiresIn: '300s' },
    }),
  ],
  controllers : [AuthController],
  providers : [AuthService],
  exports: [AuthService],
})

export class authModule
{
  
}