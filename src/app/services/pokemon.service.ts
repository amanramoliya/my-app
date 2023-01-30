import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonModel } from '../modal/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl: string = 'http://localhost:3000/pokemon';

  constructor(private http: HttpClient) {}
  addPokemon(pokemon: PokemonModel) {
    return this.http.post<PokemonModel>(this.baseUrl, pokemon);
  }

  getPokemon() {
    return this.http.get<PokemonModel[]>(this.baseUrl);
  }
}
