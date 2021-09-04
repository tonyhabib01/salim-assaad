import {Routes} from '@angular/router';
import {HomeComponent} from './app/home/home.component';
import {AboutUsComponent} from './app/about-us/about-us.component';
import {PreviousWorkComponent} from './app/previous-work/previous-work.component';
import {ProductPageComponent} from './app/product-page/product-page.component';
import {CatalogComponent} from './app/catalog/catalog.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'previous-work', component: PreviousWorkComponent},
  {path: 'product-page/:id', component: ProductPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '*', redirectTo: '/home', pathMatch: 'full'},
];
