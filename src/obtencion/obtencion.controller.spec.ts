import { Test, TestingModule } from '@nestjs/testing';
import { ObtencionController } from './obtencion.controller.js';
import { ObtencionService } from './obtencion.service.js';

describe('ObtencionController', () => {
  let controller: ObtencionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObtencionController],
      providers: [ObtencionService],
    }).compile();

    controller = module.get<ObtencionController>(ObtencionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
