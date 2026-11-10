import { Test, TestingModule } from '@nestjs/testing';
import { EstadisticasBaseService } from './estadisticas-base.service.js';

describe('EstadisticasBaseService', () => {
  let service: EstadisticasBaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadisticasBaseService],
    }).compile();

    service = module.get<EstadisticasBaseService>(EstadisticasBaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
