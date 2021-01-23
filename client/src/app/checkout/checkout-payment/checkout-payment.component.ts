import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { BasketService } from "src/app/basket/basket.service";
import { IBasket } from "src/app/shared/model/basket";
import { IOrder } from "src/app/shared/model/order";
import { CheckoutService } from "../checkout.service";

@Component({
  selector: "app-checkout-payment",
  templateUrl: "./checkout-payment.component.html",
  styleUrls: ["./checkout-payment.component.scss"],
})
export class CheckoutPaymentComponent implements OnInit {
  @Input() checkoutForm: FormGroup;

  constructor(
    private BasketService: BasketService,
    private CheckoutService: CheckoutService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  submitOrder() {
    const basket = this.BasketService.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);
    this.CheckoutService.createOrder(orderToCreate).subscribe(
      (order: IOrder) => {
        this.toastr.success("Order created successfully");
        this.BasketService.deleteLocalBasket(basket.id);
        console.log(order);
      },
      (error) => {
        this.toastr.error(error.message);
        console.log(error);
      }
    );
  }

  private getOrderToCreate(basket: IBasket) {
    return {
      basketId: basket.id,
      deliveryMethodId: +this.checkoutForm
        .get("deliveryForm")
        .get("deliveryMethod").value,
      shipToAddress: this.checkoutForm.get("addressForm").value,
    };
  }
}
