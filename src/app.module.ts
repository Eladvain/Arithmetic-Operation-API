import { Module } from '@nestjs/common';

import { calculateModule } from './calculate/calculate.module';

@Module({
  imports: [calculateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
