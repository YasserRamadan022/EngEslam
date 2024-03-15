import { Injectable, OnInit } from '@angular/core';
import { Iproduct } from '../Models/IProduct';
import productList from '../../assets/productslist';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Iproduct[] = productList;

  Getallproducts(): Iproduct[] {
    return this.products;
  }
  Getprobycatid(catid: number): Iproduct[] {
    return this.products.filter((product) => product.categoryID == catid);
  }
  Getprobyid(id: number | undefined): Iproduct | undefined {
    if (!id) return undefined;
    const pro = this.products.find((product) => product.id === id);
    if (pro) return pro;
    return;
  }
  Getnextproid(id: number): number {
    let index = this.products.findIndex((p) => p.id === id);
    const wanted = this.products[++index];
    console.log(wanted.id);
    return wanted.id;
  }
  Checklastone(id: number | undefined): boolean {
    if (!id) return false;
    const pro = this.products[this.products.length - 1];
    return pro.id == id;
  }
  Getprevproid(id: number): number {
    let index = this.products.findIndex((p) => p.id === id);
    const wanted = this.products[--index];
    return wanted.id;
  }
  Checkfirstone(id: number | undefined): boolean {
    if (!id) return false;
    const pro = this.products[0];
    return pro.id == id;
  }
}
