import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoHuevo } from './grupohuevo.entity';
import { GrupoHuevoService } from './grupo-huevo.service';
import { GrupoHuevoController } from './grupo-huevo.controller';
@Module({
  imports:[TypeOrmModule.forFeature([GrupoHuevo])],
  controllers:[GrupoHuevoController],
  providers:[GrupoHuevoService],
  exports:[GrupoHuevoService]
})
export class GrupoHuevoModule {}
