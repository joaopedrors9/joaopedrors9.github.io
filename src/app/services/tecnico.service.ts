import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  baseUlr: String = environment.baseUlr;

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll(): Observable<Tecnico[]> {
    const ulr = this.baseUlr + "/tecnicos";
    return this.http.get<Tecnico[]>(ulr);
  }

  findById(id: any): Observable<Tecnico> {
    const ulr = `${this.baseUlr}/tecnicos/${id}`;
    return this.http.get<Tecnico>(ulr);
  }

  create(tecnico: Tecnico): Observable<Tecnico> {
    const ulr = this.baseUlr + "/tecnicos";
    return this.http.post<Tecnico>(ulr, tecnico);
  }

  update(tecnico: Tecnico): Observable<Tecnico> {
    const ulr = `${this.baseUlr}/tecnicos/${tecnico.id}`;
    return this.http.put<Tecnico>(ulr, tecnico);
  }

  delete(id: any): Observable<void> {
    const ulr = `${this.baseUlr}/tecnicos/${id}`;
    return this.http.delete<void>(ulr);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
