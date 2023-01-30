import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonModel } from '../modal/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl: string = 'http://localhost:3000/pokemon';
  

  constructor(private http: HttpClient) {}



  getPokemon() {
    
    return this.http.get<PokemonModel[]>(this.baseUrl);
  }
}
