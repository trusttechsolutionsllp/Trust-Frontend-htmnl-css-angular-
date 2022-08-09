import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalOneComponent } from './digital-one.component';

describe('DigitalOneComponent', () => {
  let component: DigitalOneComponent;
  let fixture: ComponentFixture<DigitalOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
