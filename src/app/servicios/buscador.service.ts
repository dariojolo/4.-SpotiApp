import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BuscadorService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";

//BQDDhPK9aliOMW0lUeo3mtk4vF5Np6m9m5LkO70Zsz8vnpHdhnZD9rMdVancFIqT8IdW6P7_pc_tmco78v80dg

  constructor(private http:Http) {  }

  getArtistas( termino: string){
      let headers = new Headers();
      headers.append('authorization', 'Bearer BQBSN11WfCpC9J1XEk-vNFw1ESPNQi_zVjtH-nzycBpkWljkuXvXMNGoMF19KlzbwR0s7ppiUCi_4kikdSOQiQ');


      let query = `?q=${ termino }&type=artist`;
      let url = this.urlBusqueda + query;

      return this.http.get ( url,   {headers}  )
              .map( resp => {
                  console.log(resp.json());
              })
  }
}
