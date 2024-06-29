import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleListComponent } from './sale-list/sale-list.component';
import { SaleFormComponent } from './sale-form/sale-form.component';

const routes: Routes = [
  { path: 'sales', component: SaleListComponent },
  { path: 'add-sale', component: SaleFormComponent },
  { path: '', redirectTo: '/sales', pathMatch: 'full' },
  { path: '**', redirectTo: '/sales' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
