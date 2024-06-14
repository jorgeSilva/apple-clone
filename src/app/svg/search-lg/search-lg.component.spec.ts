import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLgComponent } from './search-lg.component';

describe('SearchLgComponent', () => {
  let component: SearchLgComponent;
  let fixture: ComponentFixture<SearchLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
