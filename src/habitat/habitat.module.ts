import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habitat } from './habitat.entity';
import { HabitatService } from './habitat.service';
import { HabitatController } from './habitat.controller';
@Module({
  imports:[TypeOrmModule.forFeature([Habitat])],
  controllers:[HabitatController],
  providers:[HabitatService],
  exports:[HabitatService]
})
export class HabitatModule {}
