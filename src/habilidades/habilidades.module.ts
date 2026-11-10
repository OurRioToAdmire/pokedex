import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habilidad } from './habilidad.entity';
import { HabilidadService } from './habilidades.service';
import { HabilidadController } from './habilidades.controller';
@Module({
  imports:[TypeOrmModule.forFeature([Habilidad])],
  controllers:[HabilidadController],
  providers:[HabilidadService],
  exports:[HabilidadService]
})
export class HabilidadModule {}
