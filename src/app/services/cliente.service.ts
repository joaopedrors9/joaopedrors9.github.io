import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    baseUlr: String = environment.baseUlr;

    constructor(
        private http: HttpClient,
        private snack: MatSnackBar) { }

    findAll(): Observable<Cliente[]> {
        const ulr = this.baseUlr + "/clientes";
        return this.http.get<Cliente[]>(ulr);
    }

    findById(id: any): Observable<Cliente> {
        const ulr = `${this.baseUlr}/clientes/${id}`;
        return this.http.get<Cliente>(ulr);
    }

    create(cliente: Cliente): Observable<Cliente> {
        const ulr = this.baseUlr + "/clientes";
        return this.http.post<Cliente>(ulr, cliente);
    }

    update(cliente: Cliente): Observable<Cliente> {
        const ulr = `${this.baseUlr}/clientes/${cliente.id}`;
        return this.http.put<Cliente>(ulr, cliente);
    }

    delete(id: any): Observable<void> {
        const ulr = `${this.baseUlr}/clientes/${id}`;
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
