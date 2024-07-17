import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleListComponent } from './sale-list/sale-list.component';
import { SaleFormComponent } from './sale-form/sale-form.component';
import { EditSaleComponent } from './edit-sale/edit-sale.component';
import { SearchSaleComponent } from './search-sale/search-sale.component';

const routes: Routes = [
  { path: 'sales', component: SaleListComponent },
  { path: 'add-sale', component: SaleFormComponent },
  { path: 'edit-sale/:id', component: EditSaleComponent },
  { path: 'search-sale', component: SearchSaleComponent },
  { path: '', redirectTo: '/sales', pathMatch: 'full' },
  { path: '**', redirectTo: '/sales' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
