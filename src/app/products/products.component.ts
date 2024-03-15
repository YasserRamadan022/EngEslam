import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Iproduct } from '../Models/IProduct';
import productslist from '../../assets/productslist';
import { HighlightDirective } from '../Directives/highlight.directive';
import { SingleProductComponent } from '../single-product/single-product.component';
import { CurrencyPipe } from '@angular/common';
import { CartServiceService } from '../Services/cart-service.service';
import { ProductService } from '../Services/product.service';
import { HttpproductService } from '../Services/httpproduct.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  imports: [HighlightDirective, SingleProductComponent, CurrencyPipe],
})
export class ProductsComponent implements OnInit, OnDestroy {
  ClientName: string;
  products!: Iproduct[];
  subscribers: Subscription[] = [];
  logosrc: string = '/assets/6de20c92f6983c18ed5cebac4f90f603.jpg';
  ToggleImg: boolean = true;
  constructor(
    private cartservice: CartServiceService,
    private productservice: ProductService,
    private httpservice: HttpproductService
  ) {
    this.ClientName = 'Hamada';
    //this.products = productservice.Getallproducts();
  }

  ngOnInit(): void {
    this.subscribers.push(
      this.httpservice.Getallproducts().subscribe((p) => {
        //console.log('from product on init');
        this.products = p;
      })
    );
  }

  ImgToggle() {
    this.ToggleImg = !this.ToggleImg;
  }
  handleBuy(product: Iproduct) {
    if (product.quantity) product.quantity--;
  }

  HandleDropDown(e: number) {
    this.products = productslist;
    if (e === 1) {
      this.products = this.products.filter(
        (product) => product.categoryID === 1
      );
    } else if (e === 2) {
      this.products = this.products.filter(
        (product) => product.categoryID === 2
      );
    } else if (e === 3) {
      this.products = this.products.filter(
        (product) => product.categoryID === 3
      );
    }
  }

  addToCart(newCartItem: Iproduct) {
    this.cartservice.Addtocart(newCartItem);
    this.cartservice.totalprice();
  }
  ngOnDestroy(): void {
    this.subscribers.forEach((element) => {
      element.unsubscribe();
    });
  }
}
