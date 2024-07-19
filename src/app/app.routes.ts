import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', title:"Home", component: HomeComponent },
    { path: 'shop', title:"Shop", component: ShopComponent },
    { path: 'cart', title:"Shopping Cart", component: CartComponent }
];
