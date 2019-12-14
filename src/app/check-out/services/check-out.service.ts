import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/cart/cart.model';
import { CartItem } from '../../shared/models/cart/cart-item.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: "root"})
export class CheckOutService {
    private cart: Cart;
    private shippingAddressId: number;
    private userId: number;

    constructor(private router: Router,
                private http: HttpClient) {}

    setCheckOutCart(items: CartItem[]) {
        this.cart = new Cart(items);
    }

    getCart() {
        if(!this.cart){
            this.router.navigate(["/cart"]);
        }
        return this.cart;
    }

    setShippingAddress(addressId: number, userId: number) {
        this.shippingAddressId = addressId;
        this.userId = userId
    }

    setPayment(paymentMethodId: number){
        const order = this.buildOrder();
        this.http.post("")
    }

    private buildOrder() {
        const items =  this.cart.items.map(item => {
            return {
                productId: item.productId,
                productName: item.title,
                quantity: item.quantity,
                totalPrice: item.totalPrice
            };
        });

        let order = {
            items: items,
            customerId: this.userId,
            shipping: this.shippingAddressId
        };

        return order;
    }
}