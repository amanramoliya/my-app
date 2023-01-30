import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonModel } from './modal/pokemon.model';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  pokemonForm: FormGroup;
  allPokemon: PokemonModel[];
  pokemonToDisplay: PokemonModel[];
  

  constructor(private fb: FormBuilder, private pokemonService: PokemonService) {
    this.pokemonForm = fb.group({});
    this.pokemonToDisplay = [];
    this.allPokemon = [];
    
    this.pokemonService = pokemonService;
  }

  ngOnInit() {
    this.pokemonForm = this.fb.group({
      name: this.fb.control(''),
      speciality: this.fb.control(''),
      img: this.fb.control(''),
    });

    this.pokemonService.getPokemon().subscribe((response) => {
      this.pokemonToDisplay = response;
      console.log(response);
    });

  }

  
}
