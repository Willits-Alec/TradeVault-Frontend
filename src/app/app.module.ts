import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleFormComponent } from './sale-form/sale-form.component';
import { SaleListComponent } from './sale-list/sale-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditSaleComponent } from './edit-sale/edit-sale.component';
import { SearchSaleComponent } from './search-sale/search-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    SaleFormComponent,
    SaleListComponent,
    HeaderComponent,
    FooterComponent,
    EditSaleComponent,
    SearchSaleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
