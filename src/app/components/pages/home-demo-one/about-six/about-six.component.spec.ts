import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSixComponent } from './about-six.component';

describe('AboutSixComponent', () => {
  let component: AboutSixComponent;
  let fixture: ComponentFixture<AboutSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
