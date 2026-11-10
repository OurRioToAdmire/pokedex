import { Test, TestingModule } from '@nestjs/testing';
import { GrupoHuevoService } from './grupo-huevo.service.js';

describe('GrupoHuevoService', () => {
  let service: GrupoHuevoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrupoHuevoService],
    }).compile();

    service = module.get<GrupoHuevoService>(GrupoHuevoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
