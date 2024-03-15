import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CartServiceService } from '../Services/cart-service.service';
import { Iproduct } from '../Models/IProduct';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  productsCart: Iproduct[] = [];
  constructor(private cartservice: CartServiceService) {
    this.productsCart = cartservice.Getcartlist();
  }
  totalprice() {
    return this.cartservice.totalprice();
  }
  remove(product: Iproduct) {
    return this.cartservice.remove(product);
  }
  CalcQuantity(product: Iproduct) {
    return this.cartservice.CalcQuantity(product);
  }
}
