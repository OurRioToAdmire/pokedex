import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrenador } from './entrenador.entity';
import { EntrenadorService } from './entrenador.service';
import { EntrenadorController } from './entrenador.controller';
@Module({
  imports:[TypeOrmModule.forFeature([Entrenador])],
  controllers:[EntrenadorController],
  providers:[EntrenadorService],
  exports:[EntrenadorService]
})
export class EntrenadorModule {}
