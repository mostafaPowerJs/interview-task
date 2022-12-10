import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {
    path: '**', component: LoginComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'orders', component: OrdersComponent
  },
  {
    path: 'search', component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
