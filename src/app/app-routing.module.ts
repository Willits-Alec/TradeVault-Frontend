import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleFormComponent } from './sale-form/sale-form.component';
import { SaleListComponent } from './sale-list/sale-list.component';

const routes: Routes = [
  { path: 'sales', component: SaleListComponent },
  { path: 'add-sale', component: SaleFormComponent },
  { path: '', redirectTo: '/sales', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
