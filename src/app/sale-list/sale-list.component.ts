import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {
  sales: Sale[] = [];

  constructor(private saleService: SaleService) {}

  ngOnInit(): void {
    this.saleService.getSales().subscribe(
      data => {
        this.sales = data;
      },
      error => {
        console.error('Error fetching sales:', error);
      }
    );
  }
}
