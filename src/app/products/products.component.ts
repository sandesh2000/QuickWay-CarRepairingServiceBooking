import { Component, Input, OnInit } from '@angular/core';
import { Garage } from '../model/garage';
import { Repair } from '../model/repair';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  user: Garage | null = new Garage()
  isProductOpen: boolean = true;
  isCartOpen: boolean = false;
  finalAmount: number = 0;
  grandTotal: number = 0;
  laborCost: number = 100;
  index: number = 0;
  query: string = "";
  date = new Date();
  constructor(private logService: LoginService) { }

  services: Repair[] = [];
  ngOnInit(): void {
    this.logService.getAllProducts().subscribe(
      (data) => {
        console.log(JSON.stringify(data)),
          this.services = data;
      },
      (error) => {
        console.log(error.error());
      }
    )
  }

  cart: Repair[] = [];

  addToCart(item: Repair) {
    this.cart.push(item)
    this.finalAmount += item.price
    this.grandTotal = this.finalAmount + this.laborCost
    console.log(this.cart)
  }

  showCart() {
    this.isProductOpen = false;
    this.isCartOpen = true;
  }
  showProduct() {
    this.isProductOpen = true;
    this.isCartOpen = false;
  }
  removeService(existingProduct: Repair) {
    this.index = this.cart.indexOf(existingProduct)
    this.cart.splice(this.index, 1)
    this.grandTotal -= existingProduct.price;
    this.finalAmount -= existingProduct.price;
    if (this.finalAmount == 0) {
      this.laborCost = 0;
      this.grandTotal = 0;
    }
  }
  disappearPrintBill(): boolean {
    if (this.grandTotal == 0) return false;
    else return true;
  }
  showUserdDetail() {
    return JSON.stringify(this.logService.getCust())
  }
}
