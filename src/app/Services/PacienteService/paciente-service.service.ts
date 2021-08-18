import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPacientes } from 'src/app/Models/Pacientes-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteServiceService {
  URL_API = 'https://localhost:44360/api/Pacientes';
  constructor(private http: HttpClient) { }

  public getPacientes() {
    return this.http.get<IPacientes>(this.URL_API);
  }

  public getPacientesById(paccienteId: any): Observable<IPacientes> {
    let direccion = this.URL_API + '/' + paccienteId;
    return this.http.get<IPacientes>(direccion);
  }



  public postPaciente(form: IPacientes): Observable<IPacientes> {
    return this.http.post<IPacientes>(this.URL_API, form);
  }
  public deletePaciente(form: IPacientes): Observable<IPacientes> {
    let direccion = this.URL_API + '/' + form.paccienteId;
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'aplication/json',


      }),
      body: form,
    };
    return this.http.delete<IPacientes>(direccion, options);
  }

  public putPaciente(form: IPacientes): Observable<IPacientes> {
    let direccion = this.URL_API + '/' + form.paccienteId;

    return this.http.put<IPacientes>(direccion, form);
  }
}
