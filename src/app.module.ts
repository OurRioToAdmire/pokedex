import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PokemonModule } from './pokemon/pokemon.module.js';
import { EntrenadorModule } from './entrenador/entrenador.module.js';
import { BatallaModule } from './batalla/batalla.module.js';
import { RolesModule } from './roles/roles.module.js';
import { UsuarioModule } from './usuario/usuario.module.js';
import { GrupoHuevoModule } from './grupo-huevo/grupo-huevo.module.js';
import { EstadisticasBaseModule } from './estadisticas-base/estadisticas-base.module.js';
import { RegionModule } from './region/region.module.js';
import { HabilidadesModule } from './habilidades/habilidades.module.js';
import { MovimientosModule } from './movimientos/movimientos.module.js';
import { ObtencionModule } from './obtencion/obtencion.module.js';
import { HabitatModule } from './habitat/habitat.module.js';
import { FormaModule } from './forma/forma.module.js';
import { EvolucionesModule } from './evoluciones/evoluciones.module.js';
import { TiposModule } from './tipos/tipos.module.js';
import { TipoDanoModule } from './tipo_dano/tipo_dano.module.js';
import { PokemonModule } from './pokemon/pokemon.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'pokedex',
    }),
    PokemonModule,
    TipoDanoModule,
    TiposModule,
    EvolucionesModule,
    FormaModule,
    HabitatModule,
    ObtencionModule,
    MovimientosModule,
    HabilidadesModule,
    RegionModule,
    EstadisticasBaseModule,
    GrupoHuevoModule,
    UsuarioModule,
    RolesModule,
    BatallaModule,
    EntrenadorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
