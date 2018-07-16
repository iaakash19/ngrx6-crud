import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import * as fromContainers from "./containers";

// routes
export const ROUTES: Routes = [
  { path: "", component: fromContainers.ProductsComponent },
  { path: ":pizzaId", component: fromContainers.ProductItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
