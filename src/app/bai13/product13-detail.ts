import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product13Service } from './product13.service';

@Component({
  selector: 'app-product13-detail',
  standalone: false,
  templateUrl: './product13-detail.html'
})
export class Product13DetailComponent implements OnInit {
  selectedProduct: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: Product13Service,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.selectedProduct = this._fs.getProductDetail(id);
      }
    });
  }

  goBack() {
    this.router.navigate(['product13']);
  }
}