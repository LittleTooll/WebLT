import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

import { 
    AboutComponent, 
    PortafolioComponent, 
    PortfolioitemComponent,
    SearchComponent 
} from './components/index.paginas';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: PortfolioitemComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', component: PortafolioComponent },
  
  ];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
  declarations: [],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})

export class AppRoutingModule { }