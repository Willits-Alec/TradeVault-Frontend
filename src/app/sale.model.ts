// sale.model.ts
export interface Sale {
    _id?: string;
    itemName: string;
    quantity: number;
    costPerItem: number;
    sold: number;
    investment: number;
    soldFor: number;
    taxPaid: number;
    profit: number;
    dateEntered: string;
  }
  