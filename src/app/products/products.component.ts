import { Component, OnInit } from '@angular/core';
import { Garage } from '../model/garage';
import { Repair } from '../model/repair';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  isProductOpen: boolean = true;
  isCartOpen: boolean = false;
  finalAmount: number = 0;
  grandTotal:number=0;
  laborCost:number=100;
  index:number=0;
  query:string="";
  

  constructor(private logService: LoginService) { }
  service1 = new Repair("Honda City VX", "Wheel Alignment", 600);
  service2 = new Repair("Kia Seltos", "Wheel Alignment", 650);
  service3 = new Repair("Swift Dzire", "Wheel Alignment", 600);
  service4 = new Repair("Honda City VX", "Engine Repair", 16000);
  service5 = new Repair("Kia Seltos", "Engine Repair", 22000);
  service6 = new Repair("Swift Dzire", "Engine Repair", 12000);
  service7 = new Repair("Honda City VX", "Car Wash", 400);
  service8 = new Repair("Kia Seltos", "Car Wash", 450);
  service9 = new Repair("Swift Dzire", "Car Wash", 400);
  ngOnInit(): void {
  }

  services: Repair[] = [this.service1, this.service2, this.service3,
  this.service4, this.service5, this.service6, this.service7,
  this.service8, this.service9]
  cart: Repair[] = [];

  addToCart(item: Repair) {
    this.cart.push(item)
    this.finalAmount += item.price
    this.grandTotal=this.finalAmount+this.laborCost
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
    this.index=this.cart.indexOf(existingProduct)
    this.cart.splice(this.index,1)
    this.grandTotal-=existingProduct.price;
    this.finalAmount-=existingProduct.price;
    if(this.finalAmount==0){
      this.laborCost=0;
      this.grandTotal=0;
    }
  }
  disappearPrintBill():boolean{
    if(this.grandTotal==0) return false;
    else return true;
  }
}
