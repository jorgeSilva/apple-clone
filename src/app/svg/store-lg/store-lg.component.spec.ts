import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLgComponent } from './store-lg.component';

describe('StoreLgComponent', () => {
  let component: StoreLgComponent;
  let fixture: ComponentFixture<StoreLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreLgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
