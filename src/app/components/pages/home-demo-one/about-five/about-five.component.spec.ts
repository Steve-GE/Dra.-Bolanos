import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFiveComponent } from './about-five.component';

describe('AboutFiveComponent', () => {
  let component: AboutFiveComponent;
  let fixture: ComponentFixture<AboutFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
