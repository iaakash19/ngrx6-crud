import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { storeFreeze } from "ngrx-store-freeze";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];


// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    environment.development ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
