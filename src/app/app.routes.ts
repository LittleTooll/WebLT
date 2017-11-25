import { Routes, RouterModule } from '@angular/router';

import { 
    AboutComponent, 
    PortafolioComponent, 
    PortfolioitemComponent 
} from './components/index.paginas';

const app_routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: PortafolioComponent },
    { path: '**', pathMatch:'full', redirectTo:'' },

];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
