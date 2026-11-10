import { Test, TestingModule } from '@nestjs/testing';
import { EvolucionesController } from './evoluciones.controller.js';
import { EvolucionesService } from './evoluciones.service.js';

describe('EvolucionesController', () => {
  let controller: EvolucionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvolucionesController],
      providers: [EvolucionesService],
    }).compile();

    controller = module.get<EvolucionesController>(EvolucionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
