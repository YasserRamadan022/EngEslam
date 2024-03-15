import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/IProduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HttpproductService {
  constructor(private http: HttpClient) {}
  Getallproducts(): Observable<Iproduct[]> {
    //console.log('from get all');
    return this.http.get<Iproduct[]>(`${environment.baseUrl}/products`);
  }
  Getproductbyid(id: number | undefined): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${environment.baseUrl}/products/${id}`);
  }
  Getproductbycatid(catid: number): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(
      `${environment.baseUrl}/products?categoryID=${catid}`
    );
  }
  addproduct(product: Iproduct) {
    return this.http.post<Iproduct[]>(
      `${environment.baseUrl}/products`,
      product
    );
  }
  deleteproduct(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/products/${id}`);
  }
}
