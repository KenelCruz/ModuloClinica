export interface IPacientes {
  paccienteId:          number;
  nombre:               string;
  apellido:             string;
  tipo_Documento:       number;
  valor_Tipo_Contenido: string;
  edad:                 number;
  fecha_Nacimiento:     Date;
  nacionalidad:         string;
  celular:              number;
  direccion:            string;
  motivoConsulta:       string;
  alta:                 boolean;
  farmacia:             Farmacia[];
  padecimento:          Padecimento[];
  historialId:          number;
  historial:            Historial[];
}

export interface Farmacia {
  farmaciaId:     number;
  medicamentosId: number;
  medicamento:    Medicamento;
  pacienteId:     number;
}

export interface Medicamento {
  medicamentosId:  number;
  pacientesId:     number;
  nombre:          string;
  canitdad:        number;
  tipo:            string;
  laboratiorio:    string;
  fechaExpiracion: Date;
  farmacia:        null[];
}

export interface Historial {
  historialId:              number;
  enfermedades_infantiles:  string;
  secuelas_infanteles:      string;
  enfermedades_adolecencia: string;
  secuelas_adolecencia:     string;
  enfermedades_Adultez:     string;
  secuelas_Adultez:         string;
  hospitalizaciones:        boolean;
  antecedentesQx:           boolean;
  transfuciones:            boolean;
  fracturas:                boolean;
  ets:                      boolean;
  alergicos:                boolean;
  espesificacion_alergica:  string;
  tetano:                   boolean;
  difeeria:                 boolean;
  sarampion:                boolean;
  gripe:                    boolean;
  influenza:                boolean;
  herpes:                   boolean;
  otros:                    string;
  pacienteeId:              number;
}

export interface Padecimento {
  padecimientoId: number;
  paccienteId:    number;
  enfermedad:     Enfermedad;
  enfermedadId:   number;
}

export interface Enfermedad {
  enfermedadId:  number;
  nombre:        string;
  tipo:          string;
  sintomas:      string;
  nivel_Peligro: number;
  padecimiento:  null[];
}
