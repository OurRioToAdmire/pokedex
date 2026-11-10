import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evolucion } from './evolucion.entity';
import { EvolucionService } from './evoluciones.service';
import { EvolucionController } from './evoluciones.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Evolucion])],
  controllers:[EvolucionController],
  providers:[EvolucionService],
  exports:[EvolucionService]
})
export class EvolucionModule {}
