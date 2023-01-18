import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeonDeInformacionComponent } from './acordeon-de-informacion.component';

describe('AcordeonDeInformacionComponent', () => {
  let component: AcordeonDeInformacionComponent;
  let fixture: ComponentFixture<AcordeonDeInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcordeonDeInformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcordeonDeInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
