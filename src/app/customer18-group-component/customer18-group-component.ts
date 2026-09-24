import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Customer18Service } from '../services/customer18';

@Component({
  selector: 'app-customer18-group',
  standalone: false,
  templateUrl: './customer18-group-component.html',
  styleUrls: ['./customer18-group-component.css']
})
export class Customer18GroupComponent implements OnInit {
  customerGroups18: any[] = [];
  errMessage: string = '';

  constructor(
    private _service: Customer18Service,
    private _changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._service.getGroupedCustomers18().subscribe({
      next: (data) => {
        this.customerGroups18 = data;
        this._changeDetector.detectChanges();
      },
      error: (err) => {
        this.errMessage = err.message || 'Lỗi khi tải dữ liệu Bài 18';
        this._changeDetector.detectChanges();
      }
    });
  }
}