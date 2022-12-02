import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoformsComponent } from './productoforms.component';

describe('ProductoformsComponent', () => {
  let component: ProductoformsComponent;
  let fixture: ComponentFixture<ProductoformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
