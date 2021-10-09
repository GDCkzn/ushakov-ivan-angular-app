import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { HeroTableComponent } from './hero-table/hero-table.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListItemComponent } from './hero-list-item/hero-list-item.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {heroesReducer, reducer} from "./store/heroes.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroAddComponent,
    HeroTableComponent,
    HeroListComponent,
    HeroListItemComponent,
    HeroEditComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({app: reducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
