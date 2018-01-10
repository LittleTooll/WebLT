import { Component } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";

import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-portfolioitem',
  templateUrl: './portfolioitem.component.html'
})
export class PortfolioitemComponent {

  producto:any = undefined;
  cod:string = undefined;

  constructor (private route:ActivatedRoute, 
               public _ps:ProductosService) {

    route.params.subscribe ( parametros=>{

      _ps.cargar_producto (parametros['id'])
        .subscribe(res=> { 

          this.cod = parametros['id'];
          this.producto = res.json();
          
        })
    })

  }

}
