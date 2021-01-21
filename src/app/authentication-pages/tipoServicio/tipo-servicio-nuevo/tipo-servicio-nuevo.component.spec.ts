import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicioNuevoComponent } from './tipo-servicio-nuevo.component';

describe('TipoServicioNuevoComponent', () => {
  let component: TipoServicioNuevoComponent;
  let fixture: ComponentFixture<TipoServicioNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicioNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicioNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
