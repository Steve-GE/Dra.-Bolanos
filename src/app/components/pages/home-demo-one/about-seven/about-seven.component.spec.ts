import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSevenComponent } from './about-seven.component';

describe('AboutSevenComponent', () => {
  let component: AboutSevenComponent;
  let fixture: ComponentFixture<AboutSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
