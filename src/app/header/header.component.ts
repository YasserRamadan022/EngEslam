import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  routes = [
    { path: 'products', title: 'Products' },
    { path: 'home', title: 'Home' },
    { path: 'about', title: 'About' },
    { path: 'profile', title: 'Profile' },
    { path: 'Cart', title: 'MyCart' },
    { path: 'contact', title: 'Contact' },
    { path: 'login', title: 'Login' },
    { path: 'obs', title: 'OBS' },
    { path: 'addproduct', title: 'Admin' },
  ];
}
