import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesTwoComponent } from './publicaciones-two.component';

describe('PublicacionesTwoComponent', () => {
  let component: PublicacionesTwoComponent;
  let fixture: ComponentFixture<PublicacionesTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
