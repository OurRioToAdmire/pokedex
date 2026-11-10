import { Test, TestingModule } from '@nestjs/testing';
import { FormaService } from './forma.service.js';

describe('FormaService', () => {
  let service: FormaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormaService],
    }).compile();

    service = module.get<FormaService>(FormaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
