import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {
    console.log('Servicio HTTP');
  }

  getCharacters(): any {
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
}
