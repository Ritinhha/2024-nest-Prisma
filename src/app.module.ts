import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasModule } from './tarefas/tarefas.module';
import { MoModule } from './persistencia/mo/mo.module';
import { PersistenciaModule } from './persistencia/persistencia.module';

@Module({
  imports: [TarefasModule, MoModule, PersistenciaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
