export class Medicamento{

    constructor(public pmedicamentosId:  number,
      public pacientesId:     number,
      public nombre:          string,
      public canitdad:        number,
      public tipo:            string,
      public laboratiorio:    string,
      public fechaExpiracion: Date,
      public farmacia:        null[]){

    }
}
