import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.page.html',
  styleUrls: ['./pokelist.page.scss'],
})
export class PokelistPage implements OnInit {

  
  listPokemos: any = [] = []
  detailPokemon: any = [] = []
  pokemon: any = [] = []

  constructor(public http: HttpClient, public router: Router) { }


    ngOnInit() {
      this.http.get('../../assets/detalles/pokemon.json').subscribe(data => {
        this.detailPokemon = JSON.parse(JSON.stringify(data))[0].detailPokemon;
        console.log(this.detailPokemon);
  
    });
  }

    navigateToPokemonDetail(id: string) {
      // Usa el servicio Router para navegar a la página de detalle y pasa el ID del Pokémon como parámetro.
      this.router.navigate(['detailpokemon', id]);
      console.log('ID del Pokémon seleccionado:', id);
    }

    
  

  

}
