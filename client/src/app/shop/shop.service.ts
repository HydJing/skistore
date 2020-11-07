import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../model/brand';
import { IPagination } from '../model/pagination';
import { IType } from '../model/productType';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams) {

    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
      params.append('typeId', shopParams.typeId.toString());
    }

    params.append('sort', shopParams.sort);
    params.append('pageIndex', shopParams.pageNumber.toString());
    params.append('pageIndex', shopParams.pageSize.toString());

    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
    .pipe(
      map(response => {
        return response.body;
      })
    );
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}