import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosControlComponent } from './usuarios-control.component';

describe('UsuariosControlComponent', () => {
  let component: UsuariosControlComponent;
  let fixture: ComponentFixture<UsuariosControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
