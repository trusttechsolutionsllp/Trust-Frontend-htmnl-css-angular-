import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mt4EssentialsComponent } from './mt4-essentials.component';

describe('Mt4EssentialsComponent', () => {
  let component: Mt4EssentialsComponent;
  let fixture: ComponentFixture<Mt4EssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mt4EssentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mt4EssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
