import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadisticaBase } from './estadisticabase.entity';
import { EstadisticaBaseService } from './estadisticas-base.service';
import { EstadisticaBaseController } from './estadisticas-base.controller';
@Module({
  imports:[TypeOrmModule.forFeature([EstadisticaBase])],
  controllers:[EstadisticaBaseController],
  providers:[EstadisticaBaseService],
  exports:[EstadisticaBaseService]})
export class EstadisticaBaseModule {}
