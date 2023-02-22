import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TayectoriaComponent } from './tayectoria.component';

describe('TayectoriaComponent', () => {
  let component: TayectoriaComponent;
  let fixture: ComponentFixture<TayectoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TayectoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
