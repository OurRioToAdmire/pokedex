import { Test, TestingModule } from '@nestjs/testing';
import { BatallaController } from './batalla.controller.js';
import { BatallaService } from './batalla.service.js';

describe('BatallaController', () => {
  let controller: BatallaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BatallaController],
      providers: [BatallaService],
    }).compile();

    controller = module.get<BatallaController>(BatallaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
