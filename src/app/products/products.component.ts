import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  rating: number;
  delivery: boolean;
  discountedPrice?: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public str1:string = '';
  public showTotalPrice: boolean = false;
  public cartitems: boolean = false;
  public isEdit: boolean = false;
  public i:number = 0;


  public products: Product[] = [
    {name:'pen', price: 10, rating: 3, delivery: true},
    {name:'phone', price: 100, rating: 2, delivery: false},
    {name:'shirt', price: 400, rating: 4, delivery: true},
    {name:'cap', price: 200, rating: 5, delivery: false},
    {name:'mobile case', price: 300, rating: 2, delivery: true},
    {name:'remote', price: 400, rating: 2.5, delivery: false},
  ];

  filteredProducts: Product[] = this.products; // Initialize with all products
  newProduct: Product = { name: '', price: 0, rating: 0, delivery: false };

  search(searchString: string) {
    this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(searchString.toLowerCase()));
  }

  ascprice() {
    this.filteredProducts = this.products.sort((a, b) => a.price - b.price);
  }

  desprice() {
    this.filteredProducts = this.products.sort((a, b) => b.price - a.price);
  }

  ascrating() {
    this.filteredProducts = this.products.sort((a, b) => a.rating - b.rating);
  }

  desrating() {
    this.filteredProducts = this.products.sort((a, b) => b.rating - a.rating);
  }

  applyDiscount() {
   this.filteredProducts = this.filteredProducts.map(product => ({
    ...product,
    discountedPrice: product.price * 0.5
   }));
  }

  deliveryfeeproducts() {
    this.filteredProducts = this.products.filter(product => !product.delivery);
  }

  freedelivery() {
    this.filteredProducts = this.products.filter(product => product.delivery);
  }

  calculateTotalPrice() {
    this.showTotalPrice = true;
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }

  totalcartitems() {
    this.cartitems = true;
    return this.products.length;
  }


  addProduct() {
    this.products.push({ ...this.newProduct });
  }
  
  deleteProduct(i: number){
    this.filteredProducts.splice(i,1);
  }

  updateProduct(selectedProduct: any, i: number){
    this.isEdit = true;
    this.i = i;
    this.newProduct = {...selectedProduct};
  }

  edit(){
    this.products.splice(this.i,1,{...this.newProduct})
  }

}
