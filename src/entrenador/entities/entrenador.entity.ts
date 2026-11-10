import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Region } from '../region/region.entity';

@Entity({name:'entrenador'})
export class Entrenador {
 @PrimaryGeneratedColumn()
 id:number;
 @Column({type:'int', unique:true})
 usuarioId: number;
 @Column({type:'varchar', length:100})
 nombre: string;
 @Column({type:'int', nullable:true})
 edad: number;
 @Column({type:'int', nullable:true})
 regionId: number;
 @OneToOne(()=>Usuario)
 @JoinColumn({name:'usuarioId'})
 usuario: Usuario;
 @ManyToOne(()=>Region,{nullable:true})
 @JoinColumn({name:'regionId'})
 region: Region;
}
