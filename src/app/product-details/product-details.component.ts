import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../Models/IProduct';
import { CurrencyPipe } from '@angular/common';
import { HttpproductService } from '../Services/httpproduct.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product!: Iproduct | undefined;
  checklastone: boolean = false;
  checkfirstone: boolean = false;
  constructor(
    private productservice: ProductService,
    private activateroute: ActivatedRoute,
    private router: Router,
    private httpservice: HttpproductService
  ) {}
  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((p) => {
      const snapid = p.get('id');
      const id = snapid ? +snapid : undefined;
      this.product = this.productservice.Getprobyid(id);
      // this.httpservice.Getproductbyid(id).subscribe((p) => {
      //   console.log(id);
      //   this.product = p;
      // });
      this.checklastone = this.productservice.Checklastone(id);
      this.checkfirstone = this.productservice.Checkfirstone(id);
    });
  }
  Getnextproduct(id: number) {
    const next = this.productservice.Getnextproid(id);
    this.router.navigate(['product/', next]);
  }
  Getprevproduct(id: number) {
    const prev = this.productservice.Getprevproid(id);
    this.router.navigate(['product/', prev]);
  }
  Goback() {
    this.router.navigate(['products']);
  }
}
