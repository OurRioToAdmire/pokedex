import { Test, TestingModule } from '@nestjs/testing';
import { EvolucionesService } from './evoluciones.service.js';

describe('EvolucionesService', () => {
  let service: EvolucionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvolucionesService],
    }).compile();

    service = module.get<EvolucionesService>(EvolucionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
