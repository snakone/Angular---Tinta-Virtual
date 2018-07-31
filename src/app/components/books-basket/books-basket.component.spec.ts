import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksBasketComponent } from './books-basket.component';

describe('BooksBasketComponent', () => {
  let component: BooksBasketComponent;
  let fixture: ComponentFixture<BooksBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
