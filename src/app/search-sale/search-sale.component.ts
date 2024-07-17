import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-search-sale',
  templateUrl: './search-sale.component.html',
  styleUrls: ['./search-sale.component.css']
})
export class SearchSaleComponent implements OnInit {
  sales: Sale[] = [];
  searchTerm: string = '';

  constructor(private saleService: SaleService) {}

  ngOnInit(): void {}

  onSearch(): void {
    this.saleService.searchSales(this.searchTerm).subscribe(
      data => {
        this.sales = data;
      },
      error => {
        console.error('Error fetching sales:', error);
      }
    );
  }
}
