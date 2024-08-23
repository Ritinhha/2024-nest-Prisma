import { Module } from '@nestjs/common';
import { MoService } from './mo.service';
import { MoController } from './mo.controller';

@Module({
  controllers: [MoController],
  providers: [MoService],
})
export class MoModule {}
