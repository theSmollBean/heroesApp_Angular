import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeroPageComponent } from './hero/pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './hero/pages/layout-page/layout-page.component';
import { ListPageComponent } from './hero/pages/list-page/list-page.component';
import { NewPageComponent } from './hero/pages/new-page/new-page.component';
import { SearchPageComponent } from './hero/pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
