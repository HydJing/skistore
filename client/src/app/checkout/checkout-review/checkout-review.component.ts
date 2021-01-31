import { CdkStepper } from "@angular/cdk/stepper";
import { Component, Input, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { BasketService } from "src/app/basket/basket.service";
import { IBasket } from "src/app/shared/model/basket";

@Component({
  selector: "app-checkout-review",
  templateUrl: "./checkout-review.component.html",
  styleUrls: ["./checkout-review.component.scss"],
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper: CdkStepper;
  basket$: Observable<IBasket>;

  constructor(
    private BasketService: BasketService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.basket$ = this.BasketService.basket$;
  }

  createPaymentIntent() {
    return this.BasketService.createPaymentIntent().subscribe(
      (response: any) => {
        this.toastr.success("Payment intent created");
        this.appStepper.next();
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.message);
      }
    );
  }
}
