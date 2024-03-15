import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { OBSComponent } from './obs/obs.component';
import { NewProductComponent } from './new-product/new-product.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'obs', component: OBSComponent },
  { path: 'addproduct', component: NewProductComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', component: NotFoundComponent },
];
