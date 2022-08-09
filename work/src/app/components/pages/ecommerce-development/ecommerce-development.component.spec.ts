import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceDevelopmentComponent } from './ecommerce-development.component';

describe('EcommerceDevelopmentComponent', () => {
  let component: EcommerceDevelopmentComponent;
  let fixture: ComponentFixture<EcommerceDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
