import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicioControlComponent } from './tipo-servicio-control.component';

describe('TipoServicioControlComponent', () => {
  let component: TipoServicioControlComponent;
  let fixture: ComponentFixture<TipoServicioControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicioControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicioControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
