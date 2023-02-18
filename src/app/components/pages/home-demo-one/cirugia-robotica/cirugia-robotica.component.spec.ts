import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirugiaRoboticaComponent } from './cirugia-robotica.component';

describe('CirugiaRoboticaComponent', () => {
  let component: CirugiaRoboticaComponent;
  let fixture: ComponentFixture<CirugiaRoboticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirugiaRoboticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirugiaRoboticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
