import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDigitalMarketingComponent } from './service-digital-marketing.component';

describe('ServiceDigitalMarketingComponent', () => {
  let component: ServiceDigitalMarketingComponent;
  let fixture: ComponentFixture<ServiceDigitalMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDigitalMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDigitalMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
