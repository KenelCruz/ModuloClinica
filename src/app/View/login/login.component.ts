import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UsuarioServiceService} from '../../Services/UsuarioService/usuario-service.service'
import { Router, ActivatedRoute } from '@angular/router';
import { IUsuario } from 'src/app/Models/usuarios-interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private UsuarioServiceService: UsuarioServiceService
  ) { }
  datosUsuarios: IUsuario[] = [];
  usuarioForm = new FormGroup({
    usuarioId: new FormControl(''),
    username: new FormControl(''),
    contraseña: new FormControl(''),
  });

  ngOnInit(): void {
  }



}
