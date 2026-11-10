import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadisticasBaseDto } from './create-estadisticas-base.dto.js';

export class UpdateEstadisticasBaseDto extends PartialType(CreateEstadisticasBaseDto) {}
