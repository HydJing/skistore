import { Component, OnInit } from '@angular/core';
import { IBrand } from '../model/brand';
import { IProduct } from '../model/product';
import { IType } from '../model/productType';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types: IType[];

  constructor(private shoService: ShopService) { }

  ngOnInit() {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.shoService.getProducts().subscribe(response => {
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  }

  getBrands() {
    this.shoService.getBrands().subscribe(response => {
      this.brands = response;
    }, error => {
      console.log(error)
    });
  }

  getTypes() {
    this.shoService.getTypes().subscribe(response => {
      this.types = response;
    }, error => {
      console.log(error)
    });
  }

}
