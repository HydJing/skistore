import { Component, OnInit } from "@angular/core";
import { IOrder } from "../shared/model/order";
import { OrdersService } from "./orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit {
  orders: IOrder[];

  constructor(private ordersSerivece: OrdersService) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.ordersSerivece.getOrdersForUser().subscribe(
      (orders: IOrder[]) => {
        this.orders = orders;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
