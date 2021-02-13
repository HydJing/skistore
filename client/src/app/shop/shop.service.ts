import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IBrand } from "../shared/model/brand";
import { IPagination } from "../shared/model/pagination";
import { IType } from "../shared/model/productType";
import { map } from "rxjs/operators";
import { ShopParams } from "../shared/shopParams";
import { IProduct } from "../shared/model/product";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShopService {
  baseUrl = "https://localhost:5001/api/";
  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IType[] = [];

  constructor(private http: HttpClient) {}

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params.append("brandId", shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
      params.append("typeId", shopParams.typeId.toString());
    }

    params.append("sort", shopParams.sort);
    params.append("pageIndex", shopParams.pageNumber.toString());
    params.append("pageIndex", shopParams.pageSize.toString());

    if (shopParams.search) {
      params = params.append("search", shopParams.search);
    }

    return this.http
      .get<IPagination>(this.baseUrl + "products", {
        observe: "response",
        params,
      })
      .pipe(
        map((response) => {
          this.products = response.body.data;
          return response.body;
        })
      );
  }

  getProduct(id: number) {
    const product = this.products.find((p) => p.id == id);

    if (product) {
      return of(product);
    }

    return this.http.get<IProduct>(this.baseUrl + "products/" + id);
  }

  getBrands() {
    if (this.brands.length > 0) {
      return of(this.brands);
    }
    return this.http.get<IBrand[]>(this.baseUrl + "products/brands").pipe(
      map((response) => {
        this.brands = response;
        return response;
      })
    );
  }

  getTypes() {
    if (this.types.length > 0) {
      return this.types;
    }
    return this.http.get<IType[]>(this.baseUrl + "products/types").pipe(
      map((response) => {
        this.types = response;
        return response;
      })
    );
  }
}
