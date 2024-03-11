import { Egreso } from "./egreso.model";

export class EgresoServicio{
  egresos:Egreso[]=[
    new Egreso ("Seguro del auto", 900 ),
    new Egreso ("Ropa", 2000)
  ]
  eliminar(egreso:Egreso){
    const indice:number= this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }
}
