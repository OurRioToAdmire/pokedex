import { Test, TestingModule } from '@nestjs/testing';
import { TipoDanoService } from './tipo_dano.service.js';

describe('TipoDanoService', () => {
  let service: TipoDanoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoDanoService],
    }).compile();

    service = module.get<TipoDanoService>(TipoDanoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
