import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotentEcommerceComponent } from './cotent-ecommerce.component';

describe('CotentEcommerceComponent', () => {
  let component: CotentEcommerceComponent;
  let fixture: ComponentFixture<CotentEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotentEcommerceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotentEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
