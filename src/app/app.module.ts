import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

import {appRoutes} from '../routes';
import { PreviousWorkComponent } from './previous-work/previous-work.component';
import { PreviousWorkImageComponent } from './previous-work-image/previous-work-image.component';
import {PreviousWorkImageService} from './previous-work-image/shared/previous-work-image.service';
import { ProductPageComponent } from './product-page/product-page.component';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    PreviousWorkComponent,
    PreviousWorkImageComponent,
    ProductPageComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PreviousWorkImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
