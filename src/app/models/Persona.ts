
import {Jefe} from './Jefe'
export class Persona{
    id:number;
    nombre:string;
    apellido:string;
    jefe: Jefe;
    constructor(id:number, nombre:string,
        apellido:string,jefe:Jefe){
            this.id=id;
            this.nombre=nombre;
            this.apellido=apellido;
            this.jefe=jefe;
    }
}