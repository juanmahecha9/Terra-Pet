import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) {

   }

   agregarAnimal(animalNuevo) {
    const params = JSON.stringify(animalNuevo);
    const options = {headers: new HttpHeaders({'Content-type': 'application/json'})};

    return this.http.post(this.apiUrl + '/agregaranimal', params, options).pipe(res => res);
   }

   getData() {
     return this.http.get(this.apiUrl + '/mostrar').pipe(res=>res);
   }
}
