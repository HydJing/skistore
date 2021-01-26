import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  @Input() shippingPrice: Number;
  @Input() subtotal: Number;
  @Input() total: Number;

  constructor() { }

  ngOnInit() {
  }

}
