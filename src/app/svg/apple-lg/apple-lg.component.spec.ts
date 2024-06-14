import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleLgComponent } from './apple-lg.component';

describe('AppleLgComponent', () => {
  let component: AppleLgComponent;
  let fixture: ComponentFixture<AppleLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleLgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
