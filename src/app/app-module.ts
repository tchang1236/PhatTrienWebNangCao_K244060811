import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { App } from './app';
import { Contact } from './contact/contact';
import { Homework } from './homework/homework';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component/product-http-handle-error-service-component';

// Import Bài 14
import { Catalog14Component } from './catalog14/catalog14';
import { Catalog14Service } from './catalog14'; 

// Import Bài 13
import { Product13Component } from './bai13/product13';
import { Product13DetailComponent } from './bai13/product13-detail';
import { Product13Service } from './bai13/product13.service';

// Import Bài 18
import { Customer18GroupComponent } from './customer18-group-component/customer18-group-component';
import { Customer18Service } from './services/customer18';

const routes: Routes = [
  { path: 'binding-property', component: BindingPropertyComponent },
  { path: 'binding-class', component: BindingClassComponent },
  { path: 'binding-event', component: BindingEventComponent },
  { path: 'binding-2-way', component: BindingTwoWayComponent },
  { path: 'danh-sach-san-pham', component: ProductListComponent },
  { path: 'Danh-sach-san-pham-dropdown', component: ProductDropdownListComponent },
  { path: 'catalog14', component: Catalog14Component },
  { path: 'product13', component: Product13Component },
  { path: 'product13/:id', component: Product13DetailComponent },
  { path: 'customer18-group', component: Customer18GroupComponent }, // Route Bài 18
];

@NgModule({
  declarations: [
    App,
    Contact,
    Homework,
    BindingPropertyComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    BindingTwoWayComponent,
    ProductListComponent,
    ProductDropdownListComponent,
    ProductListCallServiceComponent,
    ProductListCallHttpServiceComponent,
    ProductHttpHandleErrorServiceComponent,
    Catalog14Component, 
    Product13Component,
    Product13DetailComponent,
    Customer18GroupComponent, // Khai báo Component Bài 18
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes), 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    Catalog14Service,
    Product13Service,
    Customer18Service // Khai báo Service Bài 18
  ],
  bootstrap: [App],
})
export class AppModule {}