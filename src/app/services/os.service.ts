import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OS } from '../models/os';

@Injectable({
  providedIn: 'root'
})
export class OsService {

  baseUlr: String = environment.baseUlr;

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll(): Observable<OS[]> {
    const ulr = this.baseUlr + "/os";
    return this.http.get<OS[]>(ulr);
  }

  findById(id: any): Observable<OS> {
    const ulr = `${this.baseUlr}/os/${id}`;
    return this.http.get<OS>(ulr);
  }

  create(os: OS): Observable<OS> {
    const ulr = this.baseUlr + "/os";
    return this.http.post<OS>(ulr, os);
  }

  update(os: OS): Observable<OS> {
    const ulr = `${this.baseUlr}/os`;
    return this.http.put<OS>(ulr, os);
  }

  delete(id: any): Observable<void> {
    const ulr = `${this.baseUlr}/os/${id}`;
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