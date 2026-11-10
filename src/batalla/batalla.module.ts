import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Batalla } from './batalla.entity';
import { BatallaService } from './batalla.service';
import { BatallaController } from './batalla.controller';
@Module({
  imports:[TypeOrmModule.forFeature([Batalla])],
  controllers:[BatallaController],
  providers:[BatallaService],
  exports:[BatallaService]
})
export class BatallaModule {}
