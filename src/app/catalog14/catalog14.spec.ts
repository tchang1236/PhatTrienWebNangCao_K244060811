import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Catalog14Component } from './catalog14';

describe('Catalog14Component', () => {
  let component: Catalog14Component;
  let fixture: ComponentFixture<Catalog14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Catalog14Component],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Catalog14Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
