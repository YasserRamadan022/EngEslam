import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  private productsCart: Iproduct[] = [];
  total: number = 0;
  quantity: number = 0;
  constructor() {}

  Getcartlist() {
    return this.productsCart;
  }

  Addtocart(product: Iproduct) {
    this.productsCart.push(product);
  }

  totalprice(): number {
    this.total = 0;
    this.productsCart.forEach((element) => {
      this.total += element.price;
    });
    return this.total;
  }

  remove(product: Iproduct) {
    const index = this.productsCart.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.productsCart.splice(index, 1);
    }
    this.total = 0;
    this.totalprice();
  }

  CalcQuantity(product: Iproduct): number {
    if (this.productsCart?.length) {
      this.productsCart.forEach((element) => {
        if (element.id === product.id) {
          this.quantity++;
          product.quantity--;
        } else {
          this.Addtocart(product);
          this.quantity = 1;
          product.quantity--;
        }
      });
      return this.quantity;
    } else this.quantity = 1;
    return this.quantity;
  }
}
