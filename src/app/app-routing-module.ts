import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:"Binding-property", component: BindingPropertyComponent},
  {path:"Binding-class", component: BindingClassComponent},
  {path:"Binding-event", component: BindingEventComponent},
  {path:"Binding-style", component: BindingStyleComponent},
  {path:"Binding-2-way", component: BindingTwoWayComponent},
  {path:"danh-sach-san-pham", component: ProductListComponent},
  {path:"product-dropdown-list", component: ProductDropdownListComponent},
  {path:"product-list-call-service", component: ProductListCallServiceComponent},
  {path:"product-list-call-http-service", component: ProductListCallHttpServiceComponent},
  {path:"product-handle-error-service", component: ProductHttpHandleErrorServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
