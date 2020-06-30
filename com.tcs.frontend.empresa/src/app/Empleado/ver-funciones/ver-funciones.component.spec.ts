import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFuncionesComponent } from './ver-funciones.component';

describe('VerFuncionesComponent', () => {
  let component: VerFuncionesComponent;
  let fixture: ComponentFixture<VerFuncionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerFuncionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
