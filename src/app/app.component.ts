import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  public get Name(): FormControl {
    return this.pokemonForm.get('name') as FormControl;
  }

  public get Speciality(): FormControl {
    return this.pokemonForm.get('speciality') as FormControl;
  }

  public get Img(): FormControl {
    return this.pokemonForm.get('img') as FormControl;
  }

  clearForm() {
    this.Name.setValue('');
    this.Speciality.setValue('');
    this.Img.setValue('');
  }

  SaveChanges() {
    let pokemon: PokemonModel = {
      name: this.Name.value,
      speciality: this.Speciality.value,
      img: this.Img.value,
    };
    this.pokemonService.addPokemon(pokemon).subscribe((response) => {
      console.log(response);
      this.clearForm();
    });
  }
}
