import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product13Service } from './product13.service';

@Component({
  selector: 'app-product13',
  standalone: false,
  templateUrl: './product13.html'
})
export class Product13Component implements OnInit {
  public products: any;

  constructor(
    private pservice: Product13Service,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.products = this.pservice.getProductsWithImages();
  }

  viewDetail(f: any) {
    this.router.navigate(['product13', f.ProductId]);
  }
}