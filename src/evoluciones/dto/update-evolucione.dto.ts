import { PartialType } from '@nestjs/mapped-types';
import { CreateEvolucioneDto } from './create-evolucione.dto.js';

export class UpdateEvolucioneDto extends PartialType(CreateEvolucioneDto) {}
