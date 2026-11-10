import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Forma } from './forma.entity';
import { FormaService } from './forma.service';
import { FormaController } from './forma.controller';
@Module({
  imports:[TypeOrmModule.forFeature([Forma])],
  controllers:[FormaController],
  providers:[FormaService],
  exports:[FormaService]})
export class FormaModule {}
