import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mt4OneComponent } from './mt4-one.component';

describe('Mt4OneComponent', () => {
  let component: Mt4OneComponent;
  let fixture: ComponentFixture<Mt4OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mt4OneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mt4OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
