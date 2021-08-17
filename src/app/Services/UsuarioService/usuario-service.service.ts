import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUsuario } from 'src/app/Models/usuarios-interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  URL_API = 'https://localhost:44360/api/Usuario';
  constructor(private http: HttpClient) { }

  public getUsuarios() {
    return this.http.get<IUsuario>(this.URL_API, {});
  }

  public postUsuario(form: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(this.URL_API, form);
  }
  public putProducto(form:  IUsuario): Observable<IUsuario> {
    let direccion = this.URL_API + '/' + form.usuarioId;

    return this.http.put<IUsuario>(direccion, form);
  }

  public deleteProductos(form: IUsuario): Observable<IUsuario> {
    let direccion = this.URL_API + '/' + form.usuarioId;
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'aplication/json',


      }),
      body: form,
    };
    return this.http.delete<IUsuario>(direccion, options);
  }
}
