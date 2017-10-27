import { Component, OnInit } from '@angular/core';
import { BuscadorService } from '../../servicios/buscador.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor( private buscadorService:BuscadorService) { }

  ngOnInit() {

    this.buscadorService.getArtistas("heroes")
    .subscribe();
    
  }

}
