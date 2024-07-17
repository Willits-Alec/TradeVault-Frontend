// sale-list.component.ts
import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../sale.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {
  sales: Sale[] = [];

  constructor(private saleService: SaleService, private router: Router) {}

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

  onDelete(id: string): void {
    this.saleService.deleteSale(id).subscribe(
      () => {
        this.sales = this.sales.filter(sale => sale._id !== id);
      },
      error => {
        console.error('Error deleting sale:', error);
      }
    );
  }

  onEdit(sale: Sale): void {
    this.router.navigate(['/edit-sale', sale._id]);
  }
}
