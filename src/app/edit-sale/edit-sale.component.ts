import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaleService } from '../sale.service';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.component.html',
  styleUrls: ['./edit-sale.component.css']
})
export class EditSaleComponent implements OnInit {
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

  constructor(
    private saleService: SaleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const saleId = this.route.snapshot.paramMap.get('id');
    if (saleId) {
      this.saleService.getSales().subscribe((sales) => {
        this.sale = sales.find(s => s._id === saleId) || this.sale;
      });
    }
  }

  onSubmit(): void {
    const saleId = this.route.snapshot.paramMap.get('id');
    if (saleId) {
      this.saleService.updateSale(saleId, this.sale).subscribe(() => {
        this.router.navigate(['/sales']);
      });
    }
  }
}
