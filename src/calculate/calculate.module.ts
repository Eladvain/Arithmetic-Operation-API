import { Module } from "@nestjs/common";

import { authModule } from "src/auth/auth.module";
import { CalculateController } from "./calculate.controller";
import { CalculateService } from "./calculate.service";

@Module({
  imports:[authModule],
  controllers : [CalculateController],
  providers : [CalculateService]
})

export class calculateModule
{
  
}