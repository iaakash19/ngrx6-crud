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
import { ProductItemComponent } from './containers/product-item/product-item.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaDisplayComponent } from './components/pizza-display/pizza-display.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature("products", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [ProductsComponent, PizzaItemComponent, ProductItemComponent, PizzaFormComponent, PizzaDisplayComponent],
  providers: [PizzaService]
})
export class ProductsModule {}
