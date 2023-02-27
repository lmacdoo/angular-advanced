import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './componentes/product/product-create/product-create.component';
import { ProductUpdateComponent } from './componentes/product/product-update/product-update.component';
import { ProductDeleteComponent } from './componentes/product/product-delete/product-delete.component'
import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent

},
{
  path: "products/update/:id",
  component: ProductUpdateComponent

},
{
  path: "products/delete/:id",
  component: ProductDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
