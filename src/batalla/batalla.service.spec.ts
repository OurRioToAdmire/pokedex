import { Test, TestingModule } from '@nestjs/testing';
import { BatallaService } from './batalla.service.js';

describe('BatallaService', () => {
  let service: BatallaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BatallaService],
    }).compile();

    service = module.get<BatallaService>(BatallaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
