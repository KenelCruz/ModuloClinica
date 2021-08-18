import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {PacienteServiceService,} from '../../../Services/PacienteService/paciente-service.service'
import {EnfermedadServiceService,} from '../../../Services/EnfermedadService/enfermedad-service.service'
import Swal from 'sweetalert2'
import { Enfermedad, IPacientes} from 'src/app/Models/Pacientes-interface';
import { Medicamento} from 'src/app/Models/MedicamentoModels';
@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit {


MedicamoentoFrom = new FormGroup({
//Medicamento

nombreM: new FormControl(''),
canitdad : new FormControl(''),
tipoM : new FormControl(''),
labiorio : new FormControl(''),
fechaExpiracion   : new FormControl(''),
})
  nuevoForm = new FormGroup({
    //paciente
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    tipo_Documento  : new FormControl(''),
    valor_Tipo_Contenido : new FormControl(''),
    edad  : new FormControl(''),
    fecha_Nacimiento : new FormControl(''),
    nacionalidad    : new FormControl(''),
    celular : new FormControl(''),
    direccion : new FormControl(''),
    motivoConsulta  : new FormControl(''),

//Enfermedad
nombreE : new FormControl(''),
tipoE  : new FormControl(''),
sintomas  : new FormControl(''),
nivel_Peligro     : new FormControl(''),

//historial
    enfermedades_infantiles  : new FormControl(''),
    secuelas_infanteles : new FormControl(''),
    enfermedades_adolecencia   : new FormControl(''),
    secuelas_adolecencia   : new FormControl(''),
    enfermedades_Adultez  : new FormControl(''),
    secuelas_Adultez : new FormControl(''),
    hospitalizaciones   : new FormControl(''),
    antecedentesQx  : new FormControl(''),
    transfuciones   : new FormControl(''),
    fracturas  : new FormControl(''),
    ets     : new FormControl(''),
    alergicos  : new FormControl(''),
    espesificacion_alergica  : new FormControl(''),
    tetano   : new FormControl(''),
    difeeria   : new FormControl(''),
    sarampion      : new FormControl(''),
    quejarse   : new FormControl(''),
    influenza   : new FormControl(''),
    herpes    : new FormControl(''),
    otros    : new FormControl(''),


  });

  constructor(private router: Router, private PacienteServiceService: PacienteServiceService, private EnfermedadServiceService: EnfermedadServiceService) { }

  ngOnInit(): void {
  }

public Post(form: Enfermedad) {
  this.EnfermedadServiceService.postEnfermedad(form).subscribe((res:any)=>{})
}

  public postForm(form: IPacientes){

    if(form!==null){
    this.PacienteServiceService.postPaciente(form).subscribe((res: any)=>{

    console.log('Post',res)
      Swal.fire({

        icon: 'success',
        title: 'Registro exitoso',
        showConfirmButton: false,
        timer: 1500
      })
        this.router.navigate(['Pacientes'])


    })
      }if (form == null){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Favor de rellenar los campos',
        })

        this.router.navigate(['/AddPaciente']);
      }

    }


}
