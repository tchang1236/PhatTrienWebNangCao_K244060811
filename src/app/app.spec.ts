import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { Homework } from './homework/homework';
import { Customer18GroupComponent } from './customer18-group-component/customer18-group-component';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot([]),
      ],
      declarations: [
        App,
        Homework,
        Customer18GroupComponent,
      ],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-homework')).toBeTruthy();
    expect(compiled.querySelector('app-customer18-group')).toBeTruthy();
  });
});
