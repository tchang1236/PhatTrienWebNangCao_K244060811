import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name:string='Tranggg'
  public email:string='trangdtk24406h@st.uel.edu.vn'
  public nameid:string='K244060785'
  public emailid:string='emailid'
  public isDisabled:boolean=true
  public hello:string="Hey! how is going?"
}
