import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Obtencion } from './obtencion.entity';
import { ObtencionService } from './obtencion.service';
import { ObtencionController } from './obtencion.controller';
@Module({
  imports:[TypeOrmModule.forFeature([Obtencion])],
  controllers:[ObtencionController],
  providers:[ObtencionService],
  exports:[ObtencionService]
})
export class ObtencionModule {}
