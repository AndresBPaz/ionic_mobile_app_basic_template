import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  loading = true;
  show = false;
  amount: number = 0;

  transactions = [
    {
      type: 'debit',
      amount: 100,
      details: 'Transaction details...',
      date: '2023-06-30',
      balance: 152200,
    },
    {
      type: 'credit',
      amount: 500,
      details: 'Transaction details...',
      date: '2023-06-29',
      balance: 152700,
    },
    // Add more transactions here...
  ];

  constructor() {
    // Simulate loading data from a backend service
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  showField() {
    this.show = !this.show;
  }

  addTopup() {
    // Implement the logic to add balance here...
    console.log('Amount:', this.amount);
    this.show = false;
  }
}
