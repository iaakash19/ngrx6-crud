import { PizzaService } from './containers/products/services/pizzas.service';
import { ProductsRoutingModule } from './products.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';
import { ProductsComponent } from './containers/products/products.component';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from "@ngrx/effects";
@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature("products", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [ProductsComponent, PizzaItemComponent],
  providers: [PizzaService]
})
export class ProductsModule {}
