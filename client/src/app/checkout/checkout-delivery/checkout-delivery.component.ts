import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BasketService } from "src/app/basket/basket.service";
import { IDeliveryMethod } from "src/app/shared/model/deliveryMethod";
import { CheckoutService } from "../checkout.service";

@Component({
  selector: "app-checkout-delivery",
  templateUrl: "./checkout-delivery.component.html",
  styleUrls: ["./checkout-delivery.component.scss"],
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm: FormGroup;
  deliveryMethods: IDeliveryMethod[];

  constructor(private CheckoutService: CheckoutService, private basketService: BasketService) {}

  ngOnInit() {
    this.CheckoutService.getDeliveryMethods().subscribe(
      (dm: IDeliveryMethod[]) => {
        this.deliveryMethods = dm;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setShippingPrice(deliveryMethod: IDeliveryMethod) {
    this.basketService.setShippingPrice(deliveryMethod)
  }
}
