import { Test, TestingModule } from '@nestjs/testing';
import { TipoDanoController } from './tipo_dano.controller.js';
import { TipoDanoService } from './tipo_dano.service.js';

describe('TipoDanoController', () => {
  let controller: TipoDanoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDanoController],
      providers: [TipoDanoService],
    }).compile();

    controller = module.get<TipoDanoController>(TipoDanoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
