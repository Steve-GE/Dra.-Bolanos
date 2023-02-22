import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenSectionComponent } from './seven-section.component';

describe('SevenSectionComponent', () => {
  let component: SevenSectionComponent;
  let fixture: ComponentFixture<SevenSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
