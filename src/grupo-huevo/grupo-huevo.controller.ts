import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { GrupoHuevoService } from './grupo-huevo.service';
import { CreateGrupoHuevoDto } from './dto';
@Controller('grupos-huevo')
export class GrupoHuevoController {
 constructor(private service:GrupoHuevoService) {}
 @Post() 
 create(@Body() dto:CreateGrupoHuevoDto) { 
  return this.service.create(dto as any); 
}

 @Get() 
 findAll() {
   return this.service.findAll(); 
  }

 @Get(':id') 
 findOne(@Param('id',ParseIntPipe) id:number) { 
  return this.service.findOne(id); 
}

 @Patch(':id') 
 update(@Param('id',ParseIntPipe) id:number,@Body() dto:Partial<CreateGrupoHuevoDto>) { 
  return this.service.update(id,dto as any); }

 @Delete(':id') 
 remove(@Param('id',ParseIntPipe) id:number) {
   return this.service.remove(id); 
  }
}
