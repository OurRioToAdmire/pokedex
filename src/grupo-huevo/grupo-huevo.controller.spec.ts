import { Test, TestingModule } from '@nestjs/testing';
import { GrupoHuevoController } from './grupo-huevo.controller.js';
import { GrupoHuevoService } from './grupo-huevo.service.js';

describe('GrupoHuevoController', () => {
  let controller: GrupoHuevoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrupoHuevoController],
      providers: [GrupoHuevoService],
    }).compile();

    controller = module.get<GrupoHuevoController>(GrupoHuevoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
