import { Component, OnInit } from '@angular/core';
import { Catalog14Service } from '../catalog14';

@Component({
  selector: 'app-catalog14',
  standalone: false,
  templateUrl: './catalog14.html',
  styleUrls: ['./catalog14.css']
})
export class Catalog14Component implements OnInit {
  categories14: any[] = [];

  constructor(private catalog14Service: Catalog14Service) { }

  ngOnInit(): void {
    this.categories14 = this.catalog14Service.getCategories14();
  }
}