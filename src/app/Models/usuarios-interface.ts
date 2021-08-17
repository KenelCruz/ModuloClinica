export interface IUsuario {
  usuarioId:    number;
  username:     string;
  contraseña:   string;
  tipo_usuario: number;
  empleadoId:   number;
  empleado:     Empleado;
}

export interface Empleado {
  empleadoId: number;
  nombre:     string;
  apellido:   string;
  cargo:      number;
  usuarioId:  number;
  usuario:    null[];
}
