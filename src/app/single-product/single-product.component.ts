import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../Models/IProduct';
import { HighlightDirective } from '../Directives/highlight.directive';
import { CapitalCasePipe } from '../Pipes/capital-case.pipe';
import { DatePipe } from '@angular/common';
import { CartServiceService } from '../Services/cart-service.service';
import { Router } from '@angular/router';
import { HttpproductService } from '../Services/httpproduct.service';
@Component({
  selector: 'app-single-product',
  standalone: true,
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
  imports: [HighlightDirective, CapitalCasePipe, DatePipe],
})
export class SingleProductComponent {
  constructor(
    private cartservice: CartServiceService,
    private router: Router,
    private httpservice: HttpproductService
  ) {}
  @Input() product!: Iproduct;
  // @Output() handleAddToCart = new EventEmitter<Iproduct>();
  currentDate: Date = new Date();
  // addtocart(product: Iproduct) {
  //   if (product.quantity) product.quantity--;
  //   this.handleAddToCart.emit(product);
  // }
  addtocart(product: Iproduct) {
    console.log('hamada');
    this.cartservice.Addtocart(product);
    console.log('hamada');
  }
  HandlePro(id: number) {
    this.router.navigate(['product/', id]);
  }
  Delete(id: number) {
    this.httpservice.deleteproduct(id).subscribe((p) => {
      this.router.navigate(['products']);
      alert('Deleted Successfully');
    });
  }
}
