import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTwoComponent } from './digital-two.component';

describe('DigitalTwoComponent', () => {
  let component: DigitalTwoComponent;
  let fixture: ComponentFixture<DigitalTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
