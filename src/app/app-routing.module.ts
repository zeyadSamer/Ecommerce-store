import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [

{path:'products',component:ProductsComponent},
{path:'cart',component:CartComponent},
{path:'',redirectTo:'products',pathMatch:'full'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
