import { CharactersService } from './services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'randm-api';
  charactersList: any = [];

  constructor(private charactersService: CharactersService){
    console.log('El componente se ha creado');
  }

  ngOnInit(){
    console.log('El componente se ha inicializado');
    this.charactersService.getCharacters()
      .subscribe((response : any) => this.charactersList = response.results);
  }
}
