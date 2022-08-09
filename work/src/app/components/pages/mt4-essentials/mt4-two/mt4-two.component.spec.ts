import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mt4TwoComponent } from './mt4-two.component';

describe('Mt4TwoComponent', () => {
  let component: Mt4TwoComponent;
  let fixture: ComponentFixture<Mt4TwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mt4TwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mt4TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
