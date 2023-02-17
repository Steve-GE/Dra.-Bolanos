import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesOneComponent } from './publicaciones-one.component';

describe('PublicacionesOneComponent', () => {
  let component: PublicacionesOneComponent;
  let fixture: ComponentFixture<PublicacionesOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
