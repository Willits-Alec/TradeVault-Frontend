import { Component } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.css']
})
export class SaleFormComponent {
  sale: Sale = {
    itemName: '',
    quantity: 0,
    costPerItem: 0,
    sold: 0,
    investment: 0,
    soldFor: 0,
    taxPaid: 0,
    profit: 0,
    dateEntered: ''
  };

  constructor(private saleService: SaleService) {}

  onSubmit() {
    this.sale.dateEntered = new Date().toISOString();
    this.saleService.addSale(this.sale).subscribe(response => {
      // Handle successful response
      console.log('Sale added:', response);
      // Reset form
      this.sale = {
        itemName: '',
        quantity: 0,
        costPerItem: 0,
        sold: 0,
        investment: 0,
        soldFor: 0,
        taxPaid: 0,
        profit: 0,
        dateEntered: ''
      };
    });
  }
}
