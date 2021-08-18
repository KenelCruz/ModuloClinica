import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Enfermedad } from 'src/app/Models/Pacientes-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadServiceService {
  URL_API = 'https://localhost:44360/api/Medicamentoes';
  constructor(private http: HttpClient) { }

  public getEnfermedad() {
    return this.http.get<Enfermedad>(this.URL_API, {});
  }

  public getEnfermedadid() {}

  public getunEnfermedad(codigo: any): Observable<Enfermedad> {
    let direccion = this.URL_API + '/' + codigo;
    return this.http.get<Enfermedad>(direccion);
  }

  public postEnfermedad(form: Enfermedad): Observable<Enfermedad> {
    return this.http.post<Enfermedad>(this.URL_API, form);
  }
}

