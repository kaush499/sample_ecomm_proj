import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './user/my-orders/my-orders.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminAuthGuard } from './admin/admin-auth.guard';
import { ProductCreateComponent } from './admin/admin-products/product-create/product-create.component';
import { AdminProductListComponent } from './admin/admin-products/admin-product-list/admin-product-list.component';
import { ShowNavbarComponent } from './page-navbar/show-navbar/show-navbar.component';
import { HideNavbarComponent } from './page-navbar/hide-navbar/hide-navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShippingComponent } from './check-out/shipping/shipping.component';


const routes: Routes = [
  { path: "", component: ShowNavbarComponent, children: [
    { path: "", component: HomeComponent, pathMatch: "full" },
    { path: "my/orders", component: MyOrdersComponent, canActivate: [AuthGuard] },
    
  ]},
  { path: "", component: HideNavbarComponent, children: [
    { path: "signup", component: SignupComponent },
    { path: "login", component: LoginComponent },
    { path: "cart", component: CartComponent},
    { path: "check-out", component: CheckOutComponent, canActivate: [AuthGuard], children: [
      { path: "", redirectTo: "shipping", pathMatch: "full" },
      { path: "shipping", component: ShippingComponent }
    ] }
  ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AdminAuthGuard
  ]
})
export class AppRoutingModule { }
