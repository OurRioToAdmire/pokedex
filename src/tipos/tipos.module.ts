import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tipo } from './tipo.entity';
import { TipoService } from './tipos.service';
import { TipoController } from './tipos.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Tipo])],
  controllers:[TipoController],
  providers:[TipoService],
  exports:[TipoService]
})

export class TipoModule {}
