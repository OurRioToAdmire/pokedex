import { Test, TestingModule } from '@nestjs/testing';
import { ObtencionService } from './obtencion.service.js';

describe('ObtencionService', () => {
  let service: ObtencionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObtencionService],
    }).compile();

    service = module.get<ObtencionService>(ObtencionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
